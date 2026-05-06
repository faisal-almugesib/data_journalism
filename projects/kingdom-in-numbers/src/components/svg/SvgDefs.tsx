/**
 * Global SVG definitions, mounted once at the root of the page.
 *
 * Flags are simplified national flags drawn with basic shapes — they're tiny
 * (56×36px when used in the flag-bar chart), so detail beyond the canonical
 * field/stripes/disc would not be perceptible. This trades fidelity for bundle
 * size; we don't ship 5 flag PNGs.
 *
 * The `person` symbol is a head-on-shoulders icon used for the 50-figure
 * pictogram in Act IV.
 */
export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="person" viewBox="0 0 8 14">
          <circle cx="4" cy="2.8" r="2.3" fill="currentColor" />
          <path d="M1.4 13.5 V8 a2.6 2.6 0 0 1 5.2 0 V13.5 z" fill="currentColor" />
        </symbol>

        {/* Bangladesh */}
        <symbol id="flag-bd" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#006A4E" />
          <circle cx="13" cy="10" r="5" fill="#F42A41" />
        </symbol>

        {/* India */}
        <symbol id="flag-in" viewBox="0 0 30 20">
          <rect width="30" height="6.67" fill="#FF9933" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#138808" />
          <circle cx="15" cy="10" r="1.5" fill="none" stroke="#000080" strokeWidth=".5" />
        </symbol>

        {/* Pakistan */}
        <symbol id="flag-pk" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#01411C" />
          <rect width="7.5" height="20" fill="#FFFFFF" />
          <circle cx="20" cy="10" r="3.2" fill="#FFFFFF" />
          <circle cx="21" cy="10" r="2.6" fill="#01411C" />
        </symbol>

        {/* Egypt */}
        <symbol id="flag-eg" viewBox="0 0 30 20">
          <rect width="30" height="6.67" fill="#CE1126" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#000000" />
          <circle cx="15" cy="10" r="1.6" fill="#C09300" />
        </symbol>

        {/* Yemen */}
        <symbol id="flag-ye" viewBox="0 0 30 20">
          <rect width="30" height="6.67" fill="#CE1126" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#000000" />
        </symbol>

        {/* Bahrain */}
        <symbol id="flag-bh" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#CE1126" />
          <polygon points="0,0 9,0 12,2 9,4 12,6 9,8 12,10 9,12 12,14 9,16 12,18 9,20 0,20" fill="#FFFFFF" />
        </symbol>

        {/* Kuwait */}
        <symbol id="flag-kw" viewBox="0 0 30 20">
          <rect width="30" height="6.67" fill="#007A3D" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#CE1126" />
          <polygon points="0,0 8,6.67 8,13.33 0,20" fill="#000000" />
        </symbol>
      </defs>
    </svg>
  );
}
