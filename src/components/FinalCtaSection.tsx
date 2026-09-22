import React from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Sparkles, Youtube } from 'lucide-react';
import { BRAND_LINKS, NAV_ITEMS } from '../data/content.ts';

export const FinalCtaSection: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="relative bg-black pt-20 sm:pt-28 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Closing Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-20 sm:mb-24">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <img
            src={BRAND_LINKS.logo}
            alt="Lance Certo — Edição Esportiva"
            className="h-14 sm:h-18 w-auto object-contain mx-auto"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Você merece ser visto.</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05] mb-5">
          SEU LANCE <span className="text-emerald-400">MERECE SER VISTO.</span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforme seus melhores momentos em um material que representa o seu futebol.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>FALE COM A LANCE CERTO</span>
          </a>

          <a
            href={BRAND_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-instagram"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-wider border border-white/10 hover:border-emerald-500/40 transition-all duration-200"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>VER INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Footer Navigation & Brand Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand Tagline */}
          <div>
            <span className="text-base font-extrabold tracking-wider text-white uppercase block font-heading">
              LANCE CERTO — EDIÇÃO ESPORTIVA
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-1 block">
              “Lances que Impactam.”
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-zinc-400">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* External Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={BRAND_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Lance Certo"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={BRAND_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Lance Certo"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-pink-400 hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BRAND_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Lance Certo"
              className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-3">
          <p>© Lance Certo — Edição Esportiva</p>
          <a
            href="#inicio"
            onClick={handleScrollToTop}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            <span>Voltar ao topo</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
