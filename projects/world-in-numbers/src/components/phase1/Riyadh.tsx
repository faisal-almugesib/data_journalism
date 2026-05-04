import { motion } from 'framer-motion';
import { URBAN_SHARES } from '../../data/cities';
import { SectionRule, CBox, Kpi, Caption } from '../Common';
import type { ReactNode } from 'react';

export default function Riyadh() {
  return (
    <div style={{ padding: '56px 24px', background: 'var(--color-paper-2)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <SectionRule>Act III · Cities</SectionRule>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 500, lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.01em',
        }}>
          A Kingdom Built Its Cities <em style={{ fontStyle: 'italic' }}>From the Ground Up</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginBottom: 16 }}>
          Riyadh in 1960 was a town of 150,000 people. Today, more than seven million live there.
          Watch the skyline rise — decade by decade — through one of the most compressed urban
          transformations in modern history.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <CBox padding={false}>
            <div style={{ padding: '22px 22px 8px' }}>
              <Kpi>Riyadh Skyline · Isometric Reconstruction 1960–2024</Kpi>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, color: 'var(--color-muted)', marginBottom: 0 }}>
                Buildings drawn in isometric perspective; heights and density scale with population at each decade
              </p>
            </div>

            <div style={{
              position: 'relative',
              background: 'linear-gradient(to bottom, #f4eedf 0%, #e8dfca 50%, #d6c8a8 100%)',
              borderRadius: 6, padding: '36px 14px 24px', overflow: 'hidden',
            }}>
              {/* sun */}
              <div style={{
                position: 'absolute', top: 22, right: 32, width: 38, height: 38, borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #ffe098, #e8a64a)',
                boxShadow: '0 0 40px rgba(255,200,90,0.55), 0 0 16px rgba(255,180,80,0.7)',
              }} />

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
                alignItems: 'end', position: 'relative', zIndex: 2,
              }}>
                <SkylineEra year="1960" pop="~150K Pop." caption="Mud-brick town" urban="30% urban">
                  <Era1960 />
                </SkylineEra>
                <SkylineEra year="1980" pop="~1M Pop." caption="Oil boom rises" urban="66% urban">
                  <Era1980 />
                </SkylineEra>
                <SkylineEra year="2000" pop="~4.5M Pop." caption="A megacity emerges" urban="80% urban">
                  <Era2000 />
                </SkylineEra>
                <SkylineEra year="2024" pop="~7M Pop." caption="Skyscrapers, KAFD" urban="85% urban">
                  <Era2024 />
                </SkylineEra>
              </div>
            </div>

            <div style={{ padding: '18px 22px 22px' }}>
              <div style={{ background: 'var(--color-paper-2)', borderRadius: 4, padding: '16px 18px' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.12em',
                  color: 'var(--color-muted)', marginBottom: 12, textTransform: 'uppercase', fontWeight: 600,
                }}>
                  Urban Share Comparison · 2024
                </div>
                {URBAN_SHARES.map(u => (
                  <div key={u.label} style={{
                    display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 12,
                    alignItems: 'center', marginBottom: 8,
                    fontFamily: 'var(--font-sans)', fontSize: 11.5,
                  }}>
                    <span style={{ fontWeight: 600 }}>{u.label}</span>
                    <div style={{
                      height: 9, background: 'var(--color-paper-2)', borderRadius: 1,
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, bottom: 0,
                        width: `${u.pct}%`, background: u.color,
                      }} />
                    </div>
                    <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{u.pct}%</span>
                  </div>
                ))}
              </div>
              <Caption>
                Skylines are illustrative; building heights and counts scaled by population at each decade.
                Source: World Bank, UN Habitat, GASTAT 2023.
              </Caption>
            </div>
          </CBox>
        </motion.div>

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.78, marginTop: 24 }}>
          Riyadh's skyline tells the story Saudi Arabia's labor market wears on its sleeve: the towers were
          built fast, with imported expertise, and they need a population to fill them. The next chapter
          belongs to who lives in those buildings.
        </p>
      </div>
    </div>
  );
}

function SkylineEra({ year, pop, caption, urban, children }: {
  year: string; pop: string; caption: string; urban: string; children: ReactNode;
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 500, marginBottom: 2 }}>{year}</div>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 9.5, letterSpacing: '0.12em',
        color: 'var(--color-ink-2)', marginBottom: 8, textTransform: 'uppercase', fontWeight: 600,
      }}>
        {pop}
      </div>
      <svg
        viewBox="0 0 100 120"
        preserveAspectRatio="xMidYEnd meet"
        style={{
          width: '100%', height: 'auto', display: 'block', maxWidth: 150, margin: '0 auto',
          filter: 'drop-shadow(0 4px 6px rgba(80,60,30,0.18))',
        }}
      >
        {children}
      </svg>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--color-ink-2)', lineHeight: 1.4, marginTop: 8 }}>
        {caption}<br/>{urban}
      </div>
    </div>
  );
}

const Ground = () => (
  <>
    <polygon points="6,108 50,90 94,108 50,126" fill="#c8b485" stroke="#9a8758" strokeWidth=".4"/>
    <polygon points="6,108 50,90 94,108 94,113 50,131 6,113" fill="#9a8758" opacity=".3"/>
  </>
);

function Era1960() {
  return (
    <>
      <Ground />
      <g>
        <polygon points="32,104 42,100 42,93 32,97" fill="#c89868"/>
        <polygon points="42,100 52,104 52,97 42,93" fill="#a87a4a"/>
        <polygon points="32,97 42,93 52,97 42,101" fill="#dcb084"/>
      </g>
      <g>
        <polygon points="50,107 60,103 60,96 50,100" fill="#b8895c"/>
        <polygon points="60,103 70,107 70,100 60,96" fill="#946a3e"/>
        <polygon points="50,100 60,96 70,100 60,104" fill="#cca37a"/>
      </g>
      <g>
        <polygon points="40,112 50,108 50,103 40,107" fill="#c89868"/>
        <polygon points="50,108 60,112 60,107 50,103" fill="#a87a4a"/>
        <polygon points="40,107 50,103 60,107 50,111" fill="#dcb084"/>
      </g>
      {/* palm tree */}
      <g>
        <rect x="69" y="98" width="1" height="6" fill="#6a4a2a"/>
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(-15 69.5 97)"/>
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(15 69.5 97)"/>
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(60 69.5 97)"/>
        <ellipse cx="69.5" cy="97" rx="3" ry="1.4" fill="#7a9050" transform="rotate(120 69.5 97)"/>
      </g>
    </>
  );
}

function Era1980() {
  const windows = [
    [24, 78], [28, 78], [24, 83], [28, 83], [24, 88], [28, 88], [24, 93], [28, 93],
    [42, 68], [46, 68], [42, 73], [46, 73], [42, 78], [46, 78], [42, 83], [46, 83],
    [42, 88], [46, 88], [42, 93], [46, 93],
    [60, 82], [64, 82], [60, 87], [64, 87], [60, 92], [64, 92],
  ];
  return (
    <>
      <Ground />
      <g>
        <polygon points="20,102 32,98 32,68 20,72" fill="#c0b496"/>
        <polygon points="32,98 44,102 44,72 32,68" fill="#9c8e6e"/>
        <polygon points="20,72 32,68 44,72 32,76" fill="#d8cda8"/>
      </g>
      <g>
        <polygon points="38,105 52,100 52,58 38,62" fill="#b0a888"/>
        <polygon points="52,100 66,105 66,62 52,58" fill="#8c8060"/>
        <polygon points="38,62 52,58 66,62 52,66" fill="#c8bc9c"/>
      </g>
      <g>
        <polygon points="56,103 68,99 68,72 56,76" fill="#c0b496"/>
        <polygon points="68,99 80,103 80,76 68,72" fill="#9c8e6e"/>
        <polygon points="56,76 68,72 80,76 68,80" fill="#d8cda8"/>
      </g>
      <g fill="#4a3a2a" opacity=".55">
        {windows.map(([x, y], i) => <rect key={i} x={x} y={y} width="2" height="2"/>)}
      </g>
    </>
  );
}

function Era2000() {
  const windows: [number, number][] = [];
  // tower 1
  for (let y = 62; y <= 92; y += 5) for (const x of [20, 23, 26]) windows.push([x, y]);
  // tower 2 (center, taller)
  for (let y = 42; y <= 90; y += 6) for (const x of [38, 41, 44, 47]) windows.push([x, y]);
  // tower 3
  for (let y = 58; y <= 88; y += 6) for (const x of [56, 59, 62]) windows.push([x, y]);

  return (
    <>
      <Ground />
      <g>
        <polygon points="16,103 28,99 28,52 16,56" fill="#a4b2c2"/>
        <polygon points="28,99 40,103 40,56 28,52" fill="#7c8a9c"/>
        <polygon points="16,56 28,52 40,56 28,60" fill="#b8c4d4"/>
      </g>
      <g>
        <polygon points="34,105 48,100 48,32 34,36" fill="#b4c0d0"/>
        <polygon points="48,100 62,105 62,36 48,32" fill="#8898a8"/>
        <polygon points="34,36 48,32 62,36 48,40" fill="#c8d4e4"/>
      </g>
      <g>
        <polygon points="52,103 64,99 64,48 52,52" fill="#a4b2c2"/>
        <polygon points="64,99 76,103 76,52 64,48" fill="#7c8a9c"/>
        <polygon points="52,52 64,48 76,52 64,56" fill="#b8c4d4"/>
      </g>
      <g fill="#2a3a4a" opacity=".6">
        {windows.map(([x, y], i) => <rect key={i} x={x} y={y} width="1.6" height="1.6"/>)}
      </g>
    </>
  );
}

function Era2024() {
  const windows: [number, number][] = [];
  // left tower
  for (let y = 52; y <= 92; y += 5) for (const x of [17, 20, 23]) windows.push([x, y]);
  // kingdom-style center tower
  for (let y = 28; y <= 94; y += 6) for (const x of [33, 36, 39, 42]) windows.push([x, y]);
  // right tall tower
  for (let y = 40; y <= 94; y += 6) for (const x of [53, 56, 59]) windows.push([x, y]);
  // far right
  for (let y = 64; y <= 94; y += 6) for (const x of [69, 72, 75]) windows.push([x, y]);

  return (
    <>
      <Ground />
      <g>
        <polygon points="14,103 24,99 24,42 14,46" fill="#8294a6"/>
        <polygon points="24,99 34,103 34,46 24,42" fill="#5a6c80"/>
        <polygon points="14,46 24,42 34,46 24,50" fill="#9aaab8"/>
      </g>
      {/* Kingdom-style tower with iconic top arch */}
      <g>
        <polygon points="30,105 44,100 44,16 30,20" fill="#92a4b6"/>
        <polygon points="44,100 58,105 58,20 44,16" fill="#6a7c90"/>
        <polygon points="30,20 44,16 58,20 44,24" fill="#aabac8"/>
        <polygon points="38,18 42,17 42,8 38,9" fill="#5a6c80"/>
        <polygon points="46,17 50,18 50,9 46,8" fill="#5a6c80"/>
        <path d="M 42,8 Q 44,4 46,8 L 46,17 L 42,17 Z" fill="#aabac8"/>
      </g>
      <g>
        <polygon points="50,103 62,99 62,28 50,32" fill="#8294a6"/>
        <polygon points="62,99 74,103 74,32 62,28" fill="#5a6c80"/>
        <polygon points="50,32 62,28 74,32 62,36" fill="#9aaab8"/>
      </g>
      <g>
        <polygon points="66,104 78,100 78,54 66,58" fill="#92a4b6"/>
        <polygon points="78,100 88,104 88,58 78,54" fill="#6a7c90"/>
        <polygon points="66,58 78,54 88,58 78,62" fill="#aabac8"/>
      </g>
      <g fill="#1a2a3a" opacity=".62">
        {windows.map(([x, y], i) => <rect key={i} x={x} y={y} width="1.4" height="1.4"/>)}
      </g>
    </>
  );
}
