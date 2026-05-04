import { useCounter } from '../../hooks/useCounter';

export function Masthead() {
  return (
    <div style={{ padding: '0 24px' }}>
      <div style={{ height: 3, background: 'var(--color-ink)' }} />
      <div style={{ height: 1, background: 'var(--color-ink)', marginTop: 2 }} />
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: '12px 0', borderBottom: '0.5px solid var(--color-line)',
      }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>
          The World in Numbers
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.14em',
          color: 'var(--color-muted)', textTransform: 'uppercase',
        }}>
          Data Journalism · Phase I
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const count = useCounter(8_215_000_000);
  return (
    <div style={{ background: '#0d0d0d', padding: '64px 24px 56px', position: 'relative', overflow: 'hidden' }}>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em',
        color: 'rgba(255,255,255,0.4)', marginBottom: 18, textTransform: 'uppercase',
      }}>
        Population · Age · Urbanization
      </p>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 6vw, 64px)',
        fontWeight: 500, color: '#f5f0e8', lineHeight: 1, marginBottom: 8,
        letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums',
      }}>
        {count.toLocaleString()}
      </div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.14em',
        color: 'rgba(255,255,255,0.32)', marginBottom: 32, textTransform: 'uppercase',
      }}>
        Estimated World Population · 2025
      </p>
      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 5vw, 48px)',
        fontWeight: 500, lineHeight: 1.15, color: '#f5f0e8', marginBottom: 16,
        maxWidth: 580, letterSpacing: '-0.015em',
      }}>
        Eight Billion People —<br/>
        <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(245,240,232,0.85)' }}>
          And We're Counting Wrong
        </em>
      </h1>
      <p style={{
        fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.7,
        color: 'rgba(245,240,232,0.65)', maxWidth: 520,
      }}>
        The headline says we've never had more people. The real story isn't about the total —
        it's about shape, age, and an imbalance quietly reshaping every economy on Earth.
      </p>
    </div>
  );
}
