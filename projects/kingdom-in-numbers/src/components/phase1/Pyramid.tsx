import { Section } from '@/components/layout/Section';
import { PyramidChart } from '@/components/charts/PyramidChart';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act VII — The Demographic Reality.
 *
 * The closing chart of Phase I. The pyramid's working-age male bulge IS the
 * argument for everything else in the article — labor migration shows up as
 * a demographic shape that no birth pattern produces on its own.
 *
 * Animation propagates outward from the 25–29 row (the peak of the bulge),
 * see PyramidChart.tsx.
 */
export function Pyramid() {
  const cboxRef = useReveal<HTMLDivElement>();

  return (
    <Section label="Act VII · The Demographic Reality">
      <h2 className="h2">The Pyramid Already Tells the Story</h2>
      <p className="body lede">
        You don't need a future projection to see the imbalance — it's already written into the pyramid.
        Saudi Arabia's age structure has a dramatic <strong>working-age male bulge</strong> that no natural
        birth pattern produces. It's the labor force, made visible.
      </p>

      <div className="cbox rev" ref={cboxRef}>
        <div className="kpi">Saudi Arabia Population Pyramid · % of total population by age &amp; sex</div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          The Working-Age Male Bulge
        </h3>
        <PyramidChart />

        <div className="pyr-callout">
          <p>
            The dramatic bulge between ages 25–39 is driven by{' '}
            <strong>foreign workers, not births</strong>. It's not organic growth — it's labor migration made
            visible. The bulge skews male because most labor contracts (construction, transport, services) are
            filled by men.
          </p>
        </div>
        <p className="cap">Source: GASTAT 2024.</p>
      </div>
    </Section>
  );
}
