import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, BRAND_LINKS } from '../data/content.ts';

export const FaqSection: React.FC = () => {
  // Only one accordion open at a time
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="duvidas"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0e] border-t border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/20">
              10 — DÚVIDAS FREQUENTES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            DÚVIDAS <span className="text-emerald-400">FREQUENTES</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal">
            Ficou com alguma dúvida? A gente facilita o processo para você.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950 border-emerald-500/40 shadow-xl shadow-emerald-500/5'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>

                  {/* Explicit [ + ] and [ − ] as required */}
                  <span
                    className={`font-mono text-base sm:text-lg font-bold px-2 py-0.5 rounded transition-colors shrink-0 ${
                      isOpen
                        ? 'text-emerald-400 bg-emerald-950/80 border border-emerald-500/30'
                        : 'text-zinc-400 bg-zinc-900 border border-white/10'
                    }`}
                  >
                    {isOpen ? '[ − ]' : '[ + ]'}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/5 animate-in fade-in duration-200">
                    <div className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>

                    {/* Bullet Points if any */}
                    {item.bulletPoints && (
                      <ul className="mt-3 space-y-1.5 list-none">
                        {item.bulletPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm sm:text-base text-zinc-200 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Optional FAQ CTA Button */}
                    {item.ctaText && item.ctaUrl && (
                      <div className="mt-5 pt-4 border-t border-white/5">
                        <a
                          href={item.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-emerald-500/10"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
                          <span>{item.ctaText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA APÓS AS DÚVIDAS */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase mb-3">
            AINDA TEM ALGUMA DÚVIDA?
          </h3>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-6 font-normal">
            Fale com a Lance Certo e explique o que você precisa. Vamos entender seu material e orientar você sobre a melhor opção.
          </p>

          <a
            href={BRAND_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-bottom-cta"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>FALAR COM A LANCE CERTO</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
