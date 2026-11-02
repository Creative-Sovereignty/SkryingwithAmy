import React from 'react';
import { Landmark, Compass, History, Shield, CheckCircle2 } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section id="chronicle" className="py-20 px-4 sm:px-8 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-amber-400 font-mono">
            <span>Historical Foundation</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>From Oracle Mirrors to Physics Laboratories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Chronicle of Remote Viewing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Remote viewing has two histories: the ancient human tradition of scrying and inner vision, 
            and 23 years of rigorous, government-sponsored laboratory research in the United States.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Era 1: The Seers */}
          <div className="p-6 rounded-2xl bg-[#0c0f20] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-amber-400 block">ANTIQUITY — 1930</span>
            <h3 className="font-serif text-lg font-bold text-white">The Seers Before the Science</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              For millennia, shamans, Delphic oracles, and Elizabethan scholars like John Dee gazed into still water 
              and obsidian mirrors. What these early traditions lacked was a verifiable way to check impressions against an objective target.
            </p>
          </div>

          {/* Era 2: SRI & Cold War */}
          <div className="p-6 rounded-2xl bg-[#0c0f20] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-teal-400 block">1972 · STANFORD RESEARCH INST.</span>
            <h3 className="font-serif text-lg font-bold text-white">Physicists & Coordinate Protocols</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Laser physicists Harold Puthoff and Russell Targ founded the SRI program under CIA sponsorship. 
              Artist Ingo Swann replaced known cues with blind geographic coordinates, founding Coordinate Remote Viewing (CRV).
            </p>
          </div>

          {/* Era 3: Project Stargate */}
          <div className="p-6 rounded-2xl bg-[#0c0f20] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-purple-400 block">1978–1995 · FORT MEADE</span>
            <h3 className="font-serif text-lg font-bold text-white">Project Stargate & Military Units</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              The U.S. Army established an operational viewing detachment under codenames Grill Flame, Sun Streak, and Stargate. 
              Viewers like Joseph McMoneagle (Remote Viewer 001) were tasked with describing distant Soviet facilities using double-blind cues.
            </p>
          </div>

          {/* Era 4: Declassification & Scry */}
          <div className="p-6 rounded-2xl bg-[#0c0f20] border border-white/10 space-y-3">
            <span className="text-xs font-mono text-emerald-400 block">1995–PRESENT · CIVILIAN LABS</span>
            <h3 className="font-serif text-lg font-bold text-white">Declassification & Empirical Testing</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Following the 1995 American Institutes for Research review by Dr. Jessica Utts, thousands of archive pages were declassified. 
              Today, Skry translates these exact protocols into an open, empirical digital platform for personal calibration.
            </p>
          </div>

        </div>

        {/* SRI Historical Archival Laboratory Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-[#0b0e22] border border-white/10 overflow-hidden relative">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
            <img
              src="/src/assets/images/sri_historical_lab_1793624905899.jpg"
              alt="Stanford Research Institute Remote Viewing Physics Laboratory 1972"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-teal-300/90 flex items-center justify-between">
              <span>SRI Radio Physics Lab · Menlo Park, CA</span>
              <span className="text-slate-400">c. 1974</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-teal-400">
              <Landmark className="w-4 h-4 text-teal-400" />
              <span>Declassified Scientific Lineage</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              From Secret CIA Vaults to an Open Empirical Science
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              In 1972, Harold Puthoff and Russell Targ placed viewers inside magnetically shielded 
              Faraday rooms to test whether physical barriers could attenuate psychic reception. 
              The surprising result: electromagnetic shielding had zero dampening effect on coordinate perception.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Skry honors this legacy by retaining the exact double-blind standard used at SRI: 
              random coordinates, strict sensory quarantine, zero conversational front-loading, and mathematical target evaluation.
            </p>
          </div>
        </div>

        {/* 4 Lessons Callout Box from Chapter 2 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-white/10 space-y-4">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
            The Four Lessons the Pioneers Left Us
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="font-mono text-teal-300 font-bold block">1. Signal In Fragments</span>
              <p className="text-slate-400">
                Colors, textures, and temperatures arrive first. Whole, named objects almost always originate in imagination.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-teal-300 font-bold block">2. Naming Is The Enemy</span>
              <p className="text-slate-400">
                Swann called the mind's rush to guess Analytical Overlay (AOL). The protocol catches and quarantines it.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-teal-300 font-bold block">3. Structure Frees Intuition</span>
              <p className="text-slate-400">
                A fixed sequence of stages keeps the viewer from wandering into fantasy, allowing focus to rest on raw data.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-teal-300 font-bold block">4. Feedback Trains The Brain</span>
              <p className="text-slate-400">
                Viewers who observe objective feedback improve over time; those who never see the reveal cannot calibrate.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
