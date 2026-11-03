import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServicesExperience } from "@/components/services/services-experience";

export const metadata = { title: "Servicios" };

export default function ServicesPage() {
  return <div className="site-shell"><SiteHeader /><ServicesExperience /><SiteFooter /></div>;
}
