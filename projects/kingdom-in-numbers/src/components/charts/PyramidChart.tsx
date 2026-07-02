import { useEffect, useRef } from 'react';
import { KSA_PYRAMID, PYRAMID_PIVOT_IDX } from '@/data/saudi';

const MAX_PCT = 8;
const STAGGER_PER_ROW = 60;

/**
 * Animated population pyramid.
 *
 * Each row is a CSS grid with five columns:
 *   [%-male | bar-male | age-label | bar-female | %-female]
 * Bars use scaleX with origin pinned to the center spine (right edge for
 * male, left edge for female), so they grow outward from the middle.
 *
 * The animation propagates from the largest bar (25-29 — index 10) outward
 * by Math.abs(idx - PIVOT_IDX) * 60ms. This matches the chart's visual focus.
 */
export function PyramidChart() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const rows = wrap.querySelectorAll<HTMLDivElement>('.pyr-row');
            rows.forEach((row) => {
              const idx = parseInt(row.dataset.idx ?? '0', 10);
              const dist = Math.abs(idx - PYRAMID_PIVOT_IDX);
              window.setTimeout(() => row.classList.add('in'), dist * STAGGER_PER_ROW);
            });
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(wrap);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pyr-wrap">
      <div className="pyr-axis">
        <div />
        <div className="scale-m">
          <span>8%</span><span>6%</span><span>4%</span><span>2%</span><span>0%</span>
        </div>
        <div className="head">AGE</div>
        <div className="scale-f">
          <span>0%</span><span>2%</span><span>4%</span><span>6%</span><span>8%</span>
        </div>
        <div />
      </div>

      <div ref={wrapRef}>
        {KSA_PYRAMID.map((r, idx) => {
          const mPct = (r.m / MAX_PCT) * 100;
          const fPct = (r.f / MAX_PCT) * 100;
          return (
            <div className="pyr-row" data-idx={idx} key={r.age}>
              <div className="pcm">{r.m.toFixed(1)}%</div>
              <div className="bar-m">
                <div className="fill" style={{ width: `${mPct}%` }} />
              </div>
              <div className="age">{r.age}</div>
              <div className="bar-f">
                <div className="fill" style={{ width: `${fPct}%` }} />
              </div>
              <div className="pcf">{r.f.toFixed(1)}%</div>
            </div>
          );
        })}
      </div>

      <div className="pyr-axis">
        <div />
        <div className="head" style={{ textAlign: 'right', fontWeight: 700, color: '#1a5e36' }}>
          ← MALE
        </div>
        <div className="head" />
        <div className="head" style={{ textAlign: 'left', fontWeight: 700, color: '#4caf7d' }}>
          FEMALE →
        </div>
        <div />
      </div>
    </div>
  );
}
