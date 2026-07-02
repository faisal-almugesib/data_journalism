/**
 * Newspaper-style masthead with the double-rule motif (thick + thin) and a
 * left/right title-meta row. Mirrors how the print-era WSJ and FT mark the
 * top of an edition.
 */
export function Masthead({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="masthead">
      <div className="rule-thick" />
      <div className="rule-thin" />
      <div className="row">
        <span className="title">{title}</span>
        <span className="meta">{meta}</span>
      </div>
    </div>
  );
}
