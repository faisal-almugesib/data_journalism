import { Section } from '@/components/layout/Section';
import { Transition } from '@/components/layout/Transition';
import { BurjAlMamlakah } from '@/components/svg/BurjAlMamlakah';
import { RegionMap3D } from '@/components/viz/RegionMap3D';
import { useReveal } from '@/hooks/useReveal';

/**
 * Act I — Where They Live.
 *
 * Two visual centerpieces:
 *
 *   1. A "Riyadh Hero" card: Burj Al Mamlakah silhouette next to the capital
 *      region's headline numbers (9.0M, 25.5%). Replaces the v0.2 generic 3D
 *      pillar — a recognisable landmark instantly anchors the article.
 *
 *   2. A real 3D extruded map of Saudi Arabia where each region is its true
 *      geographic shape, extruded by population. See RegionMap3D.tsx.
 *
 * Below the map: a 67% concentration callout and a transition into Act II.
 */
export function Regions() {
  const concRef = useReveal<HTMLDivElement>();

  return (
    <Section label="Act I · Where They Live">
      <h2 className="h2">A Country of Thirteen Regions — But Only One Capital City</h2>
      <p className="body lede">
        Saudi Arabia is divided into <strong>13 administrative regions</strong>, but the population is anything
        but evenly spread. One in four residents lives in a single region. Two-thirds live in just three.
        Below, the country itself is rendered in 3D — every region keeps its real geographic shape, extruded
        upward by population.
      </p>

      <div className="cbox">
        <div className="kpi">Population by Region · 2022 Census · 3D extruded geography</div>
        <p className="kpi-sub">
          Each region is its true shape on the map of Saudi Arabia, extruded vertically. Heights are scaled by
          population — Riyadh stands tallest at 9 million. Drag to rotate; hover any region for exact figures.
        </p>

        <div className="riyadh-hero">
          <div className="burj-stage">
            <BurjAlMamlakah />
          </div>
          <div>
            <span className="hp-rank">★ Capital Region</span>
            <div className="hp-name">Riyadh</div>
            <div className="hp-num">9.0M</div>
            <div className="hp-pct">25.5% of all residents · home to the Kingdom Centre Tower</div>
            <div className="hp-desc">
              The capital region's population alone is greater than the total population of Switzerland,
              Israel, or Hong Kong — and Burj Al Mamlakah looks down on every one of them.
            </div>
          </div>
        </div>

        <RegionMap3D />

        <div className="conc rev" ref={concRef}>
          <div className="conc-num">67<small>%</small></div>
          <div className="conc-text">
            of all 35 million residents live in just <strong>three regions</strong> — Riyadh, Makkah, and the
            Eastern Province. The other ten regions, combined, hold barely a third of the Kingdom.
          </div>
        </div>

        <p className="cap">
          Heights use a square-root scale so smaller regions remain visible while preserving rank: Riyadh
          (9.0M) reads as ~5× taller than Al-Bahah (0.34M). Source: GASTAT Saudi Census 2022.
        </p>
      </div>

      <Transition>
        <strong>One pillar towers over the rest.</strong> But Riyadh wasn't always the giant — a single
        lifetime ago it was a town of 150,000 people. To understand how 9 million ended up in one place, you
        have to watch the city grow.
      </Transition>
    </Section>
  );
}
