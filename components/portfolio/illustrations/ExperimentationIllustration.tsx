import { IllustrationFrame } from "@/components/portfolio/illustrations/IllustrationFrame";

/** Marketing experiment design — OLS fit, spend → ROI, optimal regional allocation. */
export function ExperimentationIllustration() {
  const scatter = [
    { cx: 118, cy: 282 },
    { cx: 152, cy: 272 },
    { cx: 188, cy: 258 },
    { cx: 225, cy: 248 },
    { cx: 262, cy: 232 },
    { cx: 298, cy: 218 },
    { cx: 335, cy: 205 },
    { cx: 372, cy: 192 },
    { cx: 408, cy: 178 },
    { cx: 445, cy: 162 },
    { cx: 472, cy: 148 },
  ];

  /** Residual segments (observed point → OLS line at same spend). */
  const residuals = [
    { x: 188, y0: 258, y1: 251 },
    { x: 298, y0: 218, y1: 202 },
    { x: 408, y0: 178, y1: 152 },
  ];

  const allocation = [
    { label: "NA", w: 0.34 },
    { label: "EU", w: 0.26 },
    { label: "UK", w: 0.14 },
    { label: "LATAM", w: 0.15 },
    { label: "APAC", w: 0.11 },
  ];

  return (
    <IllustrationFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="exp-scatter-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3291ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3291ff" stopOpacity="0" />
          </linearGradient>
          <filter id="exp-line-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Header */}
        <text
          x="48"
          y="46"
          fill="#dae2fd"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Campaign ROI vs. market spend
        </text>
        <rect x="618" y="32" width="132" height="22" rx="4" fill="#131b2e" stroke="#3291ff" strokeOpacity="0.35" strokeWidth="1" />
        <text x="684" y="47" textAnchor="middle" fill="#a7c8ff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">
          Linear regression (OLS)
        </text>

        {/* Chart panel */}
        <rect x="48" y="64" width="500" height="268" rx="6" fill="#060e20" stroke="#414755" strokeOpacity="0.45" strokeWidth="1" />

        {/* Axes */}
        <line x1="88" y1="310" x2="520" y2="310" stroke="#414755" strokeWidth="1" />
        <line x1="88" y1="310" x2="88" y2="92" stroke="#414755" strokeWidth="1" />

        {/* X-axis label — higher contrast + slight lift from axis */}
        <text
          x="300"
          y="336"
          textAnchor="middle"
          fill="#d1d9e8"
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
        >
          Marketing spend (indexed)
        </text>
        <text
          x="24"
          y="210"
          fill="#b8c0d0"
          fontSize="10"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
          transform="rotate(-90 24 210)"
          textAnchor="middle"
        >
          ROI / response
        </text>

        {/* Grid */}
        {[120, 180, 240, 300, 360, 440].map((gx) => (
          <line
            key={`v-${gx}`}
            x1={gx}
            y1="96"
            x2={gx}
            y2="306"
            stroke="#414755"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        ))}
        {[120, 160, 200, 240, 280].map((gy) => (
          <line
            key={`h-${gy}`}
            x1="92"
            y1={gy}
            x2="516"
            y2={gy}
            stroke="#414755"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        ))}

        {/* Regression line (OLS fit) */}
        <line
          x1="96"
          y1="292"
          x2="484"
          y2="118"
          stroke="#3291ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#exp-line-glow)"
          className="exp-regression-line"
        />

        {/* Residuals */}
        {residuals.map((r) => (
          <line
            key={r.x}
            x1={r.x}
            y1={r.y0}
            x2={r.x}
            y2={r.y1}
            stroke="#a7c8ff"
            strokeWidth="1"
            strokeOpacity="0.45"
            strokeDasharray="3 4"
          />
        ))}

        {/* Scatter points */}
        {scatter.map((p, i) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            cx={p.cx}
            cy={p.cy}
            r="5"
            fill="#0b1326"
            stroke="#a7c8ff"
            strokeWidth="1.5"
            className="exp-scatter-point"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}

        {/* Highlight: “best” market to fund next — label on pill so it clears the regression line */}
        <circle cx="335" cy="205" r="9" fill="none" stroke="#3291ff" strokeWidth="1.5" strokeOpacity="0.6" className="exp-optimal-ring" />
        <g>
          <rect
            x="356"
            y="184"
            width="58"
            height="20"
            rx="5"
            fill="#0a1018"
            stroke="#3291ff"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <text
            x="385"
            y="194"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#e8f2ff"
            fontSize="10"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            next $
          </text>
        </g>

        {/* Right panel — optimal budget mix */}
        <text x="572" y="78" fill="#c1c6d7" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">
          Optimal allocation
        </text>
        <text x="572" y="94" fill="#8b90a0" fontSize="9" fontFamily="system-ui, sans-serif">
          Where to invest next
        </text>

        {allocation.map((row, i) => {
          const y = 112 + i * 42;
          const barW = 200 * row.w;
          return (
            <g key={row.label}>
              <text x="572" y={y + 14} fill="#c1c6d7" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
                {row.label}
              </text>
              <rect x="628" y={y} width="200" height="14" rx="2" fill="#131b2e" />
              <rect
                x="628"
                y={y}
                width={barW}
                height="14"
                rx="2"
                fill="#3291ff"
                fillOpacity={0.35 + i * 0.08}
                className="exp-bar-lift"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute bottom-4 right-4 max-w-[92%] text-right font-label text-[9px] uppercase leading-relaxed tracking-[0.16em] text-slate-400">
        OLS · Optimal markets · Marketing &amp; pricing experiments
      </div>
    </IllustrationFrame>
  );
}
