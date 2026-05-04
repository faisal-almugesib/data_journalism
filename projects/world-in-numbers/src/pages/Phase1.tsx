import SvgDefs from '../components/SvgDefs';
import { Masthead, Hero } from '../components/phase1/Hero';
import Globe from '../components/phase1/Globe';
import FlagFill from '../components/phase1/FlagFill';
import Age from '../components/phase1/Age';
import Riyadh from '../components/phase1/Riyadh';
import KsaSpotlight from '../components/phase1/KsaSpotlight';
import Closing from '../components/phase1/Closing';

export default function Phase1() {
  return (
    <>
      <SvgDefs />
      <h2 className="sr-only">
        Data journalism article on world population. Visualizes 8.2 billion people across regions with
        a rotating 3D globe, top-8 country flag-fill chart, life-stage age groupings, an interactive
        stick-figure population pyramid for Japan, Nigeria, and Saudi Arabia, an isometric 3D Riyadh
        skyline showing growth from 1960 to 2024, and a Saudi Arabia spotlight with 100 representative residents.
      </h2>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <Masthead />
        <Hero />
        <Globe />
        <FlagFill />
        <Age />
        <Riyadh />
        <KsaSpotlight />
        <Closing />
      </div>
    </>
  );
}
