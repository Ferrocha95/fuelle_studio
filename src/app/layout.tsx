import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Fuelle Studio", template: "%s — Fuelle Studio" },
  description: "Fuelle Studio es un estudio creativo independiente de México.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
