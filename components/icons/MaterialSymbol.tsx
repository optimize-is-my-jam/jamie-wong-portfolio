type MaterialSymbolProps = {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
};

export function MaterialSymbol({
  name,
  className = "",
  "aria-hidden": ariaHidden = true,
}: MaterialSymbolProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}
