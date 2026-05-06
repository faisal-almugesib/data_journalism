export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="person" viewBox="0 0 8 14">
          <circle cx="4" cy="2.8" r="2.3" fill="currentColor" />
          <path d="M1.4 13.5 V8 a2.6 2.6 0 0 1 5.2 0 V13.5 z" fill="currentColor" />
        </symbol>
        <symbol id="flag-india" viewBox="0 0 30 20">
          <rect width="30" height="6.67" fill="#FF9933" />
          <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#138808" />
          <circle cx="15" cy="10" r="1.5" fill="none" stroke="#000080" strokeWidth=".5" />
        </symbol>
        <symbol id="flag-china" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#DE2910" />
          <polygon points="6.5,4.5 7.1,6.3 9,6.3 7.5,7.5 8.1,9.3 6.5,8.1 4.9,9.3 5.5,7.5 4,6.3 5.9,6.3" fill="#FFDE00" />
        </symbol>
        <symbol id="flag-usa" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#FFFFFF" />
          {[0, 3.08, 6.15, 9.23, 12.31, 15.38, 18.46].map((y, i) => (
            <rect key={i} y={y} width="30" height="1.54" fill="#B22234" />
          ))}
          <rect y="0" width="30" height="1.54" fill="#B22234" />
          <rect width="12" height="10.77" fill="#3C3B6E" />
        </symbol>
        <symbol id="flag-indonesia" viewBox="0 0 30 20">
          <rect width="30" height="10" fill="#FF0000" />
          <rect y="10" width="30" height="10" fill="#FFFFFF" />
        </symbol>
        <symbol id="flag-pakistan" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#01411C" />
          <rect width="7.5" height="20" fill="#FFFFFF" />
          <circle cx="20" cy="10" r="3.2" fill="#FFFFFF" />
          <circle cx="21" cy="10" r="2.6" fill="#01411C" />
        </symbol>
        <symbol id="flag-nigeria" viewBox="0 0 30 20">
          <rect width="10" height="20" fill="#008751" />
          <rect x="10" width="10" height="20" fill="#FFFFFF" />
          <rect x="20" width="10" height="20" fill="#008751" />
        </symbol>
        <symbol id="flag-brazil" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#009C3B" />
          <polygon points="15,3 27,10 15,17 3,10" fill="#FFDF00" />
          <circle cx="15" cy="10" r="3.2" fill="#002776" />
        </symbol>
        <symbol id="flag-bangladesh" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#006A4E" />
          <circle cx="13" cy="10" r="5" fill="#F42A41" />
        </symbol>
        <symbol id="flag-ksa" viewBox="0 0 30 20">
          <rect width="30" height="20" fill="#006C35" />
          <line x1="6" y1="13" x2="24" y2="13" stroke="#FFFFFF" strokeWidth=".7" />
          <polygon points="20,15 22,16.5 20,18 18,16.5" fill="#FFFFFF" />
        </symbol>
      </defs>
    </svg>
  );
}
