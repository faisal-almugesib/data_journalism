import { PreviewBanner } from '@/components/layout/PreviewBanner';
import { Masthead } from '@/components/layout/Masthead';
import { Hero } from '@/components/layout/Hero';
import { Footer } from '@/components/layout/Footer';
import { SvgDefs } from '@/components/svg/SvgDefs';

import { Regions } from '@/components/phase1/Regions';
import { Skyline } from '@/components/phase1/Skyline';
import { Nationalities } from '@/components/phase1/Nationalities';
import { Composition } from '@/components/phase1/Composition';
import { Growth } from '@/components/phase1/Growth';
import { Future } from '@/components/phase1/Future';
import { Pyramid } from '@/components/phase1/Pyramid';
import { Vision2030 } from '@/components/phase1/Vision2030';
import { Takeaways } from '@/components/phase1/Takeaways';
import { Recommendations } from '@/components/phase1/Recommendations';

/**
 * Phase I — The Kingdom in Numbers.
 *
 * The article is a single, continuous scroll: masthead → hero → 7 narrative
 * acts → Vision 2030 commitments → takeaways → recommendations → colophon.
 *
 * App.tsx is intentionally just composition; every section owns its own data
 * and animation behaviour, so adding/removing acts is a one-line change here.
 */
export default function App() {
  return (
    <>
      <SvgDefs />

      <PreviewBanner />

      <div className="page">
        <Masthead title="The Kingdom in Numbers" meta="Data Journalism · Phase I" />
        <Hero />

        <Regions />        {/* Act I  · Where They Live */}
        <Skyline />        {/* Act II · A City Built Up */}
        <Nationalities />  {/* Act III · Who They Are */}
        <Composition />    {/* Act IV · Three Categories of Presence */}
        <Growth />         {/* Act V · Growth */}
        <Future />         {/* Act VI · The Future Question */}
        <Pyramid />        {/* Act VII · The Demographic Reality */}

        <Vision2030 />
        <Takeaways />
        <Recommendations />

        <Footer />
      </div>
    </>
  );
}
