import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata = { title: "Contacto" };

export default function ContactPage() {
  return <div className="site-shell"><SiteHeader /><PageIntro eyebrow="Contacto" title="Canal por definir." description="La ruta queda preparada para un contacto aprobado; no incluye formulario ni envío de cotizaciones." /><SiteFooter /></div>;
}
