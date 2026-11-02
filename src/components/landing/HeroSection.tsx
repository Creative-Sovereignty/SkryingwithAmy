import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { ActiveWebPage } from '../../types';

interface HeroSectionProps {
  onLaunchApp: () => void;
  onNavigate: (page: ActiveWebPage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLaunchApp, onNavigate }) => {
  return (
    <section aria-label="Hero Overview" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28 px-4 sm:px-8 border-b border-white/5">
      {/* Background celestial aurora & generated cosmic horizon */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <img
          src="/src/assets/images/hero_celestial_horizon_1793624905234.jpg"
          alt="Ethereal cosmic nebula and non-local horizon"
          className="w-full h-full object-cover opacity-20 filter contrast-125 saturate-150"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060713]/90 via-[#060713]/75 to-[#060713]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-teal-500/15 via-purple-600/20 to-amber-500/15 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Focal Point 1 — Outcome Proposition, 5-Second Clarity & Primary CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Category kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25 text-xs tracking-wider uppercase text-teal-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Empirical Controlled Remote Viewing Laboratory</span>
          </div>

          {/* Outcome Headline: What client gets */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            Calibrate and Benchmark Your Intuition with{' '}
            <span className="bg-gradient-to-r from-teal-300 via-purple-300 to-amber-200 bg-clip-text text-transparent">
              Double-Blind Precision.
            </span>
          </h1>

          {/* Subhead: Audience + Next Step in one sentence */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Built for serious consciousness researchers and intuitive practitioners—test your perception against verifiable non-local coordinates in 60 seconds with no credit card required.
          </p>

          {/* Action Decision Block: ONE Primary High-Contrast Button + ONE Secondary Text-Style Link */}
          <div className="flex flex-wrap items-center gap-5 pt-2 w-full sm:w-auto">
            <button
              onClick={onLaunchApp}
              className="flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-xl shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:shadow-[0_0_35px_rgba(45,212,191,0.6)] transition-all group cursor-pointer"
            >
              <span>Start Free Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('manual')}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-amber-300 transition-colors py-2 px-1 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Explore Companion Manual &rarr;</span>
            </button>
          </div>

          {/* Instant Reassurance Micro-Copy */}
          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono pt-1">
            <span className="flex items-center gap-1.5 text-teal-300/90">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>No credit card needed</span>
            </span>
            <span className="text-slate-600">·</span>
            <span>Runs immediately in browser</span>
            <span className="text-slate-600">·</span>
            <span>Stanford SRI protocol</span>
          </div>

        </div>

        {/* Right Column: Focal Point 2 — Master Sacred Eye Emblem */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group">
            
            {/* Luminous Celestial Halo Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-teal-500/30 to-purple-600/40 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none animate-pulse" />
            
            {/* Master Artwork Framing */}
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-slate-900/60 p-1">
              <img
                src="/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg"
                alt="Skry Sacred Eye Emblem"
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* Subtle Overlay Label */}
              <div className="absolute bottom-3 inset-x-3 bg-[#080914]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-amber-300 font-medium tracking-wider">SKRY PROTOCOL</span>
                <span className="text-teal-300">DOUBLE-BLIND CRV</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
