import React, { useState } from 'react';
import { Play, ExternalLink, MapPin } from 'lucide-react';
import { CASES } from '../data/content.ts';
import { CaseItem } from '../types.ts';
import { VideoModal } from './VideoModal.tsx';

export const CasesSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    url: string;
  } | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl?: string) => {
    if (fallbackUrl && e.currentTarget.src !== fallbackUrl) {
      e.currentTarget.src = fallbackUrl;
    }
  };

  return (
    <section
      id="cases"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#060709]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              05 — CASES DE SUCESSO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            LANCES QUE <span className="text-emerald-400">IMPACTAM.</span>
          </h2>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal">
            Materiais produzidos para atletas que vivem o futebol.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CASES.map((item: CaseItem) => (
            <div
              key={item.id}
              id={`case-card-${item.id}`}
              className="rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Media Section: Athlete Photo + Club Badge overlay + Video Play trigger */}
              <div className="relative aspect-video sm:aspect-[16/10] bg-zinc-900 overflow-hidden">
                <img
                  src={item.photoUrl}
                  alt={`Atleta ${item.athleteName}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Club Badge & Location Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <img
                    src={item.clubLogoUrl}
                    alt={`Escudo do ${item.clubName}`}
                    className="w-5 h-5 object-contain"
                    onError={(e) => handleImageError(e, item.clubLogoFallbackUrl)}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-bold text-white tracking-wide">
                    {item.clubName}
                  </span>
                  <span className="text-zinc-500 text-xs">•</span>
                  <span className="text-[11px] text-zinc-300 flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {item.clubLocation}
                  </span>
                </div>

                {/* Interactive Play Button to preview */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveVideo({
                      id: item.youtubeId,
                      title: `DVD ${item.athleteName}`,
                      url: item.videoUrl,
                    })
                  }
                  className="absolute inset-0 flex items-center justify-center group/btn focus:outline-none"
                  aria-label={`Assistir ao DVD de ${item.athleteName}`}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/90 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/40 group-hover/btn:scale-110 group-hover/btn:bg-emerald-400 transition-all duration-300">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                      {item.athleteName}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Material Oficial
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Primary Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-dvd-${item.id}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    <Play className="w-4 h-4 fill-black/20" />
                    <span>{item.videoButtonText}</span>
                    <ExternalLink className="w-4 h-4 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        videoId={activeVideo?.id ?? null}
        videoTitle={activeVideo?.title ?? ''}
        youtubeUrl={activeVideo?.url ?? ''}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
};
