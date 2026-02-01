import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccessibilityBar from "@/components/ui/AccessibilityBar";

export const metadata: Metadata = {
  title: {
    default: "Portal 2909 - Prefeitura de Belford Roxo",
    template: "%s | Portal 2909",
  },
  description:
    "Central de atendimento ao cidadão da Prefeitura de Belford Roxo. Solicite serviços, faça denúncias e acompanhe suas solicitações.",
  keywords: [
    "Belford Roxo",
    "prefeitura",
    "serviços públicos",
    "atendimento ao cidadão",
    "2909",
    "denúncias",
    "solicitações",
  ],
  authors: [{ name: "Prefeitura de Belford Roxo" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://2909.belfordroxo.rj.gov.br",
    siteName: "Portal 2909",
    title: "Portal 2909 - Prefeitura de Belford Roxo",
    description:
      "Central de atendimento ao cidadão da Prefeitura de Belford Roxo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body 
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        <Header />
        <main className="flex-1" style={{ backgroundColor: '#cce5f7' }}>
          {children}
        </main>
        <Footer />
        <AccessibilityBar />
      </body>
    </html>
  );
}
