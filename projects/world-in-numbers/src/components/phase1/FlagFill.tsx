import { motion } from 'framer-motion';
import { TOP_8 } from '../../data/countries';
import { SectionRule, CBox, Kpi, Caption } from '../Common';

export default function FlagFill() {
  return (
    <div style={{ padding: '56px 24px', background: 'var(--color-paper-2)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionRule>Act I · Size</SectionRule>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
        }}>
          Eight Countries Hold Half the World
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginBottom: 16 }}>
          Just eight nations together hold more than <strong style={{ fontWeight: 600 }}>53%</strong> of all
          human beings on Earth. Each flag below is shown at full size — but only fills with full color up to
          that country's share of the global population.
        </p>
        <blockquote style={{
          fontFamily: 'var(--font-serif)', fontSize: 19, fontStyle: 'italic', lineHeight: 1.55,
          borderLeft: '3px solid var(--color-ink)', padding: '6px 0 6px 20px', margin: '28px 0',
        }}>
          India and China each contain roughly one in six people alive today. Their flags are nearly full.
        </blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <CBox>
            <Kpi>Share of World Population · Top 8 Countries</Kpi>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--color-muted)', marginBottom: 22 }}>
              Each flag shown at full size in muted tones. Color rises from the bottom to the country's % of the 8.2B total.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(118px, 1fr))',
              gap: '22px 12px', marginBottom: 14,
            }}>
              {TOP_8.map(c => (
                <FlagCard key={c.name} country={c} />
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: 12 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--color-muted)' }}>0%</span>
              <div style={{
                flex: 1, display: 'flex', justifyContent: 'space-between',
                borderTop: '0.5px solid var(--color-line)', paddingTop: 4,
              }}>
                {['5%', '10%', '15%', '20%'].map(s => (
                  <span key={s} style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--color-muted)' }}>{s}</span>
                ))}
              </div>
            </div>

            <Caption>
              India and China stand out as nearly fully colored; the others sit close to the bottom of their frames.
              Source: UN WPP 2024.
            </Caption>
          </CBox>
        </motion.div>
      </div>
    </div>
  );
}

function FlagCard({ country }: { country: typeof TOP_8[0] }) {
  const fillTop = 100 - country.pct;
  return (
    <div style={{ textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500, lineHeight: 1,
        marginBottom: 3, fontVariantNumeric: 'tabular-nums',
      }}>
        {country.pct}%
      </div>
      <div style={{
        fontSize: 11, marginBottom: 10, letterSpacing: '0.04em',
        fontWeight: 600, textTransform: 'uppercase',
      }}>
        {country.name}
      </div>
      <div className="fc-flag" style={{
        position: 'relative', width: '100%', maxWidth: 112, aspectRatio: '30 / 20',
        margin: '0 auto', border: '0.5px solid var(--color-line-2)', overflow: 'hidden',
        background: '#f3efe7',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.3)',
      }}>
        {/* Desaturated full base */}
        <svg
          preserveAspectRatio="none"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            filter: 'saturate(0.06) brightness(1.02) contrast(0.92)',
            opacity: 0.6,
          }}
        >
          <use href={`#${country.flagId}`} />
        </svg>
        {/* Full-color full-size, clipped from bottom */}
        <svg
          preserveAspectRatio="none"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            clipPath: `inset(${fillTop}% 0 0 0)`,
          }}
        >
          <use href={`#${country.flagId}`} />
        </svg>
        <div className="lvl" style={{
          position: 'absolute', left: 0, right: 0, height: '1.5px',
          bottom: `${country.pct}%`, background: 'var(--color-ink)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.25)', zIndex: 5,
        }} />
      </div>
      <div style={{ fontSize: 10, color: 'var(--color-muted)', marginTop: 7, lineHeight: 1.4 }}>
        {country.population}
      </div>
    </div>
  );
}
