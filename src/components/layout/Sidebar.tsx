"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceCategories } from "@/data/services";
import { 
  PawPrint, 
  Accessibility,
  Heart,
  Wrench,
  ShieldAlert,
  GraduationCap,
  Lightbulb,
  Trash2,
  Stethoscope,
  Car,
  MessageSquare,
  Shield,
  Menu,
  Star,
  Building2,
  Scale,
  Users,
  Briefcase
} from "lucide-react";

// Mapeamento de ícones
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PawPrint,
  Accessibility,
  Heart,
  Wrench,
  ShieldAlert,
  GraduationCap,
  Lightbulb,
  Trash2,
  Stethoscope,
  Car,
  MessageSquare,
  Shield,
  Building2,
  Scale,
  Users,
  Briefcase,
};

interface SidebarProps {
  activeCategory?: string;
}

export default function Sidebar({ activeCategory }: SidebarProps) {
  const [showAll, setShowAll] = useState(true);
  const pathname = usePathname();

  const mostRequested = [
    { name: "Buraco na Rua", slug: "conservacao/buraco-rua", icon: "Wrench" },
    { name: "Iluminação Pública", slug: "iluminacao-publica/iluminacao-publica", icon: "Lightbulb" },
    { name: "Coleta de Lixo", slug: "limpeza-urbana/coleta-lixo", icon: "Trash2" },
    { name: "Poda de Árvore", slug: "conservacao/poda-arvore", icon: "Wrench" },
    { name: "Foco de Dengue", slug: "saude/foco-dengue", icon: "Stethoscope" },
    { name: "Maus Tratos a Animais", slug: "animais/maus-tratos", icon: "PawPrint" },
  ];

  return (
    <aside className="w-full lg:w-[340px] flex-shrink-0">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Tabs - estilo 1746 */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setShowAll(true)}
            className={`flex-1 px-4 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              showAll
                ? "bg-gray-100 border-b-2"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            style={showAll ? { color: '#1748ae', borderBottomColor: '#1748ae' } : {}}
          >
            <Menu size={18} />
            <span>Todos os serviços</span>
          </button>
          <button
            onClick={() => setShowAll(false)}
            className={`flex-1 px-4 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              !showAll
                ? "bg-gray-100 border-b-2"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            style={!showAll ? { color: '#1748ae', borderBottomColor: '#1748ae' } : {}}
          >
            <Star size={18} />
            <span>Mais solicitados</span>
          </button>
        </div>

        {/* Lista de categorias */}
        <nav className="p-3 max-h-[600px] overflow-y-auto scrollbar-thin">
          {showAll ? (
            <ul className="space-y-1">
              {serviceCategories.map((category) => {
                const Icon = iconMap[category.icon] || Menu;
                const isActive = pathname === `/servicos/${category.slug}` || activeCategory === category.slug;
                
                return (
                  <li key={category.id}>
                    <Link
                      href={`/servicos/${category.slug}`}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm transition-all ${
                        isActive
                          ? "font-semibold"
                          : "hover:bg-gray-50"
                      }`}
                      style={{ 
                        color: '#1748ae',
                        backgroundColor: isActive ? 'rgba(23, 72, 174, 0.08)' : undefined
                      }}
                    >
                      <Icon size={22} className="flex-shrink-0 opacity-80" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            // Serviços mais solicitados
            <ul className="space-y-1">
              {mostRequested.map((service) => {
                const Icon = iconMap[service.icon] || Menu;
                
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm hover:bg-gray-50 transition-all"
                      style={{ color: '#1748ae' }}
                    >
                      <Icon size={22} className="flex-shrink-0 opacity-80" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    </aside>
  );
}
