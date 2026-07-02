import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { REGION_POLYGONS, type RegionId } from '@/data/regions';
import { REGION_META, type RegionMeta, type Tier } from '@/data/saudi';

/* ---------- helpers ---------- */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** Square-root scale: compresses dynamic range so smallest regions stay visible. */
function scaleSqrt(domain: [number, number], range: [number, number]) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  return (v: number) => {
    const t = Math.max(0, Math.min(1, (v - d0) / (d1 - d0)));
    return r0 + Math.sqrt(t) * (r1 - r0);
  };
}

/** Color palette by population tier — ExtrudeGeometry has 2 material groups (top+sides). */
const TIER_COLORS: Record<Tier, { side: number; top: number; edge: number }> = {
  1: { side: 0x1a5e36, top: 0x4cdf90, edge: 0x0e4a28 },
  2: { side: 0x2a7a4e, top: 0x7eba99, edge: 0x173d28 },
  3: { side: 0x6b6356, top: 0xa39988, edge: 0x3a3528 },
};

interface RegionMeshUserData {
  region: RegionId;
  meta: RegionMeta;
  targetH: number;
  delay: number;
  edges: THREE.LineSegments;
}

type RegionMesh = THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshStandardMaterial[]> & {
  userData: RegionMeshUserData;
};

/**
 * Extruded 3D country map of Saudi Arabia.
 *
 * Each region's real polygon is fed to THREE.Shape, then ExtrudeGeometry
 * pushes it up by an amount proportional to population (sqrt-scaled so
 * Riyadh tops at ~5× Al-Bahah without flattening the rest).
 *
 * The whole map is built once on mount; the only per-frame work is
 * OrbitControls damping + an intro scale-up animation that runs after
 * the canvas scrolls into view.
 *
 * Hover tooltip is a DOM div positioned by raycaster output — pointer
 * coords go to the tooltip ref directly so React doesn't re-render
 * sixty times a second.
 */
export function RegionMap3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const tooltip = tooltipRef.current;
    if (!wrap || !canvas || !tooltip) return;

    /* ---------- Scale ---------- */
    const allPops = (Object.values(REGION_META) as RegionMeta[]).map((m) => m.pop);
    const maxPop = Math.max(...allPops);
    const heightScale = scaleSqrt([0, maxPop], [0.1, 2.0]);

    /* ---------- Scene ---------- */
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0d1a14, 18, 35);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(2, 9, 12);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    /* ---------- Lighting (key + fill + rim) ---------- */
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(6, 12, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.left = -10;
    keyLight.shadow.camera.right = 10;
    keyLight.shadow.camera.top = 10;
    keyLight.shadow.camera.bottom = -10;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8fc8ff, 0.3);
    fillLight.position.set(-6, 5, -8);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x4cdf90, 0.4);
    rimLight.position.set(0, 4, -10);
    scene.add(rimLight);

    /* ---------- Ground plane (catches shadows) ---------- */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ color: 0x0d1a14, roughness: 1, metalness: 0 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.001;
    ground.receiveShadow = true;
    scene.add(ground);

    /* ---------- Build region meshes ---------- */
    const regionMeshes: RegionMesh[] = [];

    (Object.entries(REGION_POLYGONS) as Array<[RegionId, typeof REGION_POLYGONS[RegionId]]>).forEach(
      ([rid, polygon]) => {
        const meta = REGION_META[rid];
        const targetH = heightScale(meta.pop);
        const colors = TIER_COLORS[meta.tier];

        // Polygon is an [x,y] sequence in the map plane; THREE.Shape uses xy
        const shape = new THREE.Shape();
        const first = polygon[0];
        if (!first) return;
        shape.moveTo(first[0], first[1]);
        for (let i = 1; i < polygon.length; i++) {
          const p = polygon[i]!;
          shape.lineTo(p[0], p[1]);
        }
        shape.closePath();

        // depth=targetH, then rotate -PI/2 around X so extrusion goes UP (Y axis)
        const geom = new THREE.ExtrudeGeometry(shape, {
          depth: targetH,
          bevelEnabled: true,
          bevelThickness: 0.04,
          bevelSize: 0.04,
          bevelSegments: 2,
          curveSegments: 1,
        });
        geom.rotateX(-Math.PI / 2);

        const sideMat = new THREE.MeshStandardMaterial({
          color: colors.side,
          emissive: colors.edge,
          emissiveIntensity: 0.12,
          metalness: 0.05,
          roughness: 0.6,
          flatShading: true,
        });
        const topMat = new THREE.MeshStandardMaterial({
          color: colors.top,
          emissive: colors.side,
          emissiveIntensity: 0.08,
          metalness: 0.05,
          roughness: 0.5,
        });

        // ExtrudeGeometry has 2 material groups: 0 = top/bottom caps, 1 = sides
        const mesh = new THREE.Mesh(geom, [topMat, sideMat]) as RegionMesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.scale.y = 0.001; // animate-up from flat

        // Outline edges for atlas feel
        const edgesGeom = new THREE.EdgesGeometry(geom, 25);
        const edgesMat = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.18,
        });
        const edges = new THREE.LineSegments(edgesGeom, edgesMat);
        edges.scale.copy(mesh.scale);

        mesh.userData = { region: rid, meta, targetH, delay: 0, edges };

        scene.add(mesh);
        scene.add(edges);
        regionMeshes.push(mesh);
      },
    );

    // Sort largest-first so Riyadh fires first in the staggered intro
    regionMeshes.sort((a, b) => b.userData.meta.pop - a.userData.meta.pop);
    regionMeshes.forEach((m, i) => {
      m.userData.delay = i * 80;
    });

    /* ---------- Orbit controls (rotate-only) ---------- */
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(0, 0.5, 0);
    controls.maxPolarAngle = Math.PI / 2.4;
    controls.minPolarAngle = Math.PI / 5;
    controls.rotateSpeed = 0.5;
    controls.update();

    /* ---------- Hover (raycaster + DOM tooltip) ---------- */
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hovered: RegionMesh | null = null;

    const tooltipName = tooltip.querySelector('.name') as HTMLElement;
    const tooltipVals = tooltip.querySelector('.vals') as HTMLElement;
    const tooltipPct = tooltip.querySelector('.pct') as HTMLElement;

    const setHovered = (m: RegionMesh | null) => {
      // Reset previous
      if (hovered && hovered !== m) {
        hovered.material[0]!.emissiveIntensity = 0.08;
        hovered.material[1]!.emissiveIntensity = 0.12;
      }
      hovered = m;
      if (m) {
        m.material[0]!.emissiveIntensity = 0.4;
        m.material[1]!.emissiveIntensity = 0.32;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(regionMeshes, false);

      if (hits.length > 0) {
        const m = hits[0]!.object as RegionMesh;
        setHovered(m);
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.clientX - rect.left}px`;
        tooltip.style.top = `${e.clientY - rect.top}px`;
        tooltipName.textContent = m.userData.meta.name;
        tooltipVals.textContent = `${m.userData.meta.pop.toFixed(2)}M`;
        tooltipPct.textContent = `${m.userData.meta.pct.toFixed(1)}% of all residents`;
        canvas.style.cursor = 'pointer';
      } else {
        if (hovered) setHovered(null);
        tooltip.style.display = 'none';
        canvas.style.cursor = '';
      }
    };

    const onPointerLeave = () => {
      if (hovered) setHovered(null);
      tooltip.style.display = 'none';
      canvas.style.cursor = '';
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    /* ---------- Intro animation: trigger when wrap enters viewport ---------- */
    let animActive = false;
    let animStart: number | null = null;

    const introObs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animActive = true;
            animStart = null;
            introObs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    introObs.observe(wrap);

    /* ---------- Render loop ---------- */
    let raf = 0;
    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      controls.update();

      if (animActive) {
        if (animStart === null) animStart = ts;
        const elapsed = ts - animStart;
        for (const m of regionMeshes) {
          const t = (elapsed - m.userData.delay) / 1200;
          const clamped = Math.max(0, Math.min(1, t));
          const eased = easeOutQuart(clamped);
          const scaleY = Math.max(0.001, eased);
          m.scale.y = scaleY;
          m.userData.edges.scale.y = scaleY;
        }
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    /* ---------- Cleanup ---------- */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      introObs.disconnect();
      controls.dispose();
      // Dispose geometries + materials to release GPU memory
      for (const m of regionMeshes) {
        m.geometry.dispose();
        m.material.forEach((mat) => mat.dispose());
        m.userData.edges.geometry.dispose();
        (m.userData.edges.material as THREE.Material).dispose();
      }
      ground.geometry.dispose();
      (ground.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="map3d-wrap" ref={wrapRef}>
      <canvas className="map3d-canvas" ref={canvasRef} />
      <div className="map3d-tooltip" ref={tooltipRef}>
        <div className="name" />
        <div className="vals" />
        <div className="pct" />
      </div>
      <div className="map3d-legend">
        <div className="h">POPULATION</div>
        <div className="row">
          <span className="sw" style={{ background: 'linear-gradient(90deg,#1a5e36,#4cdf90)' }} />
          5M+
        </div>
        <div className="row">
          <span className="sw" style={{ background: 'linear-gradient(90deg,#2a7a4e,#7eba99)' }} />
          1.5–3M
        </div>
        <div className="row">
          <span className="sw" style={{ background: 'linear-gradient(90deg,#8a8070,#cac1aa)' }} />
          &lt; 1M
        </div>
      </div>
      <div className="map3d-hint">Drag to rotate · Hover any region</div>
    </div>
  );
}
