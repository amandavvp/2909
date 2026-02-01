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
  Star
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
};

interface SidebarProps {
  activeCategory?: string;
}

export default function Sidebar({ activeCategory }: SidebarProps) {
  const [showAll, setShowAll] = useState(true);
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-card border border-neutral-100 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-neutral-200">
          <button
            onClick={() => setShowAll(true)}
            className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              showAll
                ? "bg-neutral-100 text-primary"
                : "text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            <Menu size={18} />
            Todos os serviços
          </button>
          <button
            onClick={() => setShowAll(false)}
            className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              !showAll
                ? "bg-neutral-100 text-primary"
                : "text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            <Star size={18} />
            Mais solicitados
          </button>
        </div>

        {/* Lista de categorias */}
        <nav className="p-2 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin">
          {showAll ? (
            <ul className="space-y-0.5">
              {serviceCategories.map((category) => {
                const Icon = iconMap[category.icon] || Menu;
                const isActive = pathname === `/servicos/${category.slug}` || activeCategory === category.slug;
                
                return (
                  <li key={category.id}>
                    <Link
                      href={`/servicos/${category.slug}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-primary hover:bg-primary/5"
                      }`}
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span className="truncate">{category.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            // Serviços mais solicitados
            <ul className="space-y-0.5">
              {[
                { name: "Buraco na Rua", slug: "conservacao/buraco-rua", icon: Wrench },
                { name: "Lâmpada Queimada", slug: "iluminacao-publica/lampada-queimada", icon: Lightbulb },
                { name: "Coleta de Lixo", slug: "limpeza-urbana/coleta-lixo", icon: Trash2 },
                { name: "Poda de Árvore", slug: "conservacao/poda-arvore", icon: Wrench },
                { name: "Foco de Dengue", slug: "saude/foco-dengue", icon: Stethoscope },
                { name: "Maus Tratos a Animais", slug: "animais/maus-tratos", icon: PawPrint },
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-primary hover:bg-primary/5 transition-colors"
                  >
                    <service.icon size={20} className="flex-shrink-0" />
                    <span className="truncate">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </aside>
  );
}
