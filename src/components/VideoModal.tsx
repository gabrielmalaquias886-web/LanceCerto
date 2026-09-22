import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  videoId: string | null;
  videoTitle: string;
  youtubeUrl: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  videoTitle,
  youtubeUrl,
  onClose,
}) => {
  if (!videoId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Vídeo: ${videoTitle}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-zinc-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="w-full flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-white font-mono uppercase truncate max-w-xs sm:max-w-md">
              {videoTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 text-xs font-bold transition-colors"
            >
              <span>Abrir no YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
