import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { FLYERS } from '../data/content.ts';
import { FlyerItem } from '../types.ts';
import { FlyerModal } from './FlyerModal.tsx';

export const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFlyer, setSelectedFlyer] = useState<FlyerItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FLYERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FLYERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0e] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              04 — PORTFÓLIO DE FLYERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            PORTFÓLIO
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal">
            Identidade visual também faz parte do jogo.
          </p>
        </div>

        {/* Desktop Grid Layout (4 Flyers) */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {FLYERS.map((flyer) => (
            <div
              key={flyer.id}
              onClick={() => setSelectedFlyer(flyer)}
              className="group cursor-pointer rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-emerald-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
                <img
                  src={flyer.imageUrl}
                  alt={flyer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                  <div className="p-3 rounded-full bg-emerald-500 text-black shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    AMPLIAR DETALHES
                  </span>
                </div>
              </div>

              {/* Strict Flyer Label - ONLY 'FLYER 01', 'FLYER 02', etc. */}
              <div className="p-4 bg-zinc-950 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-sm font-extrabold tracking-widest text-white font-mono uppercase">
                    {flyer.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Arte Esportiva</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Internal Carousel */}
        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex items-center justify-center"
          >
            {FLYERS.map((flyer, index) => {
              if (index !== currentIndex) return null;
              return (
                <div
                  key={flyer.id}
                  onClick={() => setSelectedFlyer(flyer)}
                  className="w-full max-w-sm cursor-pointer rounded-2xl bg-zinc-950 border border-white/10 hover:border-emerald-500/50 overflow-hidden shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95"
                >
                  <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
                    <img
                      src={flyer.imageUrl}
                      alt={flyer.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs text-zinc-300">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Toque para ampliar</span>
                    </div>
                  </div>

                  <div className="p-4 bg-zinc-950 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-base font-extrabold tracking-widest text-white font-mono uppercase">
                        {flyer.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {index + 1} de {FLYERS.length}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Internal Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-4">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-colors"
              aria-label="Flyer anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {FLYERS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-200 rounded-full ${
                    idx === currentIndex
                      ? 'w-6 h-2 bg-emerald-400'
                      : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Ir para Flyer ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-colors"
              aria-label="Próximo flyer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Small Caption */}
        <div className="text-center mt-10">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Produzido com padrão profissional para divulgação de jogos, resultados e presença de atletas.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <FlyerModal flyer={selectedFlyer} onClose={() => setSelectedFlyer(null)} />
    </section>
  );
};
