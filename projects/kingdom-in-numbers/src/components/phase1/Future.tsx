import { Section } from '@/components/layout/Section';
import { ProjectionChart } from '@/components/charts/ProjectionChart';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act VI — The Future Question.
 *
 * Centred on the projection chart: actual data 2010-2024 (solid) plus
 * dashed extrapolations to 2050. The crossover marker calls out where
 * the citizen and expat lines meet (~2030), the article's central tension.
 */
export function Future() {
  const cboxRef = useReveal<HTMLDivElement>();

  return (
    <Section variant="alt" label="Act VI · The Future Question">
      <h2 className="h2">The Gap Is Closing — <em>And After 2030, It May Reverse</em></h2>
      <p className="body lede">
        In 2010, Saudi citizens outnumbered resident expats almost <strong>2-to-1</strong>. In 2024 the ratio
        is <strong>1.25-to-1</strong>. Vision 2030's megaprojects all require labor the Kingdom doesn't yet
        have. If the current import rate continues, the two lines could cross within a decade.
      </p>
      <blockquote className="pull">
        The country built to host 19 million Saudis is now hosting 35 million people. By 2050 it may host 60
        million — and citizens could become the minority.
      </blockquote>

      <div className="cbox rev" ref={cboxRef}>
        <div className="kpi">Saudi Citizens vs Resident Expats · Actual 2010–2024 · Projection to 2050</div>
        <p className="kpi-sub">
          The solid lines are GASTAT-recorded data. Dashed extensions are simple projections at recent growth
          rates.
        </p>
        <ProjectionChart />
        <div className="legend">
          <div className="l">
            <div className="ld" style={{ background: '#1a5e36' }} />
            Saudi citizens · actual + projection
          </div>
          <div className="l">
            <div className="ld" style={{ background: '#d4a73c' }} />
            Resident expats · actual + projection
          </div>
        </div>
        <p className="cap">
          Projections are simple linear extrapolations of recent (2022–2024) growth rates. Real outcomes will
          depend on Saudization quotas, megaproject completion, and demographic policy. This chart is a
          thought experiment, not a forecast. Source: GASTAT 2010–2024.
        </p>
      </div>

      <p className="body" style={{ marginTop: 8 }}>
        This is the central tension of Saudi Vision 2030: every megaproject creates jobs, and every job — for
        now — has to be filled. The future of the Kingdom's demographic balance hinges on whether
        Saudization can grow faster than the imported workforce.
      </p>
    </Section>
  );
}
