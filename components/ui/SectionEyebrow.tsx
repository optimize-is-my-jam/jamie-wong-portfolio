type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionEyebrow({
  children,
  className = "",
  as: Tag = "h2",
}: SectionEyebrowProps) {
  return (
    <Tag
      className={`mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-primary ${className}`.trim()}
    >
      <span className="h-px w-8 bg-primary" aria-hidden />
      {children}
    </Tag>
  );
}
