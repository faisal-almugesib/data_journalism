import { TOTAL_RESIDENTS } from '@/data/saudi';
import { useCountUp } from '@/hooks/useCountUp';

/**
 * The hero block: dark background, a counting headline number, the article
 * title, and a deck (one-paragraph summary). Reading-time + chapter count +
 * source list closes it out.
 *
 * The counter animates from 0 to the total resident population on mount,
 * so the very first thing the reader sees is the headline number changing.
 */
export function Hero() {
  const counter = useCountUp(TOTAL_RESIDENTS, 2800, 400);

  return (
    <div className="hero">
      <p className="label">Population · Demographics · Saudi Arabia 2024</p>
      <div className="counter">{counter.toLocaleString()}</div>
      <p className="counter-sub">Residents · GASTAT 2024</p>
      <h1>
        Thirty-Five Million —<br />
        <em>And Counting Faster Than Anyone Expected</em>
      </h1>
      <p className="deck">
        Saudi Arabia's population just crossed 35 million. But that headline number hides a stranger story:
        where they live, where they came from, and a quiet shift that could reshape the Kingdom by mid-century.
      </p>
      <div className="reading-time">
        <span><strong>~10 min read</strong></span>
        <span>7 chapters</span>
        <span>Sources: GASTAT · UN · Ministry of Tourism</span>
      </div>
    </div>
  );
}
