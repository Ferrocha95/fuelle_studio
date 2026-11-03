import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  return <div className="site-shell"><SiteHeader /><PageIntro eyebrow="Proyectos" title="Archivo en preparación." description="La estructura está preparada para casos de estudio reales cuando estén disponibles." /><SiteFooter /></div>;
}
