import { useEffect, useRef } from 'react';
import { TOP_5_RESIDENTS } from '@/data/saudi';

const AXIS_MAX = 18;          // % — slight headroom over the largest value (15.8%)
const AXIS_TICKS = [0, 4, 8, 12, 16];
const LEFT_PAD = 70;          // px of layout the flag column + gap eats
const RIGHT_PAD = 78;         // px the % column eats

/**
 * Proportional flag-bar chart for Top 5 resident nationalities.
 *
 * Each row's bar width = (pct / AXIS_MAX) * 100% of the track — so 15.8%
 * really is 15.8% of the chart, no scaling tricks. The bar fill is a
 * gradient from the country's two flag colors.
 *
 * Bars animate on enter (one per row, 120ms stagger).
 */
export function FlagBarChart() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const fills = list.querySelectorAll<HTMLDivElement>('.flagbar-fill');
            fills.forEach((fill, i) => {
              const target = parseFloat(fill.dataset.target ?? '0');
              window.setTimeout(() => {
                fill.style.width = `${target}%`;
                fill.classList.add('in');
              }, i * 120);
            });
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(list);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="flagbar-list" ref={listRef}>
        {TOP_5_RESIDENTS.map((n) => {
          const widthPct = (n.pct / AXIS_MAX) * 100;
          return (
            <div key={n.name} className="flagbar-row">
              <div className="flagbar-flag">
                <svg viewBox="0 0 30 20" preserveAspectRatio="none">
                  <use href={`#${n.flagId}`} />
                </svg>
              </div>
              <div className="flagbar-track">
                <div
                  className="flagbar-fill"
                  data-target={widthPct}
                  style={{ background: `linear-gradient(90deg, ${n.c1} 0%, ${n.c2} 100%)` }}
                >
                  <span className="country">{n.name.toUpperCase()}</span>
                  <span className="count">{n.count.toFixed(2)}M</span>
                </div>
              </div>
              <div className="flagbar-pct">
                {n.pct.toFixed(1)}<span className="small">%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flagbar-axis">
        <div className="flagbar-axis-line" />
        {AXIS_TICKS.map((t) => {
          // Axis runs in the middle column between LEFT_PAD and RIGHT_PAD; ticks
          // are positioned in that band: leftPx = LEFT_PAD + (t/AXIS_MAX) * (100% - LEFT_PAD - RIGHT_PAD).
          const leftCalc = `calc(${LEFT_PAD}px + (100% - ${LEFT_PAD + RIGHT_PAD}px) * ${t / AXIS_MAX})`;
          return (
            <span key={t}>
              <span className="flagbar-axis-tick" style={{ left: leftCalc }} />
              <span className="flagbar-axis-label" style={{ left: leftCalc }}>
                {t}%
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}
