import { KSA_STATS } from '../../data/cities';

export default function KsaSpotlight() {
  return (
    <div style={{ background: '#0b3520', padding: '64px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
          <svg style={{ width: 24, height: 16, border: '0.5px solid rgba(255,255,255,0.3)' }}>
            <use href="#flag-ksa" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.18em',
            color: 'var(--color-ksa-light)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            Saudi Arabia · Data Spotlight
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
          color: '#f0f9f4',
        }}>
          If 100 People Lived in Saudi Arabia…
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.78,
          color: 'rgba(232,245,238,0.7)', marginBottom: 28, maxWidth: 540,
        }}>
          Saudi Arabia's population is unlike most countries' — roughly 4 in 10 residents are foreign workers.
          Here's what 100 representative residents look like.
        </p>

        {/* 100-figure grid */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 6, padding: '28px 22px', marginBottom: 32,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end',
            gap: 14, marginBottom: 14,
          }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 500,
                lineHeight: 1, color: 'var(--color-ksa-light)',
              }}>
                63<span style={{ fontSize: 26 }}>%</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.14em',
                color: '#e8f5ee', marginTop: 6, textTransform: 'uppercase', fontWeight: 600,
              }}>
                Saudi Nationals
              </div>
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)', fontSize: 14, color: 'rgba(232,245,238,0.4)',
              fontStyle: 'italic', paddingBottom: 8,
            }}>
              vs
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 500,
                lineHeight: 1, color: 'var(--color-gold)',
              }}>
                37<span style={{ fontSize: 26 }}>%</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.14em',
                color: '#e8f5ee', marginTop: 6, textTransform: 'uppercase', fontWeight: 600,
              }}>
                Expatriates
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 5,
            maxWidth: 320, margin: '20px auto 14px',
          }}>
            {Array.from({ length: 100 }).map((_, i) => (
              <svg
                key={i}
                style={{
                  width: '100%', aspectRatio: '8 / 14',
                  color: i < 63 ? 'var(--color-ksa-light)' : 'var(--color-gold)',
                }}
              >
                <use href="#person" />
              </svg>
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(232,245,238,0.5)',
            textAlign: 'center', marginTop: 8, lineHeight: 1.5,
          }}>
            Each figure ≈ 1 in 100 residents. Approximate split based on GASTAT 2023.
          </p>
        </div>

        {/* Stat cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 12, marginBottom: 32,
        }}>
          {KSA_STATS.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 4, padding: '20px 16px',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500,
                color: 'var(--color-ksa-light)', lineHeight: 1, marginBottom: 10,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.1em',
                color: '#e8f5ee', marginBottom: 5, textTransform: 'uppercase', fontWeight: 600,
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 11,
                color: 'var(--color-ksa-mid)', lineHeight: 1.5,
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: '3px solid var(--color-ksa-light)', paddingLeft: 20 }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.7,
            color: 'rgba(232,245,238,0.88)', fontStyle: 'italic', margin: 0,
          }}>
            The expatriate share is the single most important number for Vision 2030. Every percentage point
            of "Saudization" reshapes the labor market — and the population pyramid itself.
          </p>
        </div>
      </div>
    </div>
  );
}
