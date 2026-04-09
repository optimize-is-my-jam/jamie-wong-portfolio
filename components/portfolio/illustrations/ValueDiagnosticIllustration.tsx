import { IllustrationFrame } from "@/components/portfolio/illustrations/IllustrationFrame";

/** Benchmark ledger + what-if lever scenarios (spend / revenue vs. bench). */
export function ValueDiagnosticIllustration() {
  const benchmarkRows = [
    {
      metric: "Spend",
      client: "$42.0M",
      benchmark: "$38.5M",
      delta: "+9.1%",
      deltaPositive: true,
    },
    {
      metric: "Revenue",
      client: "$128M",
      benchmark: "$118M",
      delta: "+8.5%",
      deltaPositive: true,
    },
    {
      metric: "ROI",
      client: "3.05×",
      benchmark: "3.07×",
      delta: "−0.6%",
      deltaPositive: false,
    },
  ];

  const whatIf = [
    {
      lever: "Paid search +10%",
      outcome: "+$6.1M rev (proj.)",
    },
    {
      lever: "Events spend −8%",
      outcome: "+0.4pt ROI",
    },
    {
      lever: "Pricing lever: hold",
      outcome: "Neutral",
    },
  ];

  const tableLeft = 44;
  const tableTop = 56;
  const tableW = 712;
  const rowH = 34;
  const col = [tableLeft + 8, 196, 392, 568];

  return (
    <IllustrationFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <text
          x={tableLeft}
          y="38"
          fill="#dae2fd"
          fontSize="13"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Client vs. benchmark
        </text>
        <text x="556" y="38" fill="#8b90a0" fontSize="10" fontFamily="system-ui, sans-serif">
          $ · FY run-rate
        </text>

        {/* Table shell */}
        <rect
          x={tableLeft}
          y={tableTop}
          width={tableW}
          height={148}
          rx="6"
          fill="#060e20"
          stroke="#3291ff"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Header row */}
        <rect x={tableLeft + 1} y={tableTop + 1} width={tableW - 2} height={rowH - 2} fill="#131b2e" />
        <line
          x1={tableLeft}
          y1={tableTop + rowH}
          x2={tableLeft + tableW}
          y2={tableTop + rowH}
          stroke="#414755"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        {[
          { x: col[0], t: "Metric" },
          { x: col[1], t: "Client" },
          { x: col[2], t: "Benchmark" },
          { x: col[3], t: "Δ vs bench" },
        ].map((c, hi) => (
          <text
            key={hi}
            x={c.x}
            y={tableTop + 22}
            fill="#a7c8ff"
            fontSize="10"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.06em"
          >
            {c.t}
          </text>
        ))}

        {/* Data rows */}
        {benchmarkRows.map((row, i) => {
          const y = tableTop + rowH + i * rowH + 22;
          const bg =
            i % 2 === 0 ? "rgba(11,19,38,0.5)" : "rgba(19,27,46,0.35)";
          return (
            <g key={row.metric}>
              <rect
                x={tableLeft + 1}
                y={tableTop + rowH + i * rowH}
                width={tableW - 2}
                height={rowH}
                fill={bg}
              />
              <line
                x1={tableLeft}
                y1={tableTop + rowH + (i + 1) * rowH}
                x2={tableLeft + tableW}
                y2={tableTop + rowH + (i + 1) * rowH}
                stroke="#414755"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <text x={col[0]} y={y} fill="#c1c6d7" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
                {row.metric}
              </text>
              <text x={col[1]} y={y} fill="#dae2fd" fontSize="11" fontFamily="system-ui, sans-serif">
                {row.client}
              </text>
              <text x={col[2]} y={y} fill="#c1c6d7" fontSize="11" fontFamily="system-ui, sans-serif">
                {row.benchmark}
              </text>
              <text
                x={col[3]}
                y={y}
                fill={row.deltaPositive ? "#a7c8ff" : "#ffb4ab"}
                fontSize="11"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
                className="value-delta"
              >
                {row.delta}
              </text>
            </g>
          );
        })}

        {/* Column guides */}
        {[196, 392, 568].map((vx) => (
          <line
            key={vx}
            x1={vx}
            y1={tableTop + rowH}
            x2={vx}
            y2={tableTop + 148}
            stroke="#414755"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        ))}

        {/* What-if section */}
        <text
          x={tableLeft}
          y="238"
          fill="#a7c8ff"
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.12em"
        >
          WHAT-IF SCENARIOS
        </text>
        <text x={tableLeft} y="254" fill="#8b90a0" fontSize="9" fontFamily="system-ui, sans-serif">
          Pull a lever · See projected impact
        </text>

        {whatIf.map((w, i) => {
          const y = 268 + i * 44;
          return (
            <g key={w.lever} className="value-whatif-row" style={{ animationDelay: `${i * 0.22}s` }}>
              <rect
                x={tableLeft}
                y={y}
                width={tableW}
                height="36"
                rx="4"
                fill="#131b2e"
                stroke="#414755"
                strokeOpacity="0.45"
                strokeWidth="1"
              />
              <rect x={tableLeft} y={y} width="4" height="36" rx="1" fill="#3291ff" fillOpacity="0.65" />
              <text
                x={tableLeft + 16}
                y={y + 23}
                fill="#dae2fd"
                fontSize="11"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {w.lever}
              </text>
              <text
                x={tableLeft + tableW - 12}
                y={y + 23}
                textAnchor="end"
                fill="#3291ff"
                fontSize="11"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                {w.outcome}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute bottom-4 left-4 max-w-[92%] font-label text-[10px] uppercase leading-relaxed tracking-[0.2em] text-primary/80">
        Benchmark table · Lever scenarios
      </div>
    </IllustrationFrame>
  );
}
