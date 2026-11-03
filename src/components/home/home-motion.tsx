"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";

type HomeMotionProps = { children: ReactNode };

/** Scopes the Home's editorial motion to its own DOM subtree. */
export function HomeMotion({ children }: HomeMotionProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .fromTo("[data-hero-index]", { yPercent: 120 }, { yPercent: 0, duration: 1.15, stagger: 0.1, delay: 0.18 })
        .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "<0.25")
        .fromTo("[data-hero-v5-object]", { autoAlpha: 0, rotate: -8, scale: 0.88 }, { autoAlpha: 1, rotate: 0, scale: 1, duration: 1.2 }, "<0.1");

      gsap.to("[data-hero-v5-object]", { scrollTrigger: { scrub: 0.7, start: "top top", end: "bottom top" }, yPercent: 16, rotate: 8 });
      gsap.fromTo("[data-manifesto-sculpture]", { autoAlpha: 0, scale: 0.86, y: 36 }, { autoAlpha: 1, duration: 1.1, ease: "power3.out", scale: 1, scrollTrigger: { start: "top 74%", toggleActions: "play none none reverse", trigger: "[data-manifesto-sculpture]" }, y: 0 });
      gsap.fromTo("[data-manifesto-line]", { autoAlpha: 0, yPercent: 115 }, { autoAlpha: 1, duration: 1, ease: "power4.out", stagger: 0.1, scrollTrigger: { start: "top 76%", toggleActions: "play none none reverse", trigger: "[data-manifesto-line]" }, yPercent: 0 });
      gsap.to("[data-approach-line]", { scrollTrigger: { scrub: 0.8, start: "top bottom", end: "bottom 50%" }, scaleY: 1, transformOrigin: "center top" });
      gsap.fromTo("[data-capabilities-v5]", { yPercent: 7 }, { scrollTrigger: { scrub: 0.8, start: "top 82%", end: "bottom 60%" }, yPercent: 0 });
      gsap.fromTo("[data-project-grid]", { rotate: -2, scale: 0.94 }, { scrollTrigger: { scrub: 0.8, start: "top 82%", end: "bottom 58%" }, rotate: 0, scale: 1 });
    }, scopeRef);

    return () => context.revert();
  }, []);

  return <div className="contents" ref={scopeRef}>{children}</div>;
}
