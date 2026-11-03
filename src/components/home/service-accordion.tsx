"use client";

import { useState } from "react";

const services = [
  ["Estrategia", "Dirección para ordenar prioridades, definir foco y construir decisiones con intención."],
  ["Gestión de redes", "Presencia editorial y sistemas de publicación que sostienen conversaciones relevantes."],
  ["Contenido", "Ideas, narrativas y piezas pensadas para circular con claridad y personalidad."],
  ["Campañas", "Conceptos que conectan un mensaje con su momento, medio y audiencia."],
  ["Desarrollo web", "Experiencias digitales que convierten una dirección creativa en interacción útil."],
  ["Sistemas digitales", "Herramientas y flujos conectados para que la ejecución pueda mantenerse en movimiento."],
] as const;

export function ServiceAccordion() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--color-taupe)]">
      {services.map(([name, description], index) => {
        const isActive = index === active;
        const triggerId = `service-trigger-${index}`;
        const panelId = `service-panel-${index}`;
        return (
          <section className="border-b border-[var(--color-taupe)]" key={name}>
            <h3>
              <button aria-controls={panelId} aria-expanded={isActive} className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 text-left sm:grid-cols-[4rem_1fr_auto] sm:py-7" id={triggerId} onClick={() => setActive((current) => current === index ? null : index)} type="button">
                <span className="text-xs text-[var(--color-ink-muted)]">0{index + 1}</span>
                <span className="font-display text-2xl font-semibold tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">{name}</span>
                <span aria-hidden="true" className={`grid h-8 w-8 place-items-center border border-current text-xl transition-transform duration-300 ${isActive ? "rotate-45 bg-[var(--color-orange)]" : ""}`}>+</span>
              </button>
            </h3>
            <div aria-labelledby={triggerId} className="grid" hidden={!isActive} id={panelId} role="region">
              <div>
                <p className="max-w-xl pb-6 pl-10 text-base leading-7 text-[var(--color-ink-muted)] sm:pl-16 sm:text-lg">{description}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
