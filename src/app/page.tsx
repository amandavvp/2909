import Sidebar from "@/components/layout/Sidebar";
import Banner from "@/components/ui/Banner";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="container-main py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar com categorias */}
        <Sidebar />

        {/* Conteúdo principal */}
        <div className="flex-1 space-y-8">
          {/* Banner/Carrossel */}
          <Banner />

          {/* CTA - Cartilha do Cidadão */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-200">
            {/* Skyline decorativo */}
            <div className="absolute inset-0 opacity-10">
              <svg
                viewBox="0 0 1200 200"
                className="w-full h-full"
                preserveAspectRatio="xMidYMax slice"
              >
                <path
                  d="M0,200 L0,150 L50,150 L50,100 L80,100 L80,130 L120,130 L120,80 L160,80 L160,150 L200,150 L200,120 L240,120 L240,150 L280,150 L280,90 L320,90 L320,150 L360,150 L360,70 L400,70 L400,150 L440,150 L440,110 L480,110 L480,150 L520,150 L520,60 L560,60 L560,150 L600,150 L600,100 L640,100 L640,150 L680,150 L680,80 L720,80 L720,150 L760,150 L760,130 L800,130 L800,150 L840,150 L840,90 L880,90 L880,150 L920,150 L920,70 L960,70 L960,150 L1000,150 L1000,110 L1040,110 L1040,150 L1080,150 L1080,140 L1120,140 L1120,150 L1160,150 L1160,120 L1200,120 L1200,200 Z"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>

            <div className="relative px-8 py-10 text-center">
              <a
                href="/cartilha-cidadao.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Download size={20} />
                Baixe aqui a Cartilha ao Cidadão
              </a>
            </div>
          </div>

          {/* Informações rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickInfoCard
              title="Atendimento 24h"
              description="O portal está disponível 24 horas por dia, 7 dias por semana."
              icon="🕐"
            />
            <QuickInfoCard
              title="Acompanhe Online"
              description="Consulte o status de suas solicitações a qualquer momento."
              icon="📱"
            />
            <QuickInfoCard
              title="Ligue 2909"
              description="Atendimento telefônico de segunda a sexta, das 8h às 18h."
              icon="📞"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickInfoCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-card border border-neutral-100 hover:shadow-soft transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-neutral-800 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}
