"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgColor: string;
  image?: string;
}

const slides: BannerSlide[] = [
  {
    id: "1",
    title: "Portal de Atendimento 2909",
    subtitle: "Central de Serviços ao Cidadão",
    description: "Solicite serviços, faça denúncias e acompanhe suas solicitações de forma rápida e fácil.",
    ctaText: "Fazer uma solicitação",
    ctaLink: "/solicitacao",
    bgColor: "from-primary to-secondary",
  },
  {
    id: "2",
    title: "Prefeitura na Sua Casa",
    subtitle: "Serviços Online 24h",
    description: "Agora você pode resolver diversas demandas sem sair de casa, pelo computador ou celular.",
    ctaText: "Ver serviços",
    ctaLink: "/",
    bgColor: "from-secondary to-primary",
  },
  {
    id: "3",
    title: "IPTU 2026",
    subtitle: "Pague em cota única e tenha desconto",
    description: "Aproveite os descontos para pagamento antecipado do IPTU.",
    ctaText: "Acessar IPTU",
    ctaLink: "https://e-gov.prefeituradebelfordroxo.rj.gov.br/",
    bgColor: "from-accent-green to-primary",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Slide atual */}
      <div
        className={`relative bg-gradient-to-r ${slide.bgColor} text-white p-8 md:p-12 min-h-[280px] md:min-h-[320px] flex items-center transition-all duration-500`}
      >
        <div className="max-w-2xl">
          {slide.subtitle && (
            <p className="text-sm md:text-base font-medium text-white/80 mb-2 animate-fade-in">
              {slide.subtitle}
            </p>
          )}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-slide-up">
            {slide.title}
          </h2>
          {slide.description && (
            <p className="text-base md:text-lg text-white/90 mb-6 animate-slide-up">
              {slide.description}
            </p>
          )}
          {slide.ctaText && slide.ctaLink && (
            <a
              href={slide.ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors animate-slide-up"
            >
              {slide.ctaText}
            </a>
          )}
        </div>

        {/* Decoração */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L200,0 L200,200 L100,200 Q50,150 0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
