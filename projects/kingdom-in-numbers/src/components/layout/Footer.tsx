/**
 * Article colophon: source list (italicised, small) + the double-rule motif
 * + a signature row that closes the article like the masthead opens it.
 */
export function Footer() {
  return (
    <div className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <p className="colophon">
          Data sources: GASTAT Population Estimates 2024 &amp; Saudi Census 2022;
          Saudi Ministry of Tourism Annual Statistical Report 2024;
          UN World Population Prospects 2024;
          World Bank Open Data;
          UN Habitat World Cities Report 2022.
          Region polygon data: @svg-maps/saudi-arabia (CC-BY-4.0).
        </p>
        <div className="foot-rule-thick" />
        <div className="foot-rule-thin" />
        <div className="foot-row">
          <span className="name">The Kingdom in Numbers</span>
          <span className="meta">Phase I of III · Saudi Arabia</span>
        </div>
      </div>
    </div>
  );
}
