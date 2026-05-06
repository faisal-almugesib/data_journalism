/**
 * Silhouette of Burj Al Mamlakah (Kingdom Centre Tower).
 *
 * The defining feature is the inverted parabolic arch cut into the top of the
 * tower body — a single landmark instantly readable as Riyadh. We draw it as
 * one path with `fillRule="evenodd"`: outer trapezoidal silhouette + an inner
 * curve that becomes a hole.
 *
 * Accent layers (window grid, antenna, gold star) sit on top.
 */
export function BurjAlMamlakah() {
  return (
    <svg
      className="burj-svg"
      viewBox="0 0 200 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Burj Al Mamlakah (Kingdom Centre Tower) silhouette"
    >
      <defs>
        <linearGradient id="burj-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7eba99" />
          <stop offset="40%" stopColor="#3a8f5e" />
          <stop offset="100%" stopColor="#0e4a28" />
        </linearGradient>
        <linearGradient id="burj-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <linearGradient id="burj-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(76,223,144,0.4)" />
          <stop offset="100%" stopColor="rgba(76,223,144,0)" />
        </linearGradient>
      </defs>

      {/* Ambient backlight — gives the tower a subtle aura without geometry */}
      <ellipse cx="100" cy="40" rx="55" ry="80" fill="url(#burj-light)" opacity="0.6" />

      {/*
        Tower body: trapezoidal silhouette + inverted-arch cutout
        evenodd fill rule treats the inner arch as a hole.
      */}
      <path
        d="M 60 290
           L 60 90
           L 70 60
           L 80 35
           Q 85 20 100 18
           Q 115 20 120 35
           L 130 60
           L 140 90
           L 140 290
           L 60 290 Z
           M 80 70
           Q 80 100 100 130
           Q 120 100 120 70
           L 80 70 Z"
        fill="url(#burj-grad)"
        fillRule="evenodd"
      />

      {/* Vertical window-grid lines */}
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none">
        <line x1="73" y1="80" x2="73" y2="285" />
        <line x1="86" y1="80" x2="86" y2="285" />
        <line x1="100" y1="135" x2="100" y2="285" />
        <line x1="114" y1="80" x2="114" y2="285" />
        <line x1="127" y1="80" x2="127" y2="285" />
      </g>

      {/* Horizontal window-grid lines */}
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.5">
        {[100, 120, 140, 160, 180, 200, 220, 240, 260, 280].map((y) => (
          <line key={y} x1="62" y1={y} x2="138" y2={y} />
        ))}
      </g>

      {/* Glass shimmer center stripe */}
      <rect x="90" y="135" width="20" height="155" fill="url(#burj-glass)" opacity="0.7" />

      {/* Antenna spire + finial */}
      <line x1="100" y1="18" x2="100" y2="0" stroke="#1a5e36" strokeWidth="1.5" />
      <circle cx="100" cy="0" r="2" fill="#d4a73c" />

      {/* Capital marker — small gold star */}
      <g transform="translate(100, 50)">
        <circle r="6" fill="rgba(212,167,60,0.9)" stroke="#fff" strokeWidth="1" />
        <text y="3" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#1c1c1c" fontWeight="700">
          ★
        </text>
      </g>

      {/* Ground reflection */}
      <ellipse cx="100" cy="295" rx="50" ry="4" fill="rgba(0,0,0,0.4)" />
    </svg>
  );
}
