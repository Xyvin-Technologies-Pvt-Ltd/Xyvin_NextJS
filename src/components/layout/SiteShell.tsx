import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

// Wraps every page: header, main landmark, footer.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
