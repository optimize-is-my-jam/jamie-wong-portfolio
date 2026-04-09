import { IllustrationFrame } from "@/components/portfolio/illustrations/IllustrationFrame";

/**
 * AI travel platform — Teams-style chat mockup. Metrics are directional labels,
 * not claimed results. Skylink = internal codename for the Bain AI Travel Platform workstream.
 */
export function SkylinkTravelIllustration() {
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
          <linearGradient id="skylink-window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#131b2e" />
            <stop offset="100%" stopColor="#0a0e18" />
          </linearGradient>
          <filter id="skylink-agent-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* App chrome — Teams-like shell */}
        <rect
          x="36"
          y="28"
          width="728"
          height="394"
          rx="8"
          fill="url(#skylink-window)"
          stroke="#414755"
          strokeOpacity="0.45"
          strokeWidth="1"
        />

        {/* Title bar */}
        <rect x="36" y="28" width="728" height="44" rx="8" fill="#171f33" />
        <rect x="36" y="60" width="728" height="12" fill="#171f33" />
        <circle cx="60" cy="50" r="5" fill="#3291ff" fillOpacity="0.35" />
        <text
          x="78"
          y="54"
          fill="#dae2fd"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Travel
        </text>
        <text
          x="142"
          y="54"
          fill="#c1c6d7"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          · Skylink (internal) · Teams
        </text>

        {/* Directional chips — kept inside window (inner right ≈ 764px) */}
        <g className="skylink-metric-chip">
          <rect x="472" y="38" width="132" height="24" rx="4" fill="#060e20" stroke="#3291ff" strokeOpacity="0.35" strokeWidth="1" />
          <text
            x="538"
            y="50"
            fill="#a7c8ff"
            fontSize="9"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Target: lower cost
          </text>
        </g>
        <g className="skylink-metric-chip-alt">
          <rect x="614" y="38" width="136" height="24" rx="4" fill="#060e20" stroke="#414755" strokeWidth="1" />
          <text
            x="682"
            y="50"
            fill="#c1c6d7"
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Target: faster resolution
          </text>
        </g>

        {/* Left rail — channel / app */}
        <rect x="36" y="72" width="72" height="350" fill="#0b1326" />
        <circle cx="72" cy="110" r="5" fill="#3291ff" fillOpacity="0.85" />
        <circle cx="72" cy="138" r="4" fill="#414755" />
        <circle cx="72" cy="164" r="4" fill="#414755" />
        <rect x="52" y="200" width="40" height="40" rx="6" fill="#131b2e" stroke="#3291ff" strokeOpacity="0.5" strokeWidth="1" className="skylink-agent-rail" />
        <text x="72" y="224" textAnchor="middle" fill="#a7c8ff" fontSize="10" fontWeight="800" fontFamily="system-ui, sans-serif">
          AI
        </text>

        {/* Chat canvas */}
        <rect x="108" y="72" width="656" height="278" fill="#060a12" fillOpacity="0.6" />

        {/* User message (right) — policy / trip ask */}
        <g>
          <rect x="420" y="96" width="320" height="52" rx="10" fill="#222a3d" stroke="#414755" strokeOpacity="0.4" strokeWidth="1" />
          <rect x="440" y="112" width="200" height="6" rx="2" fill="#c1c6d7" fillOpacity="0.35" />
          <rect x="440" y="124" width="140" height="6" rx="2" fill="#c1c6d7" fillOpacity="0.2" />
        </g>

        {/* Agent row: avatar + bubble — checkmark inset inside 36×36 box (132–168, 172–208) */}
        <g filter="url(#skylink-agent-glow)">
          <rect x="132" y="172" width="36" height="36" rx="8" fill="#0b1326" stroke="#3291ff" strokeWidth="1.5" className="skylink-agent-avatar" />
          <path
            d="M 141 191 L 147.5 198 L 161 180"
            stroke="#3291ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        <rect
          x="180"
          y="168"
          width="420"
          height="112"
          rx="12"
          fill="#131b2e"
          stroke="#3291ff"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        {/* Agent copy lines */}
        <rect x="200" y="190" width="280" height="7" rx="2" fill="#a7c8ff" fillOpacity="0.35" />
        <rect x="200" y="206" width="360" height="7" rx="2" fill="#c1c6d7" fillOpacity="0.22" />
        <rect x="200" y="222" width="320" height="7" rx="2" fill="#c1c6d7" fillOpacity="0.18" />
        {/* In-thread workflow signals (illustrative) */}
        <rect x="200" y="244" width="280" height="22" rx="4" fill="#3291ff" fillOpacity="0.12" stroke="#3291ff" strokeOpacity="0.35" strokeWidth="1" />
        <text x="210" y="259" fill="#a7c8ff" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">
          Policy automation · In-thread approvals
        </text>

        {/* Typing indicator under thread */}
        <g transform="translate(180, 292)">
          <circle cx="8" cy="0" r="3" fill="#3291ff" className="skylink-typing-dot" />
          <circle cx="22" cy="0" r="3" fill="#3291ff" className="skylink-typing-dot" />
          <circle cx="36" cy="0" r="3" fill="#3291ff" className="skylink-typing-dot" />
        </g>

        {/* Teams composer strip */}
        <rect x="120" y="358" width="632" height="48" rx="6" fill="#131b2e" stroke="#414755" strokeOpacity="0.5" strokeWidth="1" />
        <rect x="136" y="374" width="220" height="8" rx="2" fill="#c1c6d7" fillOpacity="0.12" />
        <text x="144" y="381" fill="#8b90a0" fontSize="10" fontFamily="system-ui, sans-serif">
          Message in Teams…
        </text>
        <rect x="680" y="370" width="56" height="28" rx="4" fill="#3291ff" fillOpacity="0.85" />
        <text
          x="708"
          y="384"
          fill="#002a55"
          fontSize="10"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Send
        </text>

      </svg>
    </IllustrationFrame>
  );
}
