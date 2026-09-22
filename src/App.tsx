import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { CasesSection } from './components/CasesSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { WhyUsSection } from './components/WhyUsSection.tsx';
import { YouTubeSection } from './components/YouTubeSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 flex flex-col w-full overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Vertical Content Flow */}
      <main className="flex-grow flex flex-col w-full">
        {/* 01 — CAPA */}
        <Hero />

        {/* 02 — SOBRE A LANCE CERTO */}
        <AboutSection />

        {/* 03 — NOSSOS SERVIÇOS */}
        <ServicesSection />

        {/* 04 — PORTFÓLIO DE FLYERS */}
        <PortfolioSection />

        {/* 05 — CASES DE SUCESSO */}
        <CasesSection />

        {/* 06 — EXPERIÊNCIA */}
        <ExperienceSection />

        {/* 07 — POR QUE LANCE CERTO? */}
        <WhyUsSection />

        {/* 08 — YOUTUBE */}
        <YouTubeSection />

        {/* 09 — COMO FUNCIONA */}
        <HowItWorksSection />

        {/* 10 — DÚVIDAS FREQUENTES */}
        <FaqSection />

        {/* 11 — INSTAGRAM */}
        <InstagramSection />

        {/* 12 — CTA FINAL & FOOTER */}
        <FinalCtaSection />
      </main>

      {/* Persistent Floating WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
}
