type IllustrationFrameProps = {
  children: React.ReactNode;
  /** Extra class on the inner art layer (for positioning). */
  className?: string;
};

/**
 * Shared canvas: recessed “code block” tier, blueprint grid, cool edge glow.
 */
export function IllustrationFrame({ children, className = "" }: IllustrationFrameProps) {
  return (
    <div
      className={`portfolio-illustration relative aspect-[16/9] overflow-hidden rounded-sm bg-[#060a12] ${className}`.trim()}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(50,145,255,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgba(167, 200, 255, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 200, 255, 0.35) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      {children}
    </div>
  );
}
