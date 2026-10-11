function ControllerArt() {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="Silver game controller illustration"
      className="w-full max-w-md"
    >
      <defs>
        <linearGradient id="silverBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6eaf0" />
          <stop offset="100%" stopColor="#8a93a3" />
        </linearGradient>
      </defs>
      <path
        d="M70 50 H250 C290 50 310 120 290 160 C275 190 245 180 230 150 H90 C75 180 45 190 30 160 C10 120 30 50 70 50 Z"
        fill="url(#silverBody)"
      />
      <rect x="64" y="92" width="36" height="12" rx="3" fill="#0a1a3f" />
      <rect x="76" y="80" width="12" height="36" rx="3" fill="#0a1a3f" />
      <circle cx="228" cy="86" r="9" fill="#1d5fe0" />
      <circle cx="250" cy="102" r="9" fill="#1d5fe0" />
      <circle cx="228" cy="118" r="9" fill="#1d5fe0" />
      <circle cx="206" cy="102" r="9" fill="#1d5fe0" />
      <circle cx="130" cy="125" r="14" fill="#10275c" />
      <circle cx="190" cy="125" r="14" fill="#10275c" />
    </svg>
  );
}

export default ControllerArt;