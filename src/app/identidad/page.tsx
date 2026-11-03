import { ApprovedLogoReference, BrandLogo } from "@/components/brand/brand-logo";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { logoAssets } from "@/lib/brand-assets";

export const metadata = {
  title: "Muestra de identidad",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "Carbón", value: "#0F0F0F", swatch: "bg-[var(--color-charcoal)]", text: "text-[var(--color-ivory)]" },
  { name: "Marfil", value: "#F7F3EA", swatch: "bg-[var(--color-ivory)]", text: "text-[var(--color-charcoal)]" },
  { name: "Taupe", value: "#C9B7A7", swatch: "bg-[var(--color-taupe)]", text: "text-[var(--color-charcoal)]" },
  { name: "Naranja impulso", value: "#FF6A00", swatch: "bg-[var(--color-orange)]", text: "text-[var(--color-charcoal)]" },
  { name: "Azul dinámico", value: "#2A5BFF", swatch: "bg-[var(--color-blue)]", text: "text-white" },
] as const;

export default function IdentityPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="flex-1 py-12 sm:py-20">
        <Container>
          <div className="mb-16 max-w-3xl border-t border-[var(--color-taupe)] pt-6 sm:mb-24">
            <p className="eyebrow">Página interna · revisión de identidad</p>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Sistema visual inicial.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-ink-muted)] sm:text-lg">
              Muestra de componentes y aplicaciones. El logotipo se conserva exactamente como fue entregado en su SVG oficial, con el lienzo blanco incluido en el archivo.
            </p>
          </div>

          <section aria-labelledby="logo-title" className="border-t border-[var(--color-taupe)] py-10 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)]">
              <div>
                <p className="eyebrow">01 · Logotipo principal</p>
                <h2 id="logo-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">Referencia aprobada, sin reinterpretación.</h2>
                <ApprovedLogoReference className="mt-8" />
              </div>
              <aside className="border-l border-[var(--color-taupe)] pl-0 lg:pl-8">
                <p className="eyebrow">Lectura técnica</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-ink-muted)]">
                  <li>Lockup horizontal con una proporción aproximada de 2.90:1.</li>
                  <li>“FUELLE” geométrico de alto contraste; “U” con corte interno distintivo.</li>
                  <li>“STUDIO” centrado debajo, con mayúsculas y espaciado amplio.</li>
                  <li>No se recrean contornos ni se usa una tipografía como sustituto.</li>
                </ul>
              </aside>
            </div>
          </section>

          <section aria-labelledby="applications-title" className="border-t border-[var(--color-taupe)] py-10 sm:py-14">
            <p className="eyebrow">02 · Aplicaciones del logotipo</p>
            <h2 id="applications-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">Componente preparado para fondos claros y oscuros.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="flex min-h-56 items-center justify-center border border-[var(--color-taupe)] bg-[var(--color-ivory)] p-8">
                <BrandLogo surface="light" />
              </div>
              <div className="flex min-h-56 items-center justify-center bg-[var(--color-charcoal)] p-8">
                <BrandLogo surface="dark" />
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-[var(--color-ink-muted)]">
              Las aplicaciones utilizan el SVG oficial sin añadir fondo ni alterar geometría, letras o color. El blanco visible pertenece al archivo entregado.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>— {logoAssets.application.onLight}</li>
              <li>— {logoAssets.application.onDark}</li>
            </ul>
          </section>

          <section aria-labelledby="tokens-title" className="border-t border-[var(--color-taupe)] py-10 sm:py-14">
            <p className="eyebrow">03 · Tokens oficiales</p>
            <h2 id="tokens-title" className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">Color, tipografía y elementos base.</h2>
            <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-taupe)] bg-[var(--color-taupe)] sm:grid-cols-5">
              {colorTokens.map((color) => (
                <div className={`min-h-40 p-5 ${color.swatch} ${color.text}`} key={color.value}>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em]">{color.name}</p>
                  <p className="mt-12 font-display text-lg font-semibold">{color.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="border border-[var(--color-taupe)] p-6 sm:p-8">
                <p className="eyebrow">Sora · títulos</p>
                <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em]">Impulso con intención.</p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-ink-muted)]">Sora 400 / 600 · alternativa: Inter, sans-serif del sistema.</p>
              </article>
              <article className="border border-[var(--color-taupe)] p-6 sm:p-8">
                <p className="eyebrow">Inter · interfaz y texto</p>
                <p className="mt-5 text-lg leading-8">Dirección estratégica para marcas que quieren tomar impulso y avanzar con claridad.</p>
                <p className="mt-4 text-sm leading-6 text-[var(--color-ink-muted)]">Inter 400 / 500 / 600 · alternativa: Helvetica Neue, Arial, sans-serif.</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="button button--signal">Acción principal</button>
              <button className="button button--outline">Acción secundaria</button>
              <span className="inline-flex items-center bg-[var(--color-blue)] px-4 py-2 text-xs font-semibold text-white">Acento ocasional</span>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
