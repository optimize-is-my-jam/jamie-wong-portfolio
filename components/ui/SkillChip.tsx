type SkillChipProps = {
  children: React.ReactNode;
};

/** Skills grid chip — surface-container tier per streamlined experience reference. */
export function SkillChip({ children }: SkillChipProps) {
  return (
    <span className="rounded bg-surface-container px-3 py-1.5 text-xs text-on-surface">
      {children}
    </span>
  );
}
