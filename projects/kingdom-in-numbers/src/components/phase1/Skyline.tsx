import { Section } from '@/components/layout/Section';
import { IsometricTower, type EraYear } from '@/components/svg/IsometricTowers';
import { SKYLINE_ERAS } from '@/data/saudi';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act II — A Kingdom Built Its Cities From the Ground Up.
 *
 * Four-column isometric reconstruction of Riyadh in 1960 / 1980 / 2000 / 2024.
 * Each column = one era, with population label, hand-drawn isometric SVG, and
 * a two-line caption.
 *
 * Closes with a pull-quote that bridges into Act III (the question of who
 * filled all those new towers).
 */
export function Skyline() {
  const cboxRef = useReveal<HTMLDivElement>();

  return (
    <Section variant="alt" label="Act II · A City Built Up">
      <h2 className="h2">A Kingdom Built Its Cities <em>From the Ground Up</em></h2>
      <p className="body lede">
        Riyadh in 1960 was a town of 150,000 people. By 2024 it held nearly seven million in the city proper,
        and twice that across the wider region. Few capitals on earth have transformed this completely, this
        quickly.
      </p>

      <div className="cbox flush rev" ref={cboxRef}>
        <div style={{ padding: '24px 24px 8px' }}>
          <div className="kpi">Riyadh Skyline · Isometric Reconstruction 1960–2024</div>
          <p className="kpi-sub" style={{ marginBottom: 0 }}>
            Buildings drawn in isometric perspective; heights and density scale with population at each
            decade
          </p>
        </div>

        <div className="iso-stage">
          <div className="iso-grid">
            {SKYLINE_ERAS.map((era) => {
              const [line1, line2] = era.caption.split(' | ');
              return (
                <div className="iso-col" key={era.year}>
                  <div className="iso-yr">{era.year}</div>
                  <div className="iso-pct">{era.pop}</div>
                  <IsometricTower year={era.year as EraYear} />
                  <div className="iso-cap">
                    {line1}
                    <br />
                    {line2}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="cap" style={{ padding: '0 24px 22px' }}>
          The towers were built fast, with imported expertise, and they need a population to fill them.
          Source: World Bank, UN Habitat, GASTAT 2023.
        </p>
      </div>

      <blockquote className="pull">
        Towers don't fill themselves. The next chapter is the question of <em>who</em> filled them.
      </blockquote>
    </Section>
  );
}
