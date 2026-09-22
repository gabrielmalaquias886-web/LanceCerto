import React from 'react';
import { Youtube, ExternalLink, Play, Film } from 'lucide-react';
import { BRAND_LINKS } from '../data/content.ts';

export const YouTubeSection: React.FC = () => {
  return (
    <section
      id="youtube"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0e] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute right-10 bottom-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
            08 — CANAL OFICIAL
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          VEJA NOSSOS <span className="text-emerald-400">TRABALHOS.</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Confira outros materiais produzidos pela Lance Certo.
        </p>

        {/* Video Reel Highlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/90 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6">
            <Youtube className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
            Canal Lance Certo no YouTube
          </h3>

          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8 font-normal">
            Acompanhe nossa galeria completa de vídeos, cortes técnicos e DVDs produzidos para atletas em diferentes momentos da carreira.
          </p>

          <a
            href={BRAND_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-ver-todos-dvds"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-red-600/20 hover:shadow-red-600/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>VER TODOS OS DVDs</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
