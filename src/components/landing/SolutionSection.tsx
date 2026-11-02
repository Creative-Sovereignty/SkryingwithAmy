import React from 'react';
import { CheckCircle2, Lock, Sparkles, Activity, ShieldCheck } from 'lucide-react';

interface SolutionSectionProps {
  onLaunchApp: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onLaunchApp }) => {
  return (
    <section aria-label="The Skry Solution" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#080914] via-[#090b1c] to-[#080914] border-b border-white/5">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Solution Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Skry Solution</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            A standardized laboratory that turns intuition into measurable skill.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Skry brings the rigorous protocols of Stanford Research Institute into an accessible, real-time web application.
          </p>
        </div>

        {/* 3 Outcome Pillars with Visual Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-teal-500/20 hover:border-teal-500/40 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Cryptographic Isolation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Targets are sealed with zero client exposure. Neither you nor the interface knows the target until you commit your perceptual data. No subliminal cues, no front-loading, no cheating.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-teal-300/80 pt-4 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>8-digit randomized coordinates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero telemetry or pre-rendered target URLs</span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white/[0.02] border border-purple-500/20 hover:border-purple-500/40 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Autonomic Somatosensory Capture</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Before your analytical mind can name or invent an object, Skry forces you to capture the instantaneous kinetic ideogram and classify raw physical textures across 7 sensory channels.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-purple-300/80 pt-4 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Sub-second kinetic motor reflex recording</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Strict Analytical Overlay (AOL) segregation</span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/40 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Automated Blind Decoy Scoring</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Review your drawing against four randomized images (one true target and three decoys). When you consistently select the target above 25% probability, you have mathematical proof of anomalous cognition.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-amber-300/80 pt-4 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Four-way randomized blind judging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Automated binomial hit-rate tracking</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
