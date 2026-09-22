import React from 'react';
import { X, ZoomIn, MessageCircle } from 'lucide-react';
import { FlyerItem } from '../types.ts';
import { BRAND_LINKS } from '../data/content.ts';

interface FlyerModalProps {
  flyer: FlyerItem | null;
  onClose: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ flyer, onClose }) => {
  if (!flyer) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização de ${flyer.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-bold tracking-wider text-white font-mono uppercase">
              {flyer.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="w-full relative rounded-xl overflow-hidden bg-black/50 max-h-[75vh] flex items-center justify-center">
          <img
            src={flyer.imageUrl}
            alt={flyer.title}
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer with WhatsApp CTA */}
        <div className="w-full pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
          <span className="text-xs text-zinc-400 font-mono">
            Design Esportivo Oficial Lance Certo
          </span>
          <a
            href={BRAND_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>SOLICITAR MEU FLYER</span>
          </a>
        </div>
      </div>
    </div>
  );
};
