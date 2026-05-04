import { useState } from 'react';
import { motion } from 'framer-motion';
import { LIFE_STAGES, PYRAMIDS } from '../../data/age';
import { SectionRule, CBox, Kpi, Caption } from '../Common';

type PyrKey = keyof typeof PYRAMIDS;

export default function Age() {
  return (
    <div style={{ padding: '56px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionRule>Act II · Age</SectionRule>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
        }}>
          A World Split by Life Stage
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginBottom: 16 }}>
          Forget total population — the most consequential demographic measure is <em>median age</em>.
          Group the world's countries by where their typical citizen sits in the human life cycle, and
          a startling map appears.
        </p>

        <LifeStages />

        <blockquote style={{
          fontFamily: 'var(--font-serif)', fontSize: 19, fontStyle: 'italic', lineHeight: 1.55,
          borderLeft: '3px solid var(--color-ink)', padding: '6px 0 6px 20px', margin: '28px 0',
        }}>
          Saudi Arabia sits at the crossroads — younger than Europe, older than most of the Arab world.
        </blockquote>

        <Pyramid />
      </div>
    </div>
  );
}

function LifeStages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <CBox>
        <Kpi>Median Age by Life Stage · 2024</Kpi>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--color-muted)', marginBottom: 22 }}>
          Twenty countries grouped by where their median citizen sits in the human life cycle
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}
             className="ls-grid-responsive">
          {LIFE_STAGES.map(s => (
            <div key={s.stage} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.16em',
                color: 'var(--color-muted)', marginBottom: 3, textTransform: 'uppercase', fontWeight: 600,
              }}>
                {s.stage}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 12, marginBottom: 16 }}>
                {s.range}
              </div>
              <div style={{
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minHeight: 100,
                borderBottom: '0.5px solid var(--color-line)', paddingBottom: 2, marginBottom: 14,
              }}>
                <svg height={s.figureHeight} viewBox="0 0 8 14" style={{ color: s.color }}>
                  <use href="#person" />
                </svg>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10.5, lineHeight: 1.7 }}>
                {s.countries.map(c => (
                  <div key={c.name} style={{
                    padding: '1px 0',
                    color: c.highlight ? 'var(--color-ksa)' : 'var(--color-ink-2)',
                    fontWeight: c.highlight ? 700 : 400,
                  }}>
                    {c.name}{' '}
                    <span style={{
                      color: c.highlight ? 'var(--color-ksa)' : 'var(--color-muted)',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {c.age}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Caption>
          Figure size grows with age stage. Saudi Arabia (highlighted) sits in the "Maturing" group.
          Source: UN DESA; GASTAT.
        </Caption>
      </CBox>
    </motion.div>
  );
}

function Pyramid() {
  const [active, setActive] = useState<PyrKey>('japan');
  const d = PYRAMIDS[active];

  const figs = (p: number) => Math.max(1, Math.round(p * 2));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <CBox>
        <Kpi>Population Pyramid · One Figure = 0.5%</Kpi>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 14, flexWrap: 'wrap', gap: 8,
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500,
          }}>
            {d.title}
          </h3>
          <div>
            {(['japan', 'nigeria', 'ksa'] as PyrKey[]).map((k, i) => (
              <button
                key={k}
                onClick={() => setActive(k)}
                style={{
                  border: '0.5px solid var(--color-line-2)',
                  borderLeft: i > 0 ? 'none' : '0.5px solid var(--color-line-2)',
                  padding: '7px 14px', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: 12,
                  background: active === k ? 'var(--color-ink)' : 'transparent',
                  color: active === k ? 'var(--color-paper)' : 'var(--color-muted)',
                  borderColor: active === k ? 'var(--color-ink)' : 'var(--color-line-2)',
                  transition: 'all 0.15s',
                }}
              >
                {k === 'japan' ? 'Japan' : k === 'nigeria' ? 'Nigeria' : 'Saudi Arabia'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg style={{ width: 8, height: 14, color: d.maleColor }}><use href="#person" /></svg>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--color-muted)' }}>← MALE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--color-muted)' }}>FEMALE →</span>
            <svg style={{ width: 8, height: 14, color: d.femaleColor }}><use href="#person" /></svg>
          </div>
        </div>

        <div>
          {d.rows.map(r => (
            <div key={r.age} style={{
              display: 'grid', gridTemplateColumns: '36px 1fr 48px 1fr 36px',
              alignItems: 'center', gap: 5, marginBottom: 2,
              fontFamily: 'var(--font-sans)', fontSize: 9.5,
            }}>
              <div style={{ textAlign: 'right', color: 'var(--color-muted)', fontVariantNumeric: 'tabular-nums' }}>
                {r.m.toFixed(1)}%
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 1.2 }}>
                {Array.from({ length: figs(r.m) }).map((_, i) => (
                  <svg key={i} style={{ width: 7, height: 12, flexShrink: 0, color: d.maleColor }}>
                    <use href="#person" />
                  </svg>
                ))}
              </div>
              <div style={{ textAlign: 'center', fontWeight: 600, fontSize: 10 }}>{r.age}</div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 1.2 }}>
                {Array.from({ length: figs(r.f) }).map((_, i) => (
                  <svg key={i} style={{ width: 7, height: 12, flexShrink: 0, color: d.femaleColor }}>
                    <use href="#person" />
                  </svg>
                ))}
              </div>
              <div style={{ textAlign: 'left', color: 'var(--color-muted)', fontVariantNumeric: 'tabular-nums' }}>
                {r.f.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--color-paper-2)', borderLeft: '3px solid var(--color-line-2)',
          padding: '12px 16px', marginTop: 16, borderRadius: '0 4px 4px 0',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--color-ink-2)',
            lineHeight: 1.6, margin: 0,
          }}>
            {d.note}
          </p>
        </div>

        <Caption>
          Each figure represents 0.5% of the country's total population. Source: UN DESA; GASTAT.
        </Caption>
      </CBox>
    </motion.div>
  );
}
