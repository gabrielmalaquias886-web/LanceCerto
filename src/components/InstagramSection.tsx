import React from 'react';
import { Instagram, ArrowUpRight, Flame } from 'lucide-react';
import { BRAND_LINKS } from '../data/content.ts';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#060709]"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
            11 — REDE SOCIAL
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          ACOMPANHE A <span className="text-emerald-400">LANCE CERTO.</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Veja nossos trabalhos, novidades e materiais esportivos.
        </p>

        {/* Instagram Profile Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 mb-6 shadow-xl">
            <div className="w-full h-full rounded-2xl bg-zinc-950 flex items-center justify-center text-rose-400">
              <Instagram className="w-8 h-8" />
            </div>
          </div>

          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
            @highlights_esportivo
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            Lance Certo no Instagram
          </h3>

          <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8 font-normal">
            Acompanhe bastidores, lançamentos de novos materiais de atletas e atualizações diárias.
          </p>

          <a
            href={BRAND_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-ver-instagram"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-pink-600/20 hover:shadow-pink-600/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Instagram className="w-5 h-5" />
            <span>VER INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
