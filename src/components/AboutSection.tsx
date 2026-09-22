import React from 'react';
import { Film, Sparkles, Target, Sliders } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0e] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Graphic elements: Subtle analysis radar & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
            02 — SOBRE A LANCE CERTO
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-8">
          MUITO MAIS QUE <span className="text-emerald-400">UMA EDIÇÃO.</span>
        </h2>

        {/* Main Text Card */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-zinc-950/80 border border-white/10 shadow-2xl backdrop-blur-sm">
          <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
              A Lance Certo transforma seus melhores momentos em materiais profissionais que valorizam sua trajetória dentro do futebol.
            </p>

            <p className="text-zinc-400">
              Do vídeo ao visual, cada material é pensado para apresentar o atleta da melhor forma.
            </p>

            {/* Impact Quote */}
            <div className="pt-4 border-t border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  “Seu futebol merece ser apresentado à altura.”
                </p>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase mt-1 block">
                  Lance Certo — Posicionamento de Atletas
                </span>
              </div>
            </div>
          </div>

          {/* Technical UI Badges mimicking editing software */}
          <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <Film className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Cortes Táticos</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <Sliders className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Tratamento Visual</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5">
              <Target className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Foco no Atleta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
