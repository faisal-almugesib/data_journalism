import { useEffect, useState } from 'react';

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Animates a number from 0 to `target` after a delay, returning the current value.
 *
 * Component should format the number itself (e.g. `.toLocaleString()` for the hero
 * counter). Always finishes at exactly `target` to avoid floating-point fuzz on
 * the last frame.
 */
export function useCountUp(
  target: number,
  duration = 2800,
  delay = 400,
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;

    const step = (ts: number) => {
      if (start === null) start = ts + delay;
      const elapsed = Math.max(0, ts - start);
      const p = Math.min(elapsed / duration, 1);
      setValue(Math.floor(easeInOutCubic(p) * target));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay]);

  return value;
}
