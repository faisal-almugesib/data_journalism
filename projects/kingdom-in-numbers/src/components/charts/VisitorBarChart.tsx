import { useEffect, useRef } from 'react';
import { TOP_5_VISITORS } from '@/data/saudi';

const W = 700;
const H = 360;
const ML = 50;
const MR = 20;
const MT = 30;
const MB = 36;
const INNER_W = W - ML - MR;
const INNER_H = H - MT - MB;
const MAX_VAL = 3.5;
const Y_TICKS = [0, 1, 2, 3, 3.5];
const BAR_W = (INNER_W / TOP_5_VISITORS.length) * 0.7;
const GAP_W = (INNER_W / TOP_5_VISITORS.length) * 0.3;

/**
 * Vertical bar chart of the top 5 visitor source countries (millions, 2024).
 *
 * Bars are SVG <rect>s that animate via inline `style.transition` on the y/height
 * attributes (set declaratively per-bar with cubic-bezier ease-out). Tooltip
 * is a DOM div positioned by mousemove — same approach as the 3D map.
 */
export function VisitorBarChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const tooltip = tooltipRef.current;
    if (!wrap || !tooltip) return;

    const tooltipName = tooltip.querySelector('.name') as HTMLElement;
    const tooltipCount = tooltip.querySelector('.count') as HTMLElement;
    const tooltipPct = tooltip.querySelector('.pct') as HTMLElement;

    /* ---------- hover tooltips ---------- */
    const groups = wrap.querySelectorAll<SVGGElement>('.bar-group');
    const moveHandlers: Array<(e: PointerEvent) => void> = [];
    const leaveHandlers: Array<() => void> = [];

    groups.forEach((g, i) => {
      const visitor = TOP_5_VISITORS[i]!;
      const onMove = (e: PointerEvent) => {
        const rect = wrap.getBoundingClientRect();
        tooltip.style.left = `${e.clientX - rect.left}px`;
        tooltip.style.top = `${e.clientY - rect.top}px`;
        tooltip.style.display = 'block';
        tooltip.style.borderLeft = `3px solid ${visitor.color}`;
        tooltipName.textContent = visitor.name;
        tooltipCount.textContent = `${visitor.count.toFixed(2)}M`;
        tooltipPct.textContent = `${visitor.pct.toFixed(1)}% of all visitors`;
      };
      const onLeave = () => {
        tooltip.style.display = 'none';
      };
      g.style.cursor = 'pointer';
      g.addEventListener('pointermove', onMove);
      g.addEventListener('pointerleave', onLeave);
      moveHandlers.push(onMove);
      leaveHandlers.push(onLeave);
    });

    /* ---------- intro animation ---------- */
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const rects = wrap.querySelectorAll<SVGRectElement>('.bar-rect');
            const counts = wrap.querySelectorAll<SVGTextElement>('.bar-count');
            const pcts = wrap.querySelectorAll<SVGTextElement>('.bar-pct');

            rects.forEach((r, i) => {
              const visitor = TOP_5_VISITORS[i]!;
              const targetH = (visitor.count / MAX_VAL) * INNER_H;
              r.setAttribute('height', String(targetH));
              r.setAttribute('y', String(MT + INNER_H - targetH));
            });
            counts.forEach((t, i) => {
              const visitor = TOP_5_VISITORS[i]!;
              const targetH = (visitor.count / MAX_VAL) * INNER_H;
              t.setAttribute('y', String(MT + INNER_H - targetH - 8));
              t.style.opacity = '1';
            });
            pcts.forEach((t, i) => {
              const visitor = TOP_5_VISITORS[i]!;
              const targetH = (visitor.count / MAX_VAL) * INNER_H;
              t.setAttribute('y', String(MT + INNER_H - targetH + 16));
              t.setAttribute('fill', 'rgba(255,255,255,0.95)');
            });

            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(wrap);

    return () => {
      groups.forEach((g, i) => {
        g.removeEventListener('pointermove', moveHandlers[i]!);
        g.removeEventListener('pointerleave', leaveHandlers[i]!);
      });
      obs.disconnect();
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="bar-chart" ref={wrapRef}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {TOP_5_VISITORS.map((b, i) => (
              <linearGradient key={b.name} id={`bar-g-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={b.color} stopOpacity="0.95" />
                <stop offset="100%" stopColor={b.dark} stopOpacity="1" />
              </linearGradient>
            ))}
          </defs>

          {/* Y gridlines + labels */}
          {Y_TICKS.map((t) => {
            const y = MT + INNER_H - (t / MAX_VAL) * INNER_H;
            return (
              <g key={t}>
                <line x1={ML} y1={y} x2={W - MR} y2={y} stroke="#d4cdc0" strokeWidth="0.5" strokeDasharray="2 4" />
                <text x={ML - 8} y={y + 3} fontFamily="Inter" fontSize="11" fill="#6e6a64" textAnchor="end">
                  {t.toFixed(t === 0 ? 0 : 1)}M
                </text>
              </g>
            );
          })}

          {/* Baseline */}
          <line x1={ML} y1={MT + INNER_H} x2={W - MR} y2={MT + INNER_H} stroke="#1c1c1c" strokeWidth="0.8" />

          {/* Bars */}
          {TOP_5_VISITORS.map((b, i) => {
            const x = ML + GAP_W / 2 + i * (INNER_W / TOP_5_VISITORS.length);
            const y0 = MT + INNER_H;
            const transitionDelay = i * 100;
            return (
              <g key={b.name} className="bar-group">
                <rect
                  className="bar-rect"
                  x={x}
                  y={y0}
                  width={BAR_W}
                  height={0}
                  fill={`url(#bar-g-${i})`}
                  rx={3}
                  ry={3}
                  style={{
                    transition: `y 1.2s cubic-bezier(0.22,1,0.36,1) ${transitionDelay}ms, height 1.2s cubic-bezier(0.22,1,0.36,1) ${transitionDelay}ms`,
                  }}
                />
                <text
                  className="bar-pct"
                  x={x + BAR_W / 2}
                  y={y0 - 8}
                  fontFamily="Inter"
                  fontSize="10"
                  fontWeight="600"
                  fill="rgba(255,255,255,0)"
                  textAnchor="middle"
                  style={{ transition: `opacity 0.4s ease ${transitionDelay + 800}ms` }}
                >
                  {b.pct.toFixed(1)}%
                </text>
                <text
                  className="bar-count"
                  x={x + BAR_W / 2}
                  y={y0 - 8}
                  fontFamily="Fraunces"
                  fontSize="14"
                  fontWeight="600"
                  fill="#1c1c1c"
                  textAnchor="middle"
                  style={{
                    opacity: 0,
                    transition: `y 1.2s cubic-bezier(0.22,1,0.36,1) ${transitionDelay}ms, opacity 0.4s ease ${transitionDelay + 1000}ms`,
                  }}
                >
                  {b.count.toFixed(2)}M
                </text>
                <text
                  x={x + BAR_W / 2}
                  y={y0 + 22}
                  fontFamily="Inter"
                  fontSize="13"
                  fontWeight="600"
                  fill="#1c1c1c"
                  textAnchor="middle"
                >
                  {b.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="bar-tooltip" ref={tooltipRef}>
        <div className="name" />
        <div className="count" />
        <div className="pct" />
      </div>
    </div>
  );
}
