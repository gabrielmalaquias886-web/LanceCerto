import React from 'react';
import { ArrowDown, MessageCircle, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_LINKS } from '../data/content.ts';

export const Hero: React.FC = () => {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060709]"
    >
      {/* Background Ambience: Subtle Video Editing Cues & Pitch Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Subtle Editing Software HUD & Timecodes */}
      <div className="absolute top-24 left-6 hidden md:flex items-center gap-3 text-[11px] font-mono text-zinc-500 tracking-wider select-none pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          REC [●]
        </span>
        <span className="text-zinc-400">00:04:18:12</span>
        <span className="text-zinc-600">|</span>
        <span>4K 60FPS</span>
        <span className="text-zinc-600">|</span>
        <span>AUDIO PRO 48kHz</span>
      </div>

      <div className="absolute top-24 right-6 hidden md:flex items-center gap-2 text-[11px] font-mono text-zinc-500 tracking-wider select-none pointer-events-none">
        <span className="text-zinc-500">PROJECT:</span>
        <span className="text-zinc-300">HIGHLIGHTS_EXPORT_MASTER.mp4</span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Brand Logo in Prominent Display */}
        <div className="mb-6 sm:mb-8 relative group">
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-xl group-hover:bg-emerald-500/20 transition-all duration-500" />
          <div className="relative p-3 rounded-2xl bg-zinc-950/70 border border-white/10 shadow-2xl backdrop-blur-sm">
            <img
              src={BRAND_LINKS.logo}
              alt="Logo oficial da Lance Certo — Edição Esportiva"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mx-auto"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Lances que Impactam.</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.05] mb-5 sm:mb-6">
          <span className="block text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            SEU LANCE.
          </span>
          <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            SUA HISTÓRIA.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Edição esportiva profissional para atletas de futebol.
        </p>

        {/* Discreet Social Proof */}
        <div className="mb-9 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>+1.000 ATLETAS ATENDIDOS</span>
          </div>
          <span className="hidden sm:inline text-zinc-600 font-mono text-xs">•</span>
          <span className="text-xs sm:text-sm text-zinc-400 font-medium">
            Em todo o Brasil e fora dele.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-center">
          <a
            href={BRAND_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-primary"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>QUERO MEU MATERIAL</span>
          </a>

          <a
            href="#portfolio"
            onClick={handleScrollToPortfolio}
            id="hero-cta-secondary"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-wider border border-white/10 hover:border-emerald-500/40 transition-all duration-200"
          >
            <Play className="w-4 h-4 fill-current text-emerald-400" />
            <span>VER PORTFÓLIO</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            Role para explorar
          </span>
          <ArrowDown className="w-4 h-4 text-emerald-400/80 animate-bounce" />
        </div>
      </div>

      {/* Subtle Bottom Timeline Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </section>
  );
};
