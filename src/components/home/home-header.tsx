"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";

const homeLinks = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#capacidades", label: "Ideas en acción" },
  { href: "/servicios", label: "Servicios" },
  { href: "/el-estudio", label: "El estudio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const;

const focusableSelector = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOffset, setMenuOffset] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateOffset = () => setMenuOffset(header.getBoundingClientRect().height);
    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const menu = menuRef.current;
    const menuButton = menuButtonRef.current;
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const background = [main, footer].filter((element): element is HTMLElement => element instanceof HTMLElement);

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    background.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    // Delay one paint so pointer activation cannot reclaim focus from the menu.
    const focusTimer = window.setTimeout(() => menu?.querySelector<HTMLElement>(focusableSelector)?.focus(), 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menu) return;

      const focusableItems = [...menu.querySelectorAll<HTMLElement>(focusableSelector)];
      if (focusableItems.length === 0) return;
      const firstItem = focusableItems[0];
      const lastItem = focusableItems.at(-1);
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem?.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      background.forEach((element) => {
        element.inert = false;
        element.removeAttribute("aria-hidden");
      });
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-30 border-b border-[color:rgb(201_183_167/0.65)]" ref={headerRef}>
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a aria-label="Volver al inicio" href="#inicio"><BrandLogo surface="light" /></a>
        <div className="hidden items-center gap-4 lg:gap-6 md:flex">{homeLinks.map((item) => <a className="text-xs font-medium transition-colors hover:text-[var(--color-orange)] lg:text-sm" href={item.href} key={item.href}>{item.label}</a>)}</div>
        <button aria-controls="home-menu" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} className="relative grid h-10 w-10 place-items-center border border-[var(--color-charcoal)] md:hidden" onClick={() => setIsMenuOpen((open) => !open)} ref={menuButtonRef} type="button">
          <span className="sr-only">Menú</span><span aria-hidden="true" className="relative block h-3 w-4"><span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} /></span>
        </button>
      </nav>
      <div aria-hidden={!isMenuOpen} aria-label="Navegación móvil" className={`home-menu ${isMenuOpen ? "home-menu--open" : ""}`} id="home-menu" inert={!isMenuOpen} ref={menuRef} role="dialog" style={{ paddingTop: menuOffset }}>
        <div className="flex h-full flex-col justify-between p-6">
          <div className="flex flex-col border-t border-white/25">{homeLinks.map((item, index) => <a className="home-menu__link border-b border-white/25 py-5 font-display text-4xl font-semibold tracking-[-0.06em]" href={item.href} key={item.href} onClick={closeMenu} style={{ transitionDelay: `${80 + index * 50}ms` }}>{item.label}</a>)}</div>
          <p className="max-w-52 text-sm leading-6 text-[var(--color-taupe)]">Ideas que toman impulso. México.</p>
        </div>
      </div>
    </header>
  );
}
