import { Section } from '@/components/layout/Section';
import { TAKEAWAYS } from '@/data/saudi';
import { useReveal } from '@/hooks/useReveal';

/**
 * "Key Takeaways" — five numbered cards that summarise the whole article.
 *
 * The intro card sets up the summary; each takeaway card has an icon (the
 * number), a tag (category), a headline, and a 2-3 sentence body.
 *
 * Each card has its own reveal observer so the stack fades in one at a time
 * as the reader scrolls — gives the section a reading-paced rhythm.
 */
function TakeawayItem({ idx }: { idx: number }) {
  const ref = useReveal<HTMLDivElement>();
  const t = TAKEAWAYS[idx]!;
  return (
    <div className="takeaway-item rev" ref={ref}>
      <div className="takeaway-icon">{idx + 1}</div>
      <div className="takeaway-content">
        <span className="takeaway-tag">{t.tag}</span>
        <h4>{t.title}</h4>
        <p>{t.body}</p>
      </div>
    </div>
  );
}

export function Takeaways() {
  const introRef = useReveal<HTMLDivElement>();

  return (
    <Section label="Key Takeaways · What This Means">
      <h2 className="h2">The Five Things Worth Remembering</h2>

      <div className="takeaways-intro rev" ref={introRef}>
        <h3>The story in five sentences</h3>
        <p>
          Saudi Arabia is bigger, denser, and more international than it has ever been — and the trend is
          accelerating. The Kingdom's identity as an oil exporter is being slowly replaced with a new
          identity: a destination economy. Whoever lives or works here in the next decade will experience
          this transition firsthand.
        </p>
      </div>

      <div className="takeaways-list">
        {TAKEAWAYS.map((_, i) => (
          <TakeawayItem key={i} idx={i} />
        ))}
      </div>
    </Section>
  );
}
