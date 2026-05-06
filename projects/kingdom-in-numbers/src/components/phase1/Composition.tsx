import { Section } from '@/components/layout/Section';
import { PictogramFifty } from '@/components/charts/PictogramFifty';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act IV — Three Categories of Presence.
 *
 * Three colored cards (citizens / residents / visitors), then a 50-figure
 * pictogram showing the citizen-vs-expat split inside the resident population.
 * Visitors are an annual flow not a stock, so they're called out explicitly
 * in the caption.
 */
export function Composition() {
  const cboxRef = useReveal<HTMLDivElement>();

  return (
    <Section variant="alt" label="Act IV · Three Categories of Presence">
      <h2 className="h2">Citizens, Residents, and Visitors — Three Economies in One Country</h2>
      <p className="body lede">
        At any moment, the Kingdom contains three different kinds of people: those who carry its passport,
        those who hold its residency card, and those passing through. Each one is bigger than you might
        expect, and each tells a different economic story.
      </p>

      <div className="cbox rev" ref={cboxRef}>
        <div className="kpi">Citizens · Resident Expats · Annual Visitors · 2024</div>
        <p className="kpi-sub">
          Three populations, three economic functions. Citizens are the demographic core. Residents are the
          labor force. Visitors are the new tourism economy.
        </p>

        <div className="threeway">
          <div className="tw-card citizens">
            <div className="tw-num">19.6<span>M</span></div>
            <div className="tw-label">Saudi Citizens</div>
            <div className="tw-pct">55.6% of residents</div>
            <div className="tw-sub">
              The demographic core. Younger than the global average, with a fertility rate of 2.7 births per
              woman.
            </div>
          </div>
          <div className="tw-card residents">
            <div className="tw-num">15.7<span>M</span></div>
            <div className="tw-label">Resident Expats</div>
            <div className="tw-pct">44.4% of residents</div>
            <div className="tw-sub">
              The working machine. 89.9% are in the working-age bracket of 15–64.
            </div>
          </div>
          <div className="tw-card visitors">
            <div className="tw-num">29.7<span>M</span></div>
            <div className="tw-label">Annual Visitors</div>
            <div className="tw-pct">in 2024 alone</div>
            <div className="tw-sub">
              Inbound international tourists — record-breaking, up 8% from 2023 and 47% above 2019.
            </div>
          </div>
        </div>

        <div className="pop3-key">
          <div className="k">
            <svg className="sw" style={{ color: 'var(--color-ksa)' }}>
              <use href="#person" />
            </svg>
            Saudi citizens (28 of 50)
          </div>
          <div className="k">
            <svg className="sw" style={{ color: 'var(--color-gold)' }}>
              <use href="#person" />
            </svg>
            Resident expats (22 of 50)
          </div>
        </div>
        <PictogramFifty />
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            color: 'var(--color-muted)',
            textAlign: 'center',
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          50 figures = the 35.3M resident population, drawn proportionally. Each figure ≈ 706,000 people.
        </p>

        <p className="cap">
          Visitors are an annual flow, not a stock. Source: GASTAT 2024; Ministry of Tourism Annual Report
          2024.
        </p>
      </div>
    </Section>
  );
}
