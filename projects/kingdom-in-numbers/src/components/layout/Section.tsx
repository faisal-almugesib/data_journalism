import type { ReactNode } from 'react';

type Variant = 'default' | 'alt' | 'dark';

interface SectionProps {
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly label?: string;       // shown in the section-rule above the heading
  readonly className?: string;
}

/**
 * Standard article section: full-bleed background, capped inner column.
 *
 * - `default`  → paper background
 * - `alt`      → slightly darker paper (alternates section-to-section)
 * - `dark`     → KSA-green gradient (used for Vision 2030)
 *
 * If `label` is given, renders the small uppercase eyebrow framed by horizontal rules.
 */
export function Section({ children, variant = 'default', label, className }: SectionProps) {
  const cls = `section${variant !== 'default' ? ` ${variant}` : ''}${className ? ` ${className}` : ''}`;
  return (
    <div className={cls}>
      <div className="container">
        {label && (
          <div className="section-rule">
            <div className="ln" />
            <span>{label}</span>
            <div className="ln" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
