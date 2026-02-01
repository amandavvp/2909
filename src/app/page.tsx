import Sidebar from "@/components/layout/Sidebar";
import Banner from "@/components/ui/Banner";
import { Download, Clock, Smartphone, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-main py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar com categorias */}
        <Sidebar />

        {/* Conteúdo principal */}
        <div className="flex-1 space-y-6">
          {/* Banner/Carrossel */}
          <Banner />

          {/* CTA - Cartilha do Cidadão - estilo 1746 */}
          <div 
            className="relative overflow-hidden rounded-xl"
            style={{ background: 'linear-gradient(to bottom, #dbeafe, #bfdbfe)' }}
          >
            {/* Skyline decorativo */}
            <div className="absolute inset-0 flex items-end justify-center opacity-20">
              <svg viewBox="0 0 1200 100" className="w-full" preserveAspectRatio="xMidYMax slice">
                <path
                  d="M0,100 L0,65 L40,65 L40,40 L60,40 L60,55 L100,55 L100,30 L120,30 L120,65 L160,65 L160,50 L200,50 L200,65 L240,65 L240,35 L280,35 L280,65 L320,65 L320,20 L360,20 L360,65 L400,65 L400,45 L440,45 L440,65 L480,65 L480,15 L520,15 L520,65 L560,65 L560,50 L600,50 L600,65 L640,65 L640,35 L680,35 L680,65 L720,65 L720,55 L760,55 L760,65 L800,65 L800,40 L840,40 L840,65 L880,65 L880,28 L920,28 L920,65 L960,65 L960,45 L1000,45 L1000,65 L1040,65 L1040,58 L1080,58 L1080,65 L1120,65 L1120,50 L1160,50 L1160,65 L1200,65 L1200,100 Z"
                  fill="#1748ae"
                />
              </svg>
            </div>

            <div className="relative px-8 py-10 text-center">
              <Link
                href="/cartilha-cidadao.pdf"
                className="cartilha-btn inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-lg transition-colors shadow-lg"
              >
                <Download size={22} />
                Baixe aqui a Cartilha ao Cidadão
              </Link>
            </div>
          </div>

          {/* Cards de informações rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickInfoCard
              title="Atendimento 24h"
              description="O portal está disponível 24 horas por dia, 7 dias por semana."
              icon={<Clock size={32} className="text-primary" />}
            />
            <QuickInfoCard
              title="Acompanhe Online"
              description="Consulte o status de suas solicitações a qualquer momento."
              icon={<Smartphone size={32} className="text-primary" />}
            />
            <QuickInfoCard
              title="Ligue 2909"
              description="Atendimento telefônico de segunda a sexta, das 8h às 17h."
              icon={<Phone size={32} className="text-primary" />}
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
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
