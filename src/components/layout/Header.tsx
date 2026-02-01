"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Sun,
  Moon,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { FontSize, ContrastMode } from "@/types";

const navItems = [
  { name: "Serviços", href: "/", highlight: true },
  { name: "Lei de Acesso à Informação", href: "/lai" },
  { name: "Ouvidoria", href: "/ouvidoria" },
  { name: "Central Anticorrupção", href: "/anticorrupcao" },
  { name: "Consulta Protocolo", href: "/consulta" },
  { name: "Notícias", href: "/noticias" },
  { name: "Relatórios", href: "/relatorios" },
  { name: "Perguntas Frequentes", href: "/faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [contrastMode, setContrastMode] = useState<ContrastMode>("normal");

  // Aplicar configurações de acessibilidade
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("font-size-normal", "font-size-large", "font-size-larger");
    root.classList.add(`font-size-${fontSize}`);
    
    if (contrastMode === "high") {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
  }, [fontSize, contrastMode]);

  const increaseFontSize = () => {
    if (fontSize === "normal") setFontSize("large");
    else if (fontSize === "large") setFontSize("larger");
  };

  const decreaseFontSize = () => {
    if (fontSize === "larger") setFontSize("large");
    else if (fontSize === "large") setFontSize("normal");
  };

  const toggleContrast = () => {
    setContrastMode(contrastMode === "normal" ? "high" : "normal");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior com acessibilidade */}
      <div className="bg-primary-dark">
        <div className="container-main">
          <div className="flex items-center justify-between h-12">
            {/* Logo e título */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-white tracking-tight">2909</span>
                <div className="ml-2 text-[10px] text-white/80 leading-tight">
                  <div>CENTRAL DE</div>
                  <div>ATENDIMENTO</div>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/20 mx-3" />
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">BR</span>
                </div>
                <div className="text-[10px] text-white/80 leading-tight">
                  <div className="font-semibold text-white">PREFEITURA</div>
                  <div>BELFORD ROXO</div>
                </div>
              </div>
            </Link>

            {/* Controles de acessibilidade e busca */}
            <div className="flex items-center gap-2">
              {/* Acessibilidade */}
              <div className="hidden md:flex items-center gap-1 mr-2">
                <button
                  onClick={increaseFontSize}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                  title="Aumentar fonte"
                  aria-label="Aumentar tamanho da fonte"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={decreaseFontSize}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                  title="Diminuir fonte"
                  aria-label="Diminuir tamanho da fonte"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  onClick={toggleContrast}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                  title="Alto contraste"
                  aria-label="Alternar modo de alto contraste"
                >
                  {contrastMode === "normal" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>

              {/* Busca desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-64 px-4 py-1.5 pr-10 text-sm rounded-md bg-white text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>

              {/* Login/Cadastro */}
              <Link
                href="/auth"
                className="hidden md:flex items-center gap-1 px-3 py-1.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                Acessar | Cadastrar
              </Link>

              {/* Busca mobile */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white"
                aria-label="Abrir busca"
              >
                <Search size={20} />
              </button>

              {/* Menu mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white"
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="bg-primary">
        <div className="container-main">
          <ul className="hidden md:flex items-center gap-1 h-11">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    item.highlight
                      ? "bg-accent-yellow text-primary-dark hover:bg-accent-yellow/90"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="container-main py-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${
                    item.highlight
                      ? "bg-accent-yellow text-primary-dark"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 mt-4">
                <Link
                  href="/auth"
                  className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acessar | Cadastrar
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Busca mobile expandida */}
      {isSearchOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 p-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar serviços..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm rounded-md bg-white text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
