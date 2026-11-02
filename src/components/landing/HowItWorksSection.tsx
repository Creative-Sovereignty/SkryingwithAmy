import React from 'react';
import { ArrowRight, Compass, Edit3, Target, Volume2 } from 'lucide-react';

interface HowItWorksProps {
  onLaunchApp: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onLaunchApp }) => {
  return (
    <section id="how-it-works" aria-label="How Skry Works" className="py-20 px-4 sm:px-8 border-b border-white/5 bg-[#070815]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>3-Step Scientific Flow</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            How a standardized CRV trial works.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Each trial follows a strict 3-stage protocol designed to silence analytical noise and isolate sensory signals.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line behind steps on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-amber-500/20 -translate-y-12 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 p-7 rounded-2xl bg-[#090b1c] border border-white/10 hover:border-teal-500/30 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-extrabold text-teal-400/50">01</span>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <Volume2 className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-white">Receive Blind Coordinate</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Activate optional binaural theta entrainment to quiet cerebral chatter. A randomized 8-digit coordinate is generated (e.g. 7492-8104) pointing to an encrypted photographic target unknown to you or your browser.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-teal-300 text-center">
              Target ID: <span className="text-white tracking-widest font-semibold">9412-5830</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 p-7 rounded-2xl bg-[#090b1c] border border-white/10 hover:border-purple-500/30 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-extrabold text-purple-400/50">02</span>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Edit3 className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-white">Record Ideogram &amp; Sensory Matrix</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Draw the sub-second autonomic stroke on the pressure-sensitive canvas. Select elemental tactile descriptors (hard, fluid, angular, warm). Offload any cognitive guesses into the AOL isolation log.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-purple-300 text-center">
              Canvas: <span className="text-white">Autonomic Reflex Stroke &amp; 7 Channels</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 p-7 rounded-2xl bg-[#090b1c] border border-white/10 hover:border-amber-500/30 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-extrabold text-amber-400/50">03</span>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-white">Four-Way Blind Calibration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Four randomized target images appear blindly. Compare your sensory notes against all four. Once committed, the true coordinate is decrypted, celebrating your hit or quantifying calibration divergence.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-amber-300 text-center">
              Evaluation: <span className="text-white">4-Way Decoy Matrix (25% Baseline)</span>
            </div>
          </div>

        </div>

        {/* Action Callout */}
        <div className="text-center pt-4">
          <button
            onClick={onLaunchApp}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 shadow-[0_0_25px_rgba(45,212,191,0.3)] transition-all text-sm group"
          >
            <span>Experience Step 1 Now (Takes 2 Minutes)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
