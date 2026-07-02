/**
 * Four hand-drawn isometric skyline SVGs depicting Riyadh in 1960 / 1980 /
 * 2000 / 2024. Each is a tiny vector scene built from polygons — no images.
 *
 * The four buildings escalate in height, density, and palette to convey the
 * city's transformation:
 *   1960: low mud-brick houses + a single date palm (warm tones)
 *   1980: simple concrete blocks (still warm)
 *   2000: blue-tinted glass mid-rises with grid windows
 *   2024: skyscrapers including a Burj-like silhouette with the iconic arch
 *
 * Each tower component returns just the inner <g>/elements expected within
 * the parent's <svg viewBox="0 0 100 120">.
 */

const SAND_BASE = (
  <>
    <polygon points="6,108 50,90 94,108 50,126" fill="#c8b485" stroke="#9a8758" strokeWidth=".4" />
    <polygon points="6,108 50,90 94,108 94,113 50,131 6,113" fill="#9a8758" opacity=".3" />
  </>
);

/* ---------- 1960 — mud-brick town ---------- */
function Era1960() {
  return (
    <>
      {SAND_BASE}
      {/* Three small mud-brick houses */}
      <g>
        <polygon points="32,104 42,100 42,93 32,97" fill="#c89868" />
        <polygon points="42,100 52,104 52,97 42,93" fill="#a87a4a" />
        <polygon points="32,97 42,93 52,97 42,101" fill="#dcb084" />
      </g>
      <g>
        <polygon points="50,107 60,103 60,96 50,100" fill="#b8895c" />
        <polygon points="60,103 70,107 70,100 60,96" fill="#946a3e" />
        <polygon points="50,100 60,96 70,100 60,104" fill="#cca37a" />
      </g>
      <g>
        <polygon points="40,112 50,108 50,103 40,107" fill="#c89868" />
        <polygon points="50,108 60,112 60,107 50,103" fill="#a87a4a" />
        <polygon points="40,107 50,103 60,107 50,111" fill="#dcb084" />
      </g>
      {/* Date palm — single trunk + 4 fronds */}
      <g>
        <rect x="69" y="98" width="1" height="6" fill="#6a4a2a" />
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(-15 69.5 97)" />
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(15 69.5 97)" />
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(60 69.5 97)" />
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(120 69.5 97)" />
      </g>
    </>
  );
}

/* ---------- 1980 — oil boom mid-rises ---------- */
function Era1980() {
  return (
    <>
      {SAND_BASE}
      <g>
        <polygon points="20,102 32,98 32,68 20,72" fill="#c0b496" />
        <polygon points="32,98 44,102 44,72 32,68" fill="#9c8e6e" />
        <polygon points="20,72 32,68 44,72 32,76" fill="#d8cda8" />
      </g>
      <g>
        <polygon points="38,105 52,100 52,58 38,62" fill="#b0a888" />
        <polygon points="52,100 66,105 66,62 52,58" fill="#8c8060" />
        <polygon points="38,62 52,58 66,62 52,66" fill="#c8bc9c" />
      </g>
      <g>
        <polygon points="56,103 68,99 68,72 56,76" fill="#c0b496" />
        <polygon points="68,99 80,103 80,76 68,72" fill="#9c8e6e" />
        <polygon points="56,76 68,72 80,76 68,80" fill="#d8cda8" />
      </g>
      {/* Window grid */}
      <g fill="#4a3a2a" opacity=".55">
        {[
          [24, 78], [28, 78], [24, 83], [28, 83],
          [42, 68], [46, 68], [42, 73], [46, 73], [42, 78], [46, 78],
          [60, 82], [64, 82], [60, 87], [64, 87],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="2" height="2" />
        ))}
      </g>
    </>
  );
}

/* ---------- 2000 — blue-tinted megacity ---------- */
function Era2000() {
  return (
    <>
      {SAND_BASE}
      <g>
        <polygon points="16,103 28,99 28,52 16,56" fill="#a4b2c2" />
        <polygon points="28,99 40,103 40,56 28,52" fill="#7c8a9c" />
        <polygon points="16,56 28,52 40,56 28,60" fill="#b8c4d4" />
      </g>
      <g>
        <polygon points="34,105 48,100 48,32 34,36" fill="#b4c0d0" />
        <polygon points="48,100 62,105 62,36 48,32" fill="#8898a8" />
        <polygon points="34,36 48,32 62,36 48,40" fill="#c8d4e4" />
      </g>
      <g>
        <polygon points="52,103 64,99 64,48 52,52" fill="#a4b2c2" />
        <polygon points="64,99 76,103 76,52 64,48" fill="#7c8a9c" />
        <polygon points="52,52 64,48 76,52 64,56" fill="#b8c4d4" />
      </g>
      {/* Window grid */}
      <g fill="#2a3a4a" opacity=".55">
        {[
          [22, 62], [26, 62], [22, 70], [26, 70], [22, 78], [26, 78],
          [40, 46], [44, 46], [40, 54], [44, 54], [40, 62], [44, 62], [40, 70], [44, 70], [40, 78], [44, 78],
          [58, 62], [62, 62], [58, 70], [62, 70], [58, 78], [62, 78],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="1.6" height="1.6" />
        ))}
      </g>
    </>
  );
}

/* ---------- 2024 — skyscrapers, KAFD, Burj-like profile ---------- */
function Era2024() {
  return (
    <>
      {SAND_BASE}
      <g>
        <polygon points="14,103 24,99 24,42 14,46" fill="#8294a6" />
        <polygon points="24,99 34,103 34,46 24,42" fill="#5a6c80" />
        <polygon points="14,46 24,42 34,46 24,50" fill="#9aaab8" />
      </g>
      {/* The tallest building — Burj-like, with the iconic arched cutout */}
      <g>
        <polygon points="30,105 44,100 44,16 30,20" fill="#92a4b6" />
        <polygon points="44,100 58,105 58,20 44,16" fill="#6a7c90" />
        <polygon points="30,20 44,16 58,20 44,24" fill="#aabac8" />
        {/* Arch cutout — tiny inverted triangles to suggest the parabola */}
        <polygon points="38,18 42,17 42,8 38,9" fill="#5a6c80" />
        <polygon points="46,17 50,18 50,9 46,8" fill="#5a6c80" />
        <path d="M 42,8 Q 44,4 46,8 L 46,17 L 42,17 Z" fill="#aabac8" />
      </g>
      <g>
        <polygon points="50,103 62,99 62,28 50,32" fill="#8294a6" />
        <polygon points="62,99 74,103 74,32 62,28" fill="#5a6c80" />
        <polygon points="50,32 62,28 74,32 62,36" fill="#9aaab8" />
      </g>
      <g>
        <polygon points="66,104 78,100 78,54 66,58" fill="#92a4b6" />
        <polygon points="78,100 88,104 88,58 78,54" fill="#6a7c90" />
        <polygon points="66,58 78,54 88,58 78,62" fill="#aabac8" />
      </g>
      {/* Dense window grid */}
      <g fill="#1a2a3a" opacity=".62">
        {[
          [17, 52], [20, 52], [17, 60], [20, 60], [17, 68], [20, 68], [17, 76], [20, 76],
          [36, 28], [40, 28], [44, 28], [36, 36], [40, 36], [44, 36], [36, 44], [40, 44], [44, 44],
          [36, 52], [40, 52], [44, 52], [36, 60], [40, 60], [44, 60], [36, 68], [40, 68], [44, 68],
          [36, 76], [40, 76], [44, 76], [36, 84], [40, 84], [44, 84],
          [53, 40], [56, 40], [59, 40], [53, 50], [56, 50], [59, 50], [53, 60], [56, 60], [59, 60],
          [53, 70], [56, 70], [59, 70], [53, 80], [56, 80], [59, 80],
          [69, 64], [72, 64], [75, 64], [69, 74], [72, 74], [75, 74], [69, 84], [72, 84], [75, 84],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="1.4" height="1.4" />
        ))}
      </g>
    </>
  );
}

const ERAS = {
  '1960': Era1960,
  '1980': Era1980,
  '2000': Era2000,
  '2024': Era2024,
} as const satisfies Record<string, () => JSX.Element>;

export type EraYear = keyof typeof ERAS;

export function IsometricTower({ year }: { year: EraYear }) {
  const Era = ERAS[year];
  return (
    <svg className="iso-svg" viewBox="0 0 100 120" preserveAspectRatio="xMidYEnd meet">
      <Era />
    </svg>
  );
}
