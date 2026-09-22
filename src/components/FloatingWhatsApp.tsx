import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_LINKS } from '../data/content.ts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contato rápido via WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={BRAND_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
      >
        {/* Animated radar ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-black/20" />

        {/* Tooltip on desktop */}
        <span className="hidden md:block absolute right-16 px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/10 text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Falar com a Lance Certo
        </span>
      </a>
    </aside>
  );
};
