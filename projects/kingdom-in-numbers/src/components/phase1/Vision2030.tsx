import { Section } from '@/components/layout/Section';
import { VISION_TARGETS } from '@/data/saudi';

/**
 * Vision 2030 targets — dark-section grid of the headline numbers Saudi Arabia
 * has officially committed to. Pure data, no chart — the cards are the chart.
 *
 * Hover lifts each card 2px and brightens the border, giving a subtle sense
 * of interactivity in an otherwise static section.
 */
export function Vision2030() {
  return (
    <Section variant="dark" label="Vision 2030 · The Numbers the Kingdom Is Aiming At">
      <h2 className="h2">What Saudi Arabia Has Officially Committed To</h2>
      <p className="body">
        The Saudi government has been remarkably explicit about the demographic outcomes it wants. Vision
        2030 sets numerical targets across population, tourism, and labor — most of which are public,
        measurable, and now inside the next five years.
      </p>

      <div className="targets-grid">
        {VISION_TARGETS.map((t) => (
          <div className="target-card" key={t.label}>
            <div className="target-num">
              {t.num}<span>{t.suffix}</span>
            </div>
            <div className="target-lbl">{t.label}</div>
            <div className="target-sub">{t.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
