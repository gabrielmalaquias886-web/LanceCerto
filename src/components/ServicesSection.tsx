import React from 'react';
import { Video, Image, Award, ArrowUpRight } from 'lucide-react';
import { SERVICES, BRAND_LINKS } from '../data/content.ts';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'video':
        return <Video className="w-6 h-6 text-emerald-400" />;
      case 'image':
        return <Image className="w-6 h-6 text-emerald-400" />;
      case 'award':
      default:
        return <Award className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="servicos"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#060709]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              03 — NOSSOS SERVIÇOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            SEU MATERIAL.<br />
            <span className="text-emerald-400">NOSSO TRABALHO.</span>
          </h2>

          <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-400">
            Do lance à apresentação.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 hover:border-emerald-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {service.number}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  {service.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="pt-6 border-t border-white/5 mt-auto">
                <a
                  href={BRAND_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors"
                >
                  <span>Solicitar este serviço</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
