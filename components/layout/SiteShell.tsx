import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteNav />
      <div className="flex-grow">{children}</div>
      <SiteFooter />
    </div>
  );
}
