import { Section } from '@/components/layout/Section';
import { RECS_CITIZENS, RECS_RESIDENTS, type Recommendation } from '@/data/saudi';
import { useReveal } from '@/hooks/useReveal';

/**
 * Recommendations — split-card layout (citizens / residents). Same numbers
 * tell different stories depending on which side of the passport you carry.
 *
 * Continues directly from Takeaways with no section break, so it's rendered
 * here as a heading-and-content block inside the same Takeaways Section in
 * App.tsx. (Kept as its own component for clarity.)
 */
function RecsCard({
  variant,
  head,
  title,
  recs,
}: {
  variant: 'citizens' | 'residents';
  head: string;
  title: string;
  recs: ReadonlyArray<Recommendation>;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className={`recs-card ${variant} rev`} ref={ref}>
      <div className="head">{head}</div>
      <h4>{title}</h4>
      <ul>
        {recs.map((r) => (
          <li key={r.headline}>
            <strong>{r.headline}</strong> {r.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Recommendations() {
  return (
    <Section>
      <h3 className="h3" style={{ marginTop: 0 }}>
        Recommendations
      </h3>
      <p className="body">
        These numbers create different opportunities depending on whether you carry the citizenship or the
        residency card. Both groups can benefit from the expansion ahead — if they read the chart correctly.
      </p>
      <div className="recs-split">
        <RecsCard
          variant="citizens"
          head="For Saudi Citizens"
          title="Position for the new economy"
          recs={RECS_CITIZENS}
        />
        <RecsCard
          variant="residents"
          head="For Resident Expats"
          title="Build for a longer stay"
          recs={RECS_RESIDENTS}
        />
      </div>
    </Section>
  );
}
