type TechChipProps = {
  children: React.ReactNode;
  className?: string;
  /** `experience` matches stitch experience tag sizing. */
  size?: "portfolio" | "experience";
  /** `featured` — tighter, bordered chips for flagship portfolio blocks. */
  variant?: "default" | "featured";
};

/** Technical tag — blocky radius per DESIGN.md chips. */
export function TechChip({
  children,
  className = "",
  size = "portfolio",
  variant = "default",
}: TechChipProps) {
  const text =
    size === "experience" ? "text-[0.7rem]" : "text-[10px]";

  const variantClass =
    variant === "featured"
      ? "border border-white/[0.08] bg-surface-container-low/90 px-3.5 py-1.5 font-semibold tracking-[0.12em] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
      : "bg-surface-container-high px-3 py-1 font-bold tracking-wider";

  const toneClass =
    variant === "featured" ? "text-slate-300" : "text-on-surface-variant";

  return (
    <span
      className={`rounded-md font-label uppercase ${toneClass} ${text} ${variantClass} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
