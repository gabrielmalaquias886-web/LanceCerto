import React from 'react';
import { Upload, Scissors, Film, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content.ts';

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'upload':
        return <Upload className="w-6 h-6 text-emerald-400" />;
      case 'scissors':
        return <Scissors className="w-6 h-6 text-emerald-400" />;
      case 'film':
        return <Film className="w-6 h-6 text-emerald-400" />;
      case 'check-circle-2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="como-funciona"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#060709]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              09 — PROCESSO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            DO SEU LANCE AO <span className="text-emerald-400">MATERIAL FINAL.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal">
            Etapas claras e objetivas pensadas para facilitar a rotina do atleta.
          </p>
        </div>

        {/* 4 Steps with connecting timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-emerald-500/10 via-emerald-500/60 to-emerald-500/10 -translate-y-12 z-0" />

          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/50 to-emerald-500/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                id={`process-step-${idx + 1}`}
                className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Marker Badge with Icon */}
                <div className="relative shrink-0 mr-5 lg:mr-0 lg:mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 border-2 border-emerald-500/40 group-hover:border-emerald-400 flex items-center justify-center shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-black font-mono font-extrabold text-xs flex items-center justify-center shadow">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
