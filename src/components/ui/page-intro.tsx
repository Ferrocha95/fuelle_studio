import { Container } from "@/components/ui/container";

type PageIntroProps = { eyebrow: string; title: string; description: string };

/** Shared, deliberately minimal foundation for the secondary routes. */
export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <main className="flex flex-1 py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl border-t border-[var(--color-taupe)] pt-6 sm:pt-8">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-ink-muted)] sm:text-lg">{description}</p>
        </div>
      </Container>
    </main>
  );
}
