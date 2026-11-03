import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-taupe)] py-6">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo surface="light" />
        <p className="text-xs text-[var(--color-ink-muted)]">© Fuelle Studio. México.</p>
      </Container>
    </footer>
  );
}
