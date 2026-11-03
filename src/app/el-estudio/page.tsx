import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StudioExperience } from "@/components/studio/studio-experience";

export const metadata = { title: "El estudio" };

export default function StudioPage() {
  return <div className="site-shell"><SiteHeader /><StudioExperience /><SiteFooter /></div>;
}
