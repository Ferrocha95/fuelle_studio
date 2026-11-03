"use client";

import type { ComponentType, KeyboardEvent, MouseEvent, RefObject } from "react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";

const experiments = [
  { id: "connecta", number: "01", title: "Contenido que conecta.", discipline: "Contenido y redes sociales", summary: "Muestra cómo una idea se vuelve una presencia constante: feed, carrusel y reel con una misma voz visual.", purpose: "Convertir un mensaje en un sistema de piezas que puede sostenerse en redes, sin repetir la misma publicación.", detail: "Sistema editorial para redes: piezas que comparten una señal visual y cambian de formato sin perder su centro. Demuestra cómo una idea puede sostener presencia y conversación en distintos formatos.", resources: ["Feed de publicaciones", "Carrusel editorial", "Mockup de reel"] },
  { id: "notar", number: "02", title: "Ideas que llaman la atención.", discipline: "Campañas y dirección creativa", summary: "Muestra cómo un concepto central puede vivir en una pieza principal, una adaptación social y un anuncio.", purpose: "Dar a una campaña una idea reconocible que conecte todas sus piezas, en vez de crear anuncios aislados.", detail: "Campaña conceptual original construida alrededor del mensaje “Haz que el gesto cuente”. Demuestra cómo una dirección creativa puede dar coherencia a una pieza principal y sus adaptaciones.", resources: ["Pieza principal", "Adaptación para redes", "Mockup publicitario"] },
  { id: "vida", number: "03", title: "Experiencias que cobran vida.", discipline: "Web, interfaces e interacciones digitales", summary: "Muestra cómo una web puede orientar, responder a un gesto y hacer que una idea se use, no solo se vea.", purpose: "Traducir una idea en un punto digital claro: una experiencia que presenta, guía y da un siguiente paso.", detail: "Experiencia digital conceptual: una vista de escritorio y una móvil comparten una navegación por capas, superficies de vidrio y respuestas sutiles al gesto. Demuestra cómo una interfaz puede orientar, responder y sentirse propia.", resources: ["Vista de escritorio", "Vista móvil", "Componentes interactivos"] },
] as const;

type Experiment = (typeof experiments)[number];
type ExperimentId = Experiment["id"];
type VisualProps = { expanded?: boolean };

function SocialVisual({ expanded = false }: VisualProps) {
  return <div aria-hidden="true" className={`lab-social ${expanded ? "lab-social--expanded" : ""}`}><div className="lab-social__feed"><div className="lab-social__feed-title">Una idea<br />que conecta</div><div className="lab-social__grid"><i /><i /><i /><i /></div><small>feed / señal compartida</small></div><div className="lab-social__carousel"><span>01</span><p>Una idea<br />en cinco gestos.</p><i /><i /><i /><b>arrastrar →</b></div><div className="lab-social__reel"><span>REEL</span><strong>EN<br />MOVIMIENTO</strong><i>▶</i><small>00:12</small></div></div>;
}

function CampaignVisual({ expanded = false }: VisualProps) {
  return <div aria-hidden="true" className={`lab-campaign ${expanded ? "lab-campaign--expanded" : ""}`}><div className="lab-campaign__poster"><span>FUELLE / LAB</span><strong>HAZ<br />QUE EL<br />GESTO<br />CUENTE.</strong><i>↗</i><b>Campaña conceptual</b></div><div className="lab-campaign__billboard"><div><span>AHORA</span><strong>SE<br />NOTA.</strong></div><i /></div><div className="lab-campaign__social-ad"><span>adaptación social</span><strong>GESTO<br />/ 01</strong><i>+</i></div></div>;
}

function ExperienceVisual({ expanded = false }: VisualProps) {
  return <div aria-hidden="true" className={`lab-experience ${expanded ? "lab-experience--expanded" : ""}`}><div className="lab-experience__desktop"><div className="lab-experience__top"><span>UMBRAL</span><i>Explorar</i><i>Materia</i><i>Contacto</i></div><div className="lab-experience__canvas"><p>Una experiencia<br />que responde<br />al gesto.</p><div className="lab-experience__orb" /><span className="lab-experience__enter">Entrar <b>↗</b></span></div><div className="lab-experience__rail"><i /><i /><i /></div></div><div className="lab-experience__mobile"><span>UMBRAL</span><strong>Respira.<br />Explora.</strong><i /><b>+</b></div></div>;
}

const visualById: Record<ExperimentId, ComponentType<VisualProps>> = { connecta: SocialVisual, notar: CampaignVisual, vida: ExperienceVisual };
const focusableSelector = "button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])";

function LabDialog({ experiment, onClose, returnFocusRef }: { experiment: Experiment; onClose: () => void; returnFocusRef: RefObject<HTMLButtonElement | null> }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const Visual = visualById[experiment.id];

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const returnFocusTarget = returnFocusRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)];
      const first = items[0]; const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = previousBodyOverflow; document.documentElement.style.overflow = previousDocumentOverflow; returnFocusTarget?.focus(); };
  }, [onClose, returnFocusRef]);

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => { if (event.target === event.currentTarget) onClose(); };
  return <div aria-labelledby="creative-lab-dialog-title" className="lab-dialog-backdrop" onMouseDown={closeFromBackdrop} role="presentation"><div aria-modal="true" className={`lab-dialog lab-dialog--${experiment.id}`} ref={dialogRef} role="dialog"><div className="lab-dialog__bar"><p>Fuelle / Ideas en acción · exploración conceptual</p><button aria-label="Cerrar exploración" onClick={onClose} ref={closeRef} type="button">Cerrar <span aria-hidden="true">×</span></button></div><div className="lab-dialog__content"><div className="lab-dialog__visual"><Visual expanded /></div><div className="lab-dialog__copy"><p className="lab-card__number">Demostración {experiment.number}</p><p className="lab-card__discipline">{experiment.discipline}</p><h2 id="creative-lab-dialog-title">{experiment.title}</h2><p className="lab-dialog__purpose"><span>Qué demuestra</span>{experiment.purpose}</p><p>{experiment.detail}</p><ul>{experiment.resources.map((resource) => <li key={resource}>{resource}</li>)}</ul><p className="lab-dialog__notice">Exploración conceptual original de Fuelle Studio. No representa un proyecto contratado ni resultados de clientes.</p></div></div></div></div>;
}

export function V5Capabilities() {
  const [selected, setSelected] = useState<Experiment | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openExperiment = (experiment: Experiment, target: HTMLButtonElement) => { triggerRef.current = target; setSelected(experiment); };
  const onCardKeyDown = (event: KeyboardEvent<HTMLButtonElement>, experiment: Experiment) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openExperiment(experiment, event.currentTarget); } };

  return <section aria-labelledby="creative-lab-title" className="creative-lab" id="capacidades"><Container className="creative-lab__container"><header className="creative-lab__intro"><p>Fuelle / Ideas en acción</p><h2 id="creative-lab-title">Las ideas se explican. También se demuestran.</h2><div><p>Exploramos distintas maneras de convertir una idea en contenido, campañas y experiencias digitales. Tres ejercicios creativos que muestran cómo pensamos, diseñamos y damos vida a las ideas.</p><small>Exploraciones conceptuales de Fuelle Studio. No representan proyectos contratados ni resultados de clientes.</small></div></header><div className="creative-lab__grid" data-capabilities-v5>{experiments.map((experiment) => { const Visual = visualById[experiment.id]; return <article className={`lab-card lab-card--${experiment.id}`} key={experiment.id}><button aria-haspopup="dialog" className="lab-card__button" onClick={(event) => openExperiment(experiment, event.currentTarget)} onKeyDown={(event) => onCardKeyDown(event, experiment)} type="button"><div className="lab-card__visual"><Visual /></div><div className="lab-card__overlay" /><div className="lab-card__content"><div><p className="lab-card__number">Demostración {experiment.number}</p><p className="lab-card__discipline">{experiment.discipline}</p></div><div><h3>{experiment.title}</h3><p className="lab-card__summary">{experiment.summary}</p><span className="lab-card__cta">Explorar <b aria-hidden="true">↗</b></span></div></div></button></article>; })}</div>{selected ? <LabDialog experiment={selected} onClose={() => setSelected(null)} returnFocusRef={triggerRef} /> : null}</Container></section>;
}
