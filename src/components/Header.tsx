import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND_LINKS, NAV_ITEMS } from '../data/content.ts';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080a]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#07080a]/90 via-[#07080a]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Official colors, untouched identity */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          id="header-logo-link"
        >
          <img
            src={BRAND_LINKS.logo}
            alt="Lance Certo — Edição Esportiva"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs xl:text-sm font-semibold tracking-wider text-zinc-300 hover:text-white px-3 py-2 rounded-md transition-colors hover:bg-white/5 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Direct Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BRAND_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
          id="mobile-menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a0c10]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-4"
        >
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium tracking-wide text-zinc-200 hover:text-emerald-400 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-emerald-400/60 font-mono">↓</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href={BRAND_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>QUERO MEU MATERIAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
