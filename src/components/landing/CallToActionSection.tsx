import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface CallToActionSectionProps {
  onLaunchApp: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onLaunchApp }) => {
  return (
    <section aria-label="Begin Training Call to Action" className="py-24 px-4 sm:px-8 relative overflow-hidden bg-gradient-to-b from-[#070815] to-[#04050d]">
      
      {/* Radiant celestial glow background */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-gradient-to-tr from-teal-500/15 via-purple-600/20 to-amber-500/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Sacred Eye Emblem Mini */}
        <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-amber-400 via-teal-400 to-purple-500 shadow-[0_0_25px_rgba(45,212,191,0.3)]">
          <img
            src="/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg"
            alt="Skry Sacred Eye"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Closing Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to test your perception against empirical reality?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Generate your first cryptographically isolated coordinate in 60 seconds. Experience the difference between guesswork and calibrated signal.
          </p>
        </div>

        {/* The ONE Primary Conversion Action */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2">
          <button
            onClick={onLaunchApp}
            className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-xl shadow-[0_0_35px_rgba(45,212,191,0.5)] hover:shadow-[0_0_45px_rgba(45,212,191,0.7)] transition-all group scale-100 hover:scale-[1.02]"
          >
            <span>Start Your First Free Session</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Zero Friction Risk-Reversal Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>No credit card required</span>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Instant browser access</span>
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>100% Double-blind protocol</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
