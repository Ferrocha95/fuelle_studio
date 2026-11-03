"use client";

import type { PointerEvent } from "react";

import { Container } from "@/components/ui/container";

function setObjectTilt(event: PointerEvent<HTMLDivElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--v5-tilt-x", `${x * 10}deg`);
  event.currentTarget.style.setProperty("--v5-tilt-y", `${y * -10}deg`);
}

function resetObjectTilt(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--v5-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--v5-tilt-y", "0deg");
}

export function V5Hero() {
  return (
    <section className="hero-v5" id="inicio">
      <div aria-hidden="true" className="hero-v5__grid" />
      <div aria-hidden="true" className="hero-v5__atmosphere" />
      <Container className="hero-v5__container">
        <div className="hero-v5__masthead" data-hero-copy>
          <p>Estudio creativo independiente<br />México</p>
          <p className="hero-v5__status"><span /> V5 / exploración visual</p>
        </div>

        <div className="hero-v5__layout">
          <div className="hero-v5__copy">
            <p className="hero-v5__eyebrow" data-hero-copy>Dirección, materia y movimiento</p>
            <h1 aria-label="Ideas que toman impulso." className="hero-v5__title">
              <span className="hero-v5__line"><span data-hero-index>IDEAS</span></span>
              <span className="hero-v5__line hero-v5__line--offset"><span data-hero-index>QUE TOMAN</span></span>
              <span className="hero-v5__line"><span data-hero-index>IMPULSO.</span></span>
            </h1>
            <div className="hero-v5__bottom" data-hero-copy>
              <p>Estrategia, creatividad y tecnología para marcas que no nacieron para quedarse quietas.</p>
              <div className="flex flex-wrap gap-3">
                <a className="button button--signal" href="/servicios">Impulsemos tu marca <span aria-hidden="true">↗</span></a>
                <a className="button button--glass hero-v5__text-link" href="#capacidades">Ver demostraciones <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>

          <div aria-label="Escultura digital translúcida interactiva" className="hero-v5__sculpture" data-hero-v5-object onPointerLeave={resetObjectTilt} onPointerMove={setObjectTilt} role="img">
            <div className="hero-v5__sculpture-inner">
              <div className="hero-v5__halo" />
              <div className="hero-v5__orbit"><i /><b /></div>
              <div className="hero-v5__glass hero-v5__glass--primary"><i /><b /></div>
              <div className="hero-v5__glass hero-v5__glass--secondary" />
              <div className="hero-v5__signal" />
              <div className="hero-v5__axis hero-v5__axis--x" />
              <div className="hero-v5__axis hero-v5__axis--y" />
              <p className="hero-v5__object-label">Objeto / 01<br />Acrílico translúcido</p>
            </div>
          </div>
        </div>

        <div className="hero-v5__foot" data-hero-copy>
          <p>Prueba de concepto / Creative Digital Playground</p>
          <p>Desliza para entrar</p>
        </div>
      </Container>
    </section>
  );
}
