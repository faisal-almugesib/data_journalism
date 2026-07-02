import { useEffect, useRef } from 'react';
import { GROWTH_DATA, type GrowthPoint } from '@/data/saudi';

const W = 700;
const H = 320;
const VB_PAD_R = 90;
const ML = 60;
const MR = 40;
const MT = 40;
const MB = 30;
const INNER_W = W - ML - MR;
const INNER_H = H - MT - MB;
const MAX_Y = 35;
const Y_TICKS = [35, 28, 21, 14, 7, 0];
const X_TICKS = [2010, 2014, 2018, 2020, 2022, 2024];
const VISA_LAUNCH_YEAR = 2019;

const x2px = (year: number): number =>
  ML + ((year - 2010) / (2024 - 2010)) * INNER_W;
const y2px = (val: number): number =>
  MT + INNER_H - (val / MAX_Y) * INNER_H;

const buildPath = (data: ReadonlyArray<GrowthPoint>, key: 'c' | 'r' | 'v'): string =>
  data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${x2px(d.y)},${y2px(d[key])}`).join(' ');

/**
 * Three-line chart of citizens / resident expats / annual visitors, 2010-2024.
 * Visitors line is dashed (it's an annual flow, not a stock — the citizens
 * and expats lines are point-in-time inventories).
 *
 * Each line draws via a stroke-dashoffset animation when the chart enters
 * the viewport. The visitor line briefly clears its dasharray after drawing
 * so the dashed style applies cleanly.
 */
export function GrowthLineChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ids = ['line-c', 'line-r', 'line-v'] as const;

    // Initial state: lines drawn but offset out of view
    ids.forEach((id, i) => {
      const p = svg.querySelector<SVGPathElement>(`#${id}`);
      if (!p) return;
      const len = p.getTotalLength();
      // 'line-v' is the visitors line (will be dashed after intro)
      p.style.strokeDasharray = id === 'line-v' ? `${len} ${len}` : `${len}`;
      p.style.strokeDashoffset = String(len);
      p.style.transition = `stroke-dashoffset 1.6s ease-out ${i * 200}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ids.forEach((id) => {
              const p = svg.querySelector<SVGPathElement>(`#${id}`);
              if (!p) return;
              p.style.strokeDashoffset = '0';
              if (id === 'line-v') {
                window.setTimeout(() => {
                  p.style.strokeDasharray = '6 3';
                }, 1800);
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

  const visaX = x2px(VISA_LAUNCH_YEAR);
  const last = GROWTH_DATA[GROWTH_DATA.length - 1]!;

  return (
    <div className="chart-wrap">
      <svg
        className="chart-svg"
        viewBox={`0 0 ${W + VB_PAD_R} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        ref={svgRef}
      >
        {/* Y gridlines */}
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

        {/* X labels */}
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

        {/* Baseline */}
        <line x1={ML} y1={MT + INNER_H} x2={W - MR} y2={MT + INNER_H} stroke="#1c1c1c" strokeWidth="0.8" />

        {/* Tourist visa launch marker (2019) */}
        <line
          x1={visaX}
          y1={MT}
          x2={visaX}
          y2={MT + INNER_H}
          stroke="#b85c1a"
          strokeWidth="0.6"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <rect x={visaX - 50} y={MT - 18} width="100" height="16" fill="#b85c1a" rx="2" />
        <text
          x={visaX}
          y={MT - 7}
          fontFamily="Inter"
          fontSize="9.5"
          fill="white"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          2019 · TOURIST VISA
        </text>

        {/* Lines */}
        <path
          id="line-c"
          d={buildPath(GROWTH_DATA, 'c')}
          fill="none"
          stroke="#1a5e36"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="line-r"
          d={buildPath(GROWTH_DATA, 'r')}
          fill="none"
          stroke="#d4a73c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="line-v"
          d={buildPath(GROWTH_DATA, 'v')}
          fill="none"
          stroke="#b85c1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 3"
        />

        {/* COVID-19 dot */}
        <circle cx={x2px(2020)} cy={y2px(4)} r="4" fill="#b85c1a" stroke="white" strokeWidth="1.5" />
        <text
          x={x2px(2020) + 10}
          y={y2px(4) + 4}
          fontFamily="Inter"
          fontSize="10"
          fill="#3a3a3a"
          fontStyle="italic"
        >
          COVID-19
        </text>

        {/* End-point markers */}
        <circle cx={x2px(last.y)} cy={y2px(last.c)} r="4" fill="#1a5e36" />
        <text
          x={x2px(last.y) + 10}
          y={y2px(last.c) + 4}
          fontFamily="Fraunces"
          fontSize="13"
          fill="#1a5e36"
          fontWeight="600"
        >
          {last.c.toFixed(1)}M
        </text>
        <circle cx={x2px(last.y)} cy={y2px(last.r)} r="4" fill="#d4a73c" />
        <text
          x={x2px(last.y) + 10}
          y={y2px(last.r) + 4}
          fontFamily="Fraunces"
          fontSize="13"
          fill="#8a6818"
          fontWeight="600"
        >
          {last.r.toFixed(1)}M
        </text>
        <circle cx={x2px(last.y)} cy={y2px(last.v)} r="4" fill="#b85c1a" />
        <text
          x={x2px(last.y) + 10}
          y={y2px(last.v) + 4}
          fontFamily="Fraunces"
          fontSize="13"
          fill="#b85c1a"
          fontWeight="600"
        >
          {last.v.toFixed(1)}M
        </text>
      </svg>
    </div>
  );
}
