"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand/brand-logo";
import { navigationItems } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-taupe)]">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
        <Link aria-label="Inicio de Fuelle Studio" href="/">
          <BrandLogo surface="light" />
        </Link>
        <ul className="hidden items-center gap-x-4 gap-y-2 text-xs font-medium md:flex sm:gap-x-6">
          {navigationItems.map((item) => {
            const isCurrentPage = pathname === item.href;

            return (
            <li key={item.href}>
              <Link aria-current={isCurrentPage ? "page" : undefined} className={`transition-colors hover:text-[var(--color-orange)] ${isCurrentPage ? "text-[var(--color-orange)]" : ""}`} href={item.href}>{item.label}</Link>
            </li>
            );
          })}
        </ul>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-[var(--color-charcoal)] px-3 py-2 text-xs font-medium marker:content-none">Menú</summary>
          <ul className="absolute right-0 top-[calc(100%+0.5rem)] z-20 w-48 border border-[var(--color-charcoal)] bg-[var(--color-ivory)] p-2 shadow-[0.6rem_0.7rem_0_var(--color-charcoal)]">
            {navigationItems.map((item) => {
              const isCurrentPage = pathname === item.href;

              return (
              <li key={item.href}>
                <Link aria-current={isCurrentPage ? "page" : undefined} className={`block px-3 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-orange)] ${isCurrentPage ? "bg-[var(--color-orange)]" : ""}`} href={item.href}>{item.label}</Link>
              </li>
              );
            })}
          </ul>
        </details>
      </nav>
    </header>
  );
}
