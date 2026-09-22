import React from 'react';
import { CheckCircle2, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const highlights = [
    'DVDs e Highlights',
    'Flyers esportivos',
    'Materiais para atletas profissionais',
    'Materiais para categorias de base',
    'Identidade visual esportiva',
  ];

  return (
    <section
      id="experiencia"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0e] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              06 — EXPERIÊNCIA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            EXPERIÊNCIA QUE VAI <span className="text-emerald-400">ALÉM DO CAMPO.</span>
          </h2>
        </div>

        {/* Big Metric Display & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Stat Card (5 columns) */}
          <div className="lg:col-span-5 relative rounded-3xl bg-zinc-950 border border-white/10 p-8 sm:p-10 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all" />

            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Trophy className="w-7 h-7 text-emerald-400" />
            </div>

            <span className="text-6xl sm:text-7xl font-black text-white tracking-tight leading-none mb-2 font-mono">
              +1.000
            </span>

            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 tracking-wide uppercase mb-3">
              ATLETAS ATENDIDOS
            </span>

            <p className="text-sm sm:text-base text-zinc-300 font-medium">
              Em todo o Brasil e fora dele.
            </p>
          </div>

          {/* Text & Checklist (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-white/10 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal mb-6">
                A Lance Certo já desenvolve materiais para atletas profissionais e atletas das categorias de base, criando vídeos e materiais visuais pensados para valorizar cada trajetória.
              </p>

              {/* Verified Checklist */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Phrase */}
            <div className="px-6 py-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-base sm:text-lg font-bold text-white tracking-tight">
                “Cada lance conta. Cada detalhe também.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
