type ErrorIllustrationProps = {
  code?: string;
};

export function ErrorIllustration({
  code = "404",
}: ErrorIllustrationProps) {
  return (
    <div
      className="relative mx-auto flex h-48 w-full max-w-md items-center justify-center sm:h-60"
      aria-hidden="true"
    >
      {/* Background number */}
      <span className="absolute select-none font-display text-[140px] leading-none tracking-tighter text-primary/7 sm:text-[200px]">
        {code}
      </span>

      {/* Architectural illustration */}
      <svg
        viewBox="0 0 200 180"
        fill="none"
        className="relative h-36 w-40 text-primary sm:h-44 sm:w-52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main building */}
        <path d="M55 155V48L105 20L155 48V155" />

        {/* Roof */}
        <path d="M47 52L105 18L163 52" />

        {/* Side building */}
        <path d="M20 155V80L55 60" />
        <path d="M155 85L180 98V155" />

        {/* Windows */}
        {[55, 85, 115].map((y) => (
          <g key={y}>
            <rect x="68" y={y} width="19" height="20" />
            <path d={`M77.5 ${y}V${y + 20}`} />

            <rect x="123" y={y} width="19" height="20" />
            <path d={`M132.5 ${y}V${y + 20}`} />
          </g>
        ))}

        {/* Entrance */}
        <path d="M96 155V119H114V155" />
        <path d="M105 119V155" />

        {/* Side windows */}
        <rect x="30" y="90" width="13" height="19" />
        <rect x="30" y="120" width="13" height="19" />
        <rect x="164" y="108" width="9" height="18" />

        {/* Ground */}
        <path
          d="M8 155H192"
          className="stroke-accent"
        />

        <path
          d="M40 165H160"
          className="stroke-accent opacity-40"
        />

        {/* Decorative sun */}
        <circle
          cx="170"
          cy="35"
          r="12"
          className="stroke-accent"
        />
      </svg>
    </div>
  );
}