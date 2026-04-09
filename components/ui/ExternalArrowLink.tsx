import { MaterialSymbol } from "@/components/icons/MaterialSymbol";

type ExternalArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalArrowLink({
  href,
  children,
  className = "",
}: ExternalArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 text-sm font-bold tracking-tight text-primary transition-all hover:gap-4 ${className}`.trim()}
    >
      {children}
      <MaterialSymbol name="open_in_new" className="text-lg" aria-hidden />
    </a>
  );
}
