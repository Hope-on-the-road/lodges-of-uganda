export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lodges of Uganda"
    >
      {/* Shield/house icon */}
      <g transform="translate(0, 4)">
        {/* Shield shape */}
        <path
          d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Mountain/roof inside */}
        <path
          d="M12 26l8-12 8 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Door */}
        <rect x="17.5" y="22" width="5" height="6" rx="1" fill="currentColor" opacity="0.3" />
        {/* Sun */}
        <circle cx="25" cy="16" r="2.5" fill="#C49A4A" />
      </g>
      {/* Text */}
      <text
        x="48"
        y="22"
        fontFamily="var(--font-heading), Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.3"
      >
        Lodges
      </text>
      <text
        x="48"
        y="40"
        fontFamily="var(--font-heading), Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.3"
      >
        <tspan fill="currentColor" opacity="0.5" fontWeight="400">of </tspan>
        Uganda
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lodges of Uganda"
    >
      <path
        d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 26l8-12 8 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="17.5" y="22" width="5" height="6" rx="1" fill="currentColor" opacity="0.3" />
      <circle cx="25" cy="16" r="2.5" fill="#C49A4A" />
    </svg>
  );
}
