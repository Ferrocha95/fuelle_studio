import Link from "next/link";

import { Container } from "@/components/ui/container";

const principles = [
  ["01", "Estrategia antes que ocurrencias.", "Empezamos por entender el contexto, no por llenar un formato."],
  ["02", "Creatividad con propósito.", "La expresión encuentra dirección cuando responde a una necesidad real."],
  ["03", "Tecnología que aporta.", "Usamos lo digital cuando mejora una experiencia, un proceso o una decisión."],
  ["04", "Trabajo que evoluciona.", "Dejamos espacio para revisar, aprender y ajustar dentro de un camino acordado."],
] as const;

const process = [
  ["01", "Nos conocemos.", "Escuchamos qué hace el negocio, qué necesita y qué quiere conseguir."],
  ["02", "Detectamos oportunidades.", "Analizamos el contexto y recomendamos servicios adecuados."],
  ["03", "Definimos el camino.", "Establecemos alcance, responsabilidades, tiempos y condiciones antes de comenzar."],
  ["04", "Ponemos manos a la obra.", "Planeamos, producimos y ejecutamos conforme al proyecto contratado."],
  ["05", "Revisamos y evolucionamos.", "Damos seguimiento a los entregables y ajustamos dentro de los acuerdos establecidos."],
] as const;

export function StudioExperience() {
  return (
    <main className="studio-page">
      <section className="studio-hero">
        <Container className="studio-hero__container">
          <div className="studio-hero__intro"><p>Fuelle Studio / El estudio</p><span>Independiente · México</span></div>
          <div className="studio-hero__composition" aria-hidden="true"><i /><i /><i /><b>F</b></div>
          <h1>No estamos aquí para hacer más de lo mismo.</h1>
        </Container>
      </section>

      <section className="studio-statement">
        <Container className="studio-statement__container">
          <p className="studio-statement__marker">01 / El punto de vista</p>
          <div className="studio-statement__copy">
            <p>Somos Fuelle Studio, un estudio creativo independiente que une estrategia, creatividad y tecnología para ayudar a las marcas a avanzar.</p>
            <p>Nos gustan las buenas ideas. Pero nos gustan todavía más cuando dejan de ser solamente ideas.</p>
            <p>Por eso combinamos pensamiento estratégico, dirección creativa y ejecución digital. Porque una marca no necesita hacer de todo: necesita saber qué hacer, por qué hacerlo y cómo llevarlo a la realidad.</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="studio-principles">
        <Container>
          <div className="studio-principles__heading"><p>02 / Cómo pensamos</p><h2 id="principles-title">Cuatro principios para no perder el impulso.</h2></div>
          <ol>{principles.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </Container>
      </section>

      <section aria-labelledby="studio-process-title" className="studio-process">
        <Container className="studio-process__container">
          <div><p>03 / Nuestra forma de trabajar</p><h2 id="studio-process-title">La claridad no le quita energía al proceso. Le da dirección.</h2></div>
          <ol>{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          <Link className="studio-process__cta" href="/contacto">Hablemos de lo que necesita moverse <span aria-hidden="true">↗</span></Link>
        </Container>
      </section>
    </main>
  );
}
