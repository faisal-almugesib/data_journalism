import { useEffect, useRef } from 'react';

/**
 * Adds the `.in` class to an element the first time it intersects the viewport.
 * Pair with the `.rev` CSS class to get fade-up reveals.
 *
 * Returns a ref to attach to the target element.
 *
 * Note: this uses a single global observer? No — one per hook call is fine since
 * the observer is cheap and disconnects after firing. Keeping it per-element
 * makes the hook composable.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.1,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.classList.contains('in')) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.disconnect();
            break;
          }
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
