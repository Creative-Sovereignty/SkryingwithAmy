import React from 'react';
import { AlertTriangle, BrainCircuit, EyeOff, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section aria-label="The Problem with Uncontrolled Intuition" className="py-20 px-4 sm:px-8 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Reality of Unverified Perception</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Intuition without verification is just imagination.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Most people practicing remote viewing, gut feeling, or meditation never actually know if they are perceiving non-local signal or hallucinating subconscious noise.
          </p>
        </div>

        {/* The 3 Core Traps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-gradient-to-b from-rose-950/20 to-slate-900/40 border border-rose-500/20 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">The Front-Loading Trap</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When an experimenter or app gives hints (&ldquo;Search for an outdoor landmark&rdquo;), your analytical mind fabricates memories instead of accessing raw non-local signal. True perception requires 100% blind coordinate isolation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-950/20 to-slate-900/40 border border-amber-500/20 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Analytical Overlay (AOL) Hijacking</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The rational cortex hates ambiguity. The moment a sensory flash of &ldquo;curved metal&rdquo; arrives, your ego prematurely shouts &ldquo;It&apos;s a spaceship!&rdquo; corrupting your data before you can record raw tactile textures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950 border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/20 flex items-center justify-center text-slate-300">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">No Statistical Benchmark</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Journaling sketches on scrap paper provides no mathematical proof of an anomaly. Without automated quad-decoy judging and binomial distribution tracking, you cannot determine if your accuracy exceeds random chance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
