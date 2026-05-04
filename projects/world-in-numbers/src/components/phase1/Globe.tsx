import { motion } from 'framer-motion';
import { REGIONS } from '../../data/countries';
import { SectionRule, CBox, Kpi, Caption } from '../Common';

const continents = [
  { cls: 'c-asia',  top: '18%', left: '50%', width: '38%', height: '44%', bg: '#6b9c5c', rotate: 8,  borderRadius: '48% 52% 50% 50% / 52% 48% 52% 48%' },
  { cls: 'c-eu',    top: '14%', left: '38%', width: '20%', height: '18%', bg: '#82a866', rotate: -15, borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%' },
  { cls: 'c-af',    top: '36%', left: '38%', width: '24%', height: '38%', bg: '#a08658', rotate: 0,   borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%' },
  { cls: 'c-am-n',  top: '18%', left: '6%',  width: '30%', height: '32%', bg: '#7a9c64', rotate: 18,  borderRadius: '60% 40% 50% 50% / 40% 60% 50% 50%' },
  { cls: 'c-am-s',  top: '48%', left: '16%', width: '18%', height: '32%', bg: '#87985a', rotate: -10, borderRadius: '50% 50% 60% 40% / 50% 50% 60% 40%' },
  { cls: 'c-oc',    top: '64%', left: '76%', width: '14%', height: '14%', bg: '#9a9c64', rotate: 0,   borderRadius: '50%' },
];

export default function Globe() {
  return (
    <div style={{ padding: '56px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionRule>Overview · 8.2 Billion Humans</SectionRule>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
        }}>
          The Whole World, in One Sphere
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginBottom: 16 }}>
          Earth holds <strong style={{ fontWeight: 600 }}>8.2 billion people</strong>, but they are wildly
          unevenly distributed. Asia alone is home to nearly six in ten of us. Africa, with all its land,
          is home to fewer people than China and India combined.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <CBox>
            <Kpi>Share of World Population by Region · 2024</Kpi>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--color-muted)', marginBottom: 22 }}>
              A rotating Earth, with each region's share of the 8.2 billion total
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'center' }}
                 className="globe-wrap-responsive">
              {/* GLOBE */}
              <div style={{
                position: 'relative', aspectRatio: '1', maxWidth: 320, width: '100%', margin: '0 auto',
              }}>
                <div style={{
                  position: 'absolute', inset: '-16px', borderRadius: '50%',
                  border: '1px dashed rgba(28,28,28,0.12)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'radial-gradient(circle at 32% 28%, #6c9fc8 0%, #3b6794 35%, #1a3856 70%, #0c1e34 100%)',
                  boxShadow: 'inset -22px -32px 60px rgba(0,0,0,0.6), inset 4px 8px 30px rgba(255,255,255,0.18), 0 24px 48px rgba(15,30,50,0.32)',
                  overflow: 'hidden',
                }}>
                  <div className="animate-globe-spin" style={{ position: 'absolute', inset: 0, borderRadius: '50%' }}>
                    {continents.map((c, i) => (
                      <div key={i} style={{
                        position: 'absolute', top: c.top, left: c.left, width: c.width, height: c.height,
                        background: c.bg, opacity: 0.8, transform: `rotate(${c.rotate}deg)`,
                        borderRadius: c.borderRadius, filter: 'blur(0.4px)',
                      }} />
                    ))}
                  </div>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: `repeating-linear-gradient(to bottom, transparent 0 14.28%, rgba(255,255,255,0.07) 14.28% calc(14.28% + 0.5px)),
                                 repeating-linear-gradient(to right, transparent 0 11.11%, rgba(255,255,255,0.07) 11.11% calc(11.11% + 0.5px))`,
                    mixBlendMode: 'overlay',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 28% 22%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 38%)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>

              {/* LEGEND */}
              <div style={{ fontFamily: 'var(--font-sans)' }}>
                {REGIONS.map(r => (
                  <div key={r.name} style={{
                    display: 'grid', gridTemplateColumns: '14px 1fr auto', gap: 12, alignItems: 'center',
                    padding: '9px 0', borderBottom: '0.5px solid var(--color-line)',
                  }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: '50%', background: r.color,
                      boxShadow: 'inset -2px -3px 4px rgba(0,0,0,0.2)',
                    }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 1 }}>{r.population} people</div>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {r.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Caption>
              Continent shapes are stylized for visual rhythm, not cartographic accuracy. Source: UN World Population Prospects 2024.
            </Caption>
          </CBox>
        </motion.div>
      </div>
    </div>
  );
}
