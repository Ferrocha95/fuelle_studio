import Link from "next/link";

import { Container } from "@/components/ui/container";

const services = [
  {
    number: "01",
    title: "Gestión de redes sociales",
    benefit: "Mantener presencia y organización editorial.",
    audience: "Negocios que necesitan ordenar su presencia cotidiana y sostener una conversación con claridad.",
    problem: "Ayuda a resolver la falta de continuidad, organización y seguimiento en los perfiles.",
    deliverables: "Calendario, programación, administración de perfiles y seguimiento.",
  },
  {
    number: "02",
    title: "Producción de contenido",
    benefit: "Transformar ideas en contenido para comunicar.",
    audience: "Equipos que ya tienen algo que decir y necesitan convertirlo en piezas claras y consistentes.",
    problem: "Ayuda a pasar de ideas aisladas a materiales que pueden publicarse y utilizarse.",
    deliverables: "Diseño gráfico, reels sencillos, copys y planeación editorial.",
  },
  {
    number: "03",
    title: "Campañas y captación",
    benefit: "Generar oportunidades mediante publicidad digital.",
    audience: "Negocios que quieren dar estructura a una iniciativa de difusión o captación concreta.",
    problem: "Ayuda a convertir una intención de campaña en una planeación, configuración y seguimiento claros.",
    deliverables: "Planeación, configuración, seguimiento y reportes de campañas.",
  },
  {
    number: "04",
    title: "CRM y automatización",
    benefit: "Organizar contactos y procesos de seguimiento.",
    audience: "Equipos que requieren un sistema más claro para dar continuidad a sus conversaciones y procesos.",
    problem: "Ayuda a reducir procesos dispersos y a ordenar cómo se reciben y acompañan los contactos.",
    deliverables: "Pipelines, formularios, automatizaciones básicas y capacitación.",
  },
  {
    number: "05",
    title: "Web y landing pages",
    benefit: "Construir presencia digital y puntos de conversión.",
    audience: "Marcas que necesitan una página para explicar, presentar o dar un siguiente paso definido.",
    problem: "Ayuda a reunir información, experiencia y acciones en un punto digital pensado para el contexto.",
    deliverables: "Diseño, desarrollo, formularios y configuración acordada.",
  },
  {
    number: "06",
    title: "Consultoría y capacitación",
    benefit: "Desarrollar capacidades y resolver necesidades concretas.",
    audience: "Personas y equipos que necesitan criterio, orientación o acompañamiento para avanzar con seguridad.",
    problem: "Ayuda a definir prioridades y a fortalecer capacidades alrededor de una necesidad específica.",
    deliverables: "Sesiones, orientación, acompañamiento y materiales definidos por alcance.",
  },
] as const;

const process = ["Nos conocemos", "Detectamos oportunidades", "Definimos el camino", "Ponemos manos a la obra", "Revisamos y evolucionamos"] as const;

export function ServicesExperience() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <Container className="services-hero__container">
          <p className="services-hero__signal">Fuelle Studio / Servicios</p>
          <div className="services-hero__title-wrap">
            <h1><span>No todas las marcas necesitan lo mismo.</span><span>Y así es como debería ser.</span></h1>
            <span aria-hidden="true" className="services-hero__orb" />
          </div>
          <div className="services-hero__bottom">
            <p>Escuchamos tu negocio, identificamos lo que necesita y construimos una solución con las herramientas adecuadas. Puedes trabajar con nosotros en un servicio específico o combinar capacidades cuando tenga sentido.</p>
            <p className="services-hero__note">Las posibilidades se definen por alcance. No son paquetes cerrados.</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="service-list-title" className="services-list">
        <Container>
          <div className="services-list__heading">
            <p>Seis capacidades, combinables cuando aportan.</p>
            <h2 id="service-list-title">El punto de partida no es un paquete: es lo que necesita moverse.</h2>
          </div>
          <ol className="services-list__items">
            {services.map((service) => (
              <li className="service-detail" key={service.number}>
                <div className="service-detail__index" aria-hidden="true">{service.number}</div>
                <div className="service-detail__main">
                  <h2>{service.title}</h2>
                  <p className="service-detail__benefit">{service.benefit}</p>
                </div>
                <dl className="service-detail__facts">
                  <div><dt>Para quién</dt><dd>{service.audience}</dd></div>
                  <div><dt>Qué ayuda a resolver</dt><dd>{service.problem}</dd></div>
                  <div><dt>Entregables orientativos</dt><dd>{service.deliverables}</dd></div>
                </dl>
                <div className="service-detail__footer">
                  <p><span>Proceso general</span>{process.join(" · ")}</p>
                  <Link className="action-link action-link--ink" href="/contacto">Solicitar un diagnóstico <span aria-hidden="true">↗</span></Link>
                </div>
              </li>
            ))}
          </ol>
          <p className="services-disclaimer">Los entregables se definen según el alcance acordado; esta lista orienta la conversación y no representa inclusiones universales ni resultados prometidos.</p>
        </Container>
      </section>
    </main>
  );
}
