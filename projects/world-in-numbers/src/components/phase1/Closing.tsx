import { CLOSING_2050 } from '../../data/cities';
import { SectionRule } from '../Common';

export default function Closing() {
  return (
    <div style={{ padding: '56px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionRule>Looking Ahead · 2050</SectionRule>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
        }}>
          What the Next 30 Years Hold
        </h2>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginBottom: 32,
        }}>
          If current trends hold, the world in 2050 will look profoundly different in its distribution
          of people — and so will the Arab world within it.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 1, background: 'var(--color-line-2)',
          border: '0.5px solid var(--color-line-2)', borderRadius: 4,
          overflow: 'hidden', marginBottom: 36,
        }}>
          {CLOSING_2050.map(c => (
            <div key={c.title} style={{ background: 'var(--color-paper)', padding: '22px 18px' }}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500,
                lineHeight: 1, marginBottom: 8,
              }}>
                {c.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 600, marginBottom: 4,
              }}>
                {c.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 11,
                color: 'var(--color-muted)', lineHeight: 1.5,
              }}>
                {c.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '0.5px solid var(--color-line)', paddingTop: 18 }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--color-muted)',
            lineHeight: 1.7, fontStyle: 'italic', marginBottom: 18,
          }}>
            Data sources: UN World Population Prospects 2024; World Bank Open Data; GASTAT Saudi Arabia;
            UN Habitat World Cities Report 2022.
          </p>
          <div style={{ height: 3, background: 'var(--color-ink)', marginBottom: 2 }} />
          <div style={{ height: 1, background: 'var(--color-ink)', marginBottom: 12 }} />
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 8,
          }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500 }}>
              The World in Numbers
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--color-muted)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Phase I of III · Population
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
