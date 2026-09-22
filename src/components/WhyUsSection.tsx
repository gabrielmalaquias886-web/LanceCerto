import React from 'react';
import { ShieldCheck, Sparkles, Users, Focus } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/content.ts';

export const WhyUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'focus':
      default:
        return <Focus className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="por-que-lance-certo"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#060709]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              07 — DIFERENCIAIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            POR QUE <span className="text-emerald-400">LANCE CERTO?</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Padrão Lance Certo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Quote */}
        <div className="mt-14 text-center">
          <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            “Seu futebol não precisa falar sozinho.”
          </p>
        </div>
      </div>
    </section>
  );
};
