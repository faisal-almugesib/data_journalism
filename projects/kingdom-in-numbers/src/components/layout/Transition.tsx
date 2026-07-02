import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

/**
 * The little arrow-and-bridge motif we use to cap each act and prepare the
 * reader for the next one. The reveal is opt-in (the parent decides whether
 * to wrap a `.rev`-targeted ref by passing `reveal`).
 */
export function Transition({
  children,
  reveal = true,
}: {
  readonly children: ReactNode;
  readonly reveal?: boolean;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={`transition${reveal ? ' rev' : ''}`} ref={reveal ? ref : undefined}>
      <div className="arrow">↓</div>
      <div className="text">{children}</div>
    </div>
  );
}
