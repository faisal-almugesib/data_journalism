import { Section } from '@/components/layout/Section';
import { FlagBarChart } from '@/components/charts/FlagBarChart';
import { VisitorBarChart } from '@/components/charts/VisitorBarChart';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act III — Who They Are.
 *
 * Two charts side-by-side narratively (stacked vertically in the layout):
 *
 *   • Top 5 resident nationalities — proportional flag bars where bar
 *     length = exact percentage. Replaces the v0.2 "fill the flag" treatment.
 *
 *   • Top 5 visitor source countries — vertical bars colored by national
 *     flag palette. Visitors and residents are deliberately different chart
 *     types because they represent different population types (stock vs flow).
 */
export function Nationalities() {
  const residentsRef = useReveal<HTMLDivElement>();
  const visitorsRef = useReveal<HTMLDivElement>();

  return (
    <Section label="Act III · Who They Are">
      <h2 className="h2">Two Different Maps of the World Pass Through Saudi Arabia</h2>
      <p className="body lede">
        The Kingdom has two populations of foreigners — the <strong>residents</strong> who work and live here
        long-term, and the <strong>visitors</strong> who arrive for a season, a pilgrimage, or a holiday. The
        two maps barely overlap.
      </p>
      <blockquote className="pull">
        Bangladeshi workers fill the building sites. Egyptian visitors fill the Holy Mosques.
      </blockquote>

      <div className="cbox rev" ref={residentsRef}>
        <div className="kpi">Top 5 Resident Nationalities · 2022 Census · % of all 13.4M expat residents</div>
        <p className="kpi-sub">
          Each bar's <strong>length is the exact percentage</strong>. The flag pattern fills the bar — the
          country's national colors flowing across exactly the share of the population it represents. No
          scaling tricks, just direct visual proportion.
        </p>
        <FlagBarChart />
        <p className="cap">
          South Asia dominates the resident workforce — together these five countries account for ~63% of
          all expat residents. Source: GASTAT Census 2022.
        </p>
      </div>

      <div className="cbox rev" ref={visitorsRef}>
        <div className="kpi">Top 5 Visitor Source Countries · 2024 · 29.7M international tourists</div>
        <p className="kpi-sub">
          The map looks completely different when you count people <em>arriving</em> instead of those
          staying. Bars are colored by national flag palette. Hover for percentage breakdown.
        </p>
        <VisitorBarChart />
        <p className="cap">
          Egypt sends the most visitors. Three of the top 5 are GCC neighbors. Source: Saudi Ministry of
          Tourism, Annual Report 2024.
        </p>
      </div>
    </Section>
  );
}
