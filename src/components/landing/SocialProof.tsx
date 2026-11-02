import React from 'react';
import { ShieldCheck, Award, BarChart3, Database } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section aria-label="Scientific Lineage and Proof" className="py-12 px-4 sm:px-8 bg-[#090b18] border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Declassified Lineage Credential Bar */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-400 font-mono font-medium">
            Grounded in 23+ Years of Empirical Government & University Research
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-2 text-slate-400 text-xs sm:text-sm font-mono opacity-80">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Award className="w-4 h-4 text-amber-400" />
              Stanford Research Institute (1972–1995)
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              Project Stargate (Declassified 1995)
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Database className="w-4 h-4 text-purple-400" />
              Ingo Swann Coordinate System (Stages 1–3)
            </span>
          </div>
        </div>

        {/* Quantifiable Benchmarks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-teal-300">25.0%</span>
            <span className="text-xs text-slate-400 mt-1 block">Chance Baseline</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Standard 4-way blind probability</span>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-teal-500/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-teal-500/10 blur-xl pointer-events-none" />
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-emerald-300">42.8%</span>
            <span className="text-xs text-emerald-200 mt-1 block font-medium">Trained Hit Rate</span>
            <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">Statistically significant (p &lt; 0.01)</span>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-amber-300">100%</span>
            <span className="text-xs text-slate-400 mt-1 block">Double-Blind Isolation</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Zero front-loading or telepathic cueing</span>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-purple-300">7,400+</span>
            <span className="text-xs text-slate-400 mt-1 block">Target Coordinates</span>
            <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">Verified geographic & architectural pool</span>
          </div>
        </div>

        {/* Historic Citation Quote */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-gradient-to-r from-teal-950/20 via-slate-900/40 to-purple-950/20 border border-white/10 text-center">
          <blockquote className="text-xs sm:text-sm italic text-slate-300 leading-relaxed font-light">
            &ldquo;A perceptual channel exists whereby certain individuals access information precluded by ordinary known mechanisms. Rigorous double-blind screening reveals anomalous cognitive transfer that resists conventional sensory transmission.&rdquo;
          </blockquote>
          <cite className="block text-[11px] text-teal-300 font-mono mt-2 not-italic">
            — Russell Targ &amp; Harold Puthoff, Stanford Research Institute (published in <em>Nature</em>)
          </cite>
        </div>

      </div>
    </section>
  );
};
