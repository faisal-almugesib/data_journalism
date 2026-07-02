import { useEffect, useRef } from 'react';
import { VISA_PURPOSES } from '@/data/saudi';

/**
 * Horizontal stacked bar of visa purposes. Segment widths grow from 0 with a
 * staggered cubic-bezier transition. Labels under the bar give the count and
 * a one-line description for each category.
 */
export function VisaStackedBar() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const segs = stage.querySelectorAll<HTMLDivElement>('.visa-bar-seg');
            segs.forEach((seg) => {
              const target = seg.dataset.target ?? '0';
              seg.style.width = `${target}%`;
            });
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(stage);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="visa-bar-wrap">
      <div className="visa-bar-stage" ref={stageRef}>
        {VISA_PURPOSES.map((v, i) => (
          <div
            key={v.label}
            className="visa-bar-seg"
            data-target={v.pct}
            style={{
              width: '0%',
              background: v.color,
              fontSize: v.pct < 8 ? '10px' : '11.5px',
              transition: `width 1.0s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
            }}
          >
            {v.pct < 8 ? v.label : `${v.label} ${Math.round(v.pct)}%`}
          </div>
        ))}
      </div>

      <div className="visa-bar-labels">
        {VISA_PURPOSES.map((v) => (
          <div className="row" key={v.label}>
            <div className="dot" style={{ background: v.color }} />
            <div>
              <div>
                <span className="num">{v.count}</span> · {v.label}
              </div>
              <div className="why">{v.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
