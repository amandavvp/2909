import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 bg-neutral-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
