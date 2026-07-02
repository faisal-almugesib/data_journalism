import { useEffect, useRef } from 'react';

const TOTAL_FIGURES = 50;
const CITIZEN_FIGURES = 28;     // 28 / 50 ≈ 55.6% — matches the headline citizen share
const STAGGER_MS = 26;

/**
 * 50-figure pictogram: 28 KSA-green figures (citizens) followed by 22 gold
 * figures (resident expats). Each figure ≈ 706,000 people.
 *
 * Figures fade in one by one with a 26ms stagger after the grid scrolls into
 * view, so the proportion is visually established as the chart appears.
 */
export function PictogramFifty() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const figs = grid.querySelectorAll<SVGSVGElement>('.pop3-fig');
            figs.forEach((f, i) => {
              window.setTimeout(() => f.classList.add('in'), i * STAGGER_MS);
            });
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pop3" ref={gridRef}>
      {Array.from({ length: TOTAL_FIGURES }, (_, i) => {
        const isCitizen = i < CITIZEN_FIGURES;
        return (
          <svg
            key={i}
            className="pop3-fig"
            style={{ color: isCitizen ? 'var(--color-ksa)' : 'var(--color-gold)' }}
          >
            <use href="#person" />
          </svg>
        );
      })}
    </div>
  );
}
