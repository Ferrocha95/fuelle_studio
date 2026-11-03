import Image from "next/image";

import logoReference from "../../../referencias/FUELLE STUDIO - LOGOTIPO PRINCIPAL OFICIAL - original JPEG.jpeg";
import type { LogoSurface } from "@/lib/brand-assets";

type BrandLogoProps = {
  surface: LogoSurface;
  className?: string;
};

/** Official SVG application asset. It is always rendered without altering its artwork. */
export function BrandLogo({ surface, className = "" }: BrandLogoProps) {
  return (
    <div className={`logo-lockup logo-lockup--on-${surface} ${className}`}>
      <Image
        alt="Fuelle Studio"
        className="logo-lockup__image"
        height={1080}
        preload
        sizes="(max-width: 640px) 10rem, 12rem"
        src="/assets/fuelle-studio-logo.svg"
        unoptimized
        width={1920}
      />
    </div>
  );
}

/** Shows the supplied approved JPEG exactly as received, only for review. */
export function ApprovedLogoReference({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden bg-black">
        <Image
          alt="Logotipo principal oficial Fuelle Studio, referencia JPEG"
          className="h-auto w-full"
          placeholder="empty"
          priority
          src={logoReference}
        />
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-[var(--color-ink-muted)]">
        Archivo original aprobado — JPEG RGB, 1600 × 552 px. Referencia histórica; para aplicaciones se utiliza el SVG oficial transparente recibido posteriormente.
      </figcaption>
    </figure>
  );
}
