import type { ReactNode } from 'react';

interface Props { children: ReactNode; }

export function SectionRule({ children }: Props) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex-1 h-px bg-line-2" style={{ height: '0.5px', background: 'var(--color-line-2)' }} />
      <span className="font-sans text-[10px] tracking-[0.16em] text-muted uppercase"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-muted)' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '0.5px', background: 'var(--color-line-2)' }} />
    </div>
  );
}

interface CBoxProps { children: ReactNode; padding?: boolean; }
export function CBox({ children, padding = true }: CBoxProps) {
  return (
    <div
      style={{
        border: '0.5px solid var(--color-line-2)',
        borderRadius: 4,
        padding: padding ? 22 : 0,
        margin: '24px 0',
        background: 'var(--color-paper)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
        overflow: padding ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  );
}

export function Kpi({ children }: Props) {
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.14em',
      color: 'var(--color-muted)', marginBottom: 6, textTransform: 'uppercase',
    }}>{children}</div>
  );
}

export function Caption({ children }: Props) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--color-muted)',
      marginTop: 14, paddingTop: 12, borderTop: '0.5px solid var(--color-line)',
      lineHeight: 1.6,
    }}>{children}</p>
  );
}
