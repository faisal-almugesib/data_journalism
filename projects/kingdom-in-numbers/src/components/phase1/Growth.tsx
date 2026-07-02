import { Section } from '@/components/layout/Section';
import { GrowthLineChart } from '@/components/charts/GrowthLineChart';
import { VisaStackedBar } from '@/components/charts/VisaStackedBar';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act V — Growth.
 *
 * Two charts, one narrative thread:
 *
 *   1. The 2010-2024 growth chart — three lines (citizens, expats, visitors)
 *      with the 2019 tourist visa launch and 2020 COVID dip annotated.
 *
 *   2. The visa-purpose stacked bar — what the 29.7M visitors actually came
 *      *for*. Most legible "purpose of visit" data in the country, since
 *      every visa is categorised at issue.
 */
export function Growth() {
  const growthRef = useReveal<HTMLDivElement>();
  const visaRef = useReveal<HTMLDivElement>();

  return (
    <Section label="Act V · Growth">
      <h2 className="h2">Two Curves Are Re-Shaping the Country</h2>
      <p className="body lede">
        From 2010 to 2024, the resident population grew steadily — but the visitor curve rocketed off the
        chart. The launch of the tourist visa in 2019 was the inflection point. By 2024, more international
        visitors entered the country each year than the total population of the Kingdom in 1980.
      </p>

      <div className="cbox rev" ref={growthRef}>
        <div className="kpi">Saudi Citizens · Resident Expats · Annual Visitors · 2010–2024</div>
        <p className="kpi-sub">
          Stocks (residents) versus annual flow (visitors, dashed). The dashed visitor line collapses in 2020
          with COVID, then explodes.
        </p>
        <GrowthLineChart />
        <div className="legend">
          <div className="l">
            <div className="ld" style={{ background: '#1a5e36' }} />
            Saudi citizens (resident stock)
          </div>
          <div className="l">
            <div className="ld" style={{ background: '#d4a73c' }} />
            Resident expats (resident stock)
          </div>
          <div className="l">
            <div
              className="ld"
              style={{
                background: '#b85c1a',
                borderBottom: '2px dashed #b85c1a',
                borderRadius: 0,
                height: 0,
              }}
            />
            Annual international visitors (flow)
          </div>
        </div>
        <p className="cap">
          Citizens grew at ~0.5M/year. Expats grew at ~0.4M/year. Visitors went from a slow climb to a
          vertical rocket. Source: GASTAT, Ministry of Tourism, World Bank.
        </p>
      </div>

      <h3 className="h3">And why they came</h3>
      <p className="body">
        The Saudi visa is not a single document — it's a system of intent. The reason people come is encoded
        in the category of visa they hold, which makes "purpose of visit" perhaps the most legible economic
        data in the country.
      </p>

      <div className="cbox rev" ref={visaRef}>
        <div className="kpi">International Visitor Purpose · 2024 · 29.7 million arrivals</div>
        <p className="kpi-sub">
          A decade ago this chart would have been almost entirely green — Saudi Arabia issued visas chiefly
          for Hajj, Umrah, and work. The five-year-old tourist e-visa created the gold and orange slices
          almost from nothing.
        </p>
        <VisaStackedBar />
        <p className="cap">
          Religious tourism remains the single largest visa category, but non-religious now exceeds it for
          the first time. Source: Saudi Ministry of Tourism Annual Report 2024.
        </p>
      </div>
    </Section>
  );
}
