import { useEffect, useRef } from 'react';
import { PROJECTION, type Series } from '@/data/saudi';

const W = 700;
const H = 360;
const ML = 60;
const MR = 80;
const MT = 40;
const MB = 40;
const INNER_W = W - ML - MR;
const INNER_H = H - MT - MB;
const MAX_Y = 60;
const Y_TICKS = [60, 45, 30, 15, 0];
const X_TICKS = [2010, 2024, 2030, 2040, 2050];

const x2px = (year: number): number =>
  ML + ((year - 2010) / (2050 - 2010)) * INNER_W;
const y2px = (val: number): number =>
  MT + INNER_H - (val / MAX_Y) * INNER_H;

const buildPath = (arr: Series): string =>
  arr.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x2px(x)},${y2px(y)}`).join(' ');

/**
 * Citizens vs resident expats, 2010–2050.
 *
 * Solid lines for actuals (GASTAT data through 2024); dashed lines for the
 * projection. The dashed style is applied after the stroke-draw animation
 * completes — so the line "draws" smoothly first, then dashes appear.
 *
 * The expats line crosses over the citizens line around 2030 — a marker calls
 * this out as the article's central tension.
 */
export function ProjectionChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ids = ['proj-c-actual', 'proj-c-proj', 'proj-r-actual', 'proj-r-proj'] as const;
    ids.forEach((id, i) => {
      const p = svg.querySelector<SVGPathElement>(`#${id}`);
      if (!p) return;
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = String(len);
      p.style.transition = `stroke-dashoffset 1.5s ease-out ${i * 200}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ids.forEach((id) => {
              const p = svg.querySelector<SVGPathElement>(`#${id}`);
              if (!p) return;
              p.style.strokeDashoffset = '0';
              if (id.endsWith('-proj')) {
                window.setTimeout(() => {
                  p.style.strokeDasharray = '5 4';
                }, 1700);
              }
            });
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(svg);
    return () => obs.disconnect();
  }, []);

  const todayX = x2px(2024);

  return (
    <div className="chart-wrap">
      <svg
        className="chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ height: 360 }}
        ref={svgRef}
      >
        {Y_TICKS.map((t) => {
          const y = y2px(t);
          return (
            <g key={t}>
              <line x1={ML} y1={y} x2={W - MR} y2={y} stroke="#d4cdc0" strokeWidth="0.5" />
              <text x={ML - 8} y={y + 3} fontFamily="Inter" fontSize="10" fill="#6e6a64" textAnchor="end">
                {t}M
              </text>
            </g>
          );
        })}
        {X_TICKS.map((yr) => (
          <text
            key={yr}
            x={x2px(yr)}
            y={H - 12}
            fontFamily="Inter"
            fontSize="10"
            fill="#6e6a64"
            textAnchor="middle"
          >
            {yr}
          </text>
        ))}

        <line x1={ML} y1={MT + INNER_H} x2={W - MR} y2={MT + INNER_H} stroke="#1c1c1c" strokeWidth="0.8" />

        {/* Today marker + future shading */}
        <line
          x1={todayX}
          y1={MT}
          x2={todayX}
          y2={MT + INNER_H}
          stroke="#3a3a3a"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <rect x={todayX - 50} y={MT - 18} width="100" height="16" fill="#3a3a3a" rx="2" />
        <text
          x={todayX}
          y={MT - 7}
          fontFamily="Inter"
          fontSize="9.5"
          fill="white"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          2024 · TODAY
        </text>
        <rect
          x={todayX}
          y={MT}
          width={INNER_W - (todayX - ML)}
          height={INNER_H}
          fill="#f0ebe2"
          opacity="0.5"
        />

        {/* Lines */}
        <path id="proj-c-actual" d={buildPath(PROJECTION.cActual)} fill="none" stroke="#1a5e36" strokeWidth="2.5" strokeLinecap="round" />
        <path id="proj-c-proj" d={buildPath(PROJECTION.cProj)} fill="none" stroke="#1a5e36" strokeWidth="2.5" strokeLinecap="round" />
        <path id="proj-r-actual" d={buildPath(PROJECTION.rActual)} fill="none" stroke="#d4a73c" strokeWidth="2.5" strokeLinecap="round" />
        <path id="proj-r-proj" d={buildPath(PROJECTION.rProj)} fill="none" stroke="#d4a73c" strokeWidth="2.5" strokeLinecap="round" />

        {/* Crossover callout (~2030) */}
        <circle cx={x2px(2030)} cy={y2px(22)} r="5" fill="white" stroke="#b85c1a" strokeWidth="2" />
        <text
          x={x2px(2030) + 10}
          y={y2px(22) - 8}
          fontFamily="Inter"
          fontSize="10"
          fill="#b85c1a"
          fontWeight="700"
        >
          CROSSOVER ZONE ~2030
        </text>
        <text
          x={x2px(2030) + 10}
          y={y2px(22) + 4}
          fontFamily="Inter"
          fontSize="9.5"
          fill="#3a3a3a"
          fontStyle="italic"
        >
          if current trends hold
        </text>

        {/* End-point labels */}
        <text x={x2px(2050) + 10} y={y2px(31) + 3} fontFamily="Fraunces" fontSize="13" fill="#1a5e36" fontWeight="600">
          ~31M
        </text>
        <text x={x2px(2050) + 10} y={y2px(31) + 15} fontFamily="Inter" fontSize="9.5" fill="#1a5e36">
          citizens
        </text>
        <text x={x2px(2050) + 10} y={y2px(50) + 3} fontFamily="Fraunces" fontSize="13" fill="#8a6818" fontWeight="600">
          ~50M
        </text>
        <text x={x2px(2050) + 10} y={y2px(50) + 15} fontFamily="Inter" fontSize="9.5" fill="#8a6818">
          expats
        </text>

        {/* Today markers */}
        <circle cx={todayX} cy={y2px(19.62)} r="3.5" fill="#1a5e36" />
        <circle cx={todayX} cy={y2px(15.7)} r="3.5" fill="#d4a73c" />
      </svg>
    </div>
  );
}
