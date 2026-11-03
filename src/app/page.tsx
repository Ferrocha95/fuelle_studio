import type { Metadata } from "next";

import { HomeHeader } from "@/components/home/home-header";
import { HomeMotion } from "@/components/home/home-motion";
import { ManifestoSculpture } from "@/components/home/manifesto-sculpture";
import { ServiceAccordion } from "@/components/home/service-accordion";
import { V5Capabilities } from "@/components/home/v5-capabilities";
import { V5Hero } from "@/components/home/v5-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Ideas que toman impulso",
  description: "Estrategia, creatividad y tecnología para marcas que no nacieron para quedarse quietas.",
};

const approach = [
  ["01", "Nos conocemos", "Escuchamos qué hace el negocio, qué necesita y qué quiere conseguir."],
  ["02", "Detectamos oportunidades", "Analizamos el contexto y recomendamos servicios adecuados."],
  ["03", "Definimos el camino", "Establecemos alcance, responsabilidades, tiempos y condiciones antes de comenzar."],
  ["04", "Ponemos manos a la obra", "Planeamos, producimos y ejecutamos conforme al proyecto contratado."],
  ["05", "Revisamos y evolucionamos", "Damos seguimiento a los entregables y ajustamos dentro de los acuerdos establecidos."],
] as const;

export default function Home() {
  return (
    <div className="site-shell overflow-x-clip" id="inicio">
      <HomeMotion>
        <HomeHeader />
        <main>
        <V5Hero />

        <section className="manifesto-v5" id="manifiesto">
          <Container className="manifesto-v5__container">
            <div className="manifesto-v5__art"><p className="manifesto-v5__kicker">Una forma de avanzar</p><ManifestoSculpture /></div>
            <div className="manifesto-v5__content">
              <h2 aria-label="Las ideas no llegan quietas. Se prueban, se tensan y encuentran la forma de mover algo." className="manifesto-v5__title">
                <span className="manifesto-v5__line"><span data-manifesto-line>Las ideas no llegan quietas.</span></span>
                <span className="manifesto-v5__line"><span data-manifesto-line>Se prueban, se tensan</span></span>
                <span className="manifesto-v5__line"><span data-manifesto-line>y encuentran la forma de mover algo.</span></span>
              </h2>
              <div className="manifesto-v5__support"><p>Trabajamos desde la curiosidad y la precisión: un pie en lo que una marca necesita decir, otro en la manera en que puede hacerse notar.</p><p>No hay recetas cerradas. Hay una dirección clara, una ejecución consciente y espacio para que aparezca lo inesperado.</p></div>
            </div>
          </Container>
        </section>

        <V5Capabilities />

        <section className="section-orange" id="servicios">
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end"><p className="section-kicker">Servicios</p><h2 className="max-w-2xl font-display text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Un sistema de capacidades que se activa según el momento.</h2></div>
            <ServiceAccordion />
          </Container>
        </section>

        <section className="section-light approach-section" id="enfoque">
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="approach-path-layout"><div><p className="section-kicker">Nuestra forma de trabajar</p><h2 className="mt-5 max-w-sm font-display text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Un camino claro para poner las ideas en acción.</h2></div><div className="approach-path"><div className="approach-line" data-approach-line /><ol>{approach.map(([number, title, description]) => <li key={number}><span className="approach-path__point">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></div>
          </Container>
        </section>

        <section className="projects-section" id="proyectos">
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="section-kicker text-[var(--color-taupe)]">Proyectos</p><h2 className="mt-5 max-w-md font-display text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Un archivo que empieza a tomar forma.</h2></div><div className="project-empty" data-project-grid><div aria-hidden="true" className="project-empty__cross" /><div className="relative z-10 max-w-sm"><p className="font-display text-2xl font-semibold tracking-[-0.05em]">Los primeros casos llegarán cuando haya historias reales que contar.</p><p className="mt-4 text-sm leading-6 text-[var(--color-taupe)]">Este espacio no anticipa clientes, resultados ni testimonios. Está reservado para trabajo publicado con contexto.</p></div></div></div>
          </Container>
        </section>

        <section className="contact-section" id="contacto">
          <Container className="py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="section-kicker">Contacto</p><h2 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">¿Hay algo que necesita moverse?</h2></div><div><p className="max-w-md text-base leading-7 text-[var(--color-ink-muted)]">El punto de contacto está en preparación. Cuando los canales oficiales estén confirmados, este cierre conectará con diagnóstico, WhatsApp y formulario.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col"><button aria-disabled="true" className="contact-button" disabled type="button">Solicitar diagnóstico <span>Próximamente</span></button><button aria-disabled="true" className="contact-button" disabled type="button">Abrir WhatsApp <span>Sin integración</span></button><button aria-disabled="true" className="contact-button" disabled type="button">Escribir al estudio <span>Formulario pendiente</span></button></div></div></div>
          </Container>
        </section>
        </main>
        <SiteFooter />
      </HomeMotion>
    </div>
  );
}
