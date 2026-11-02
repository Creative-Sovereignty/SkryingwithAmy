import React from 'react';
import { Check, ShieldCheck, Compass, Activity, Brain, Target, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onLaunchApp: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onLaunchApp }) => {
  return (
    <section id="methodology" className="py-20 px-4 sm:px-8 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-teal-400 font-mono">
            <span>Rigorous Methodology</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>The Skry Training System</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Separating Signal From Analytical Noise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Remote viewing is not guessing or fortune-telling. It is a systematic discipline that trains the body 
            and mind to record faint non-local impressions before the analytical intellect can construct an illusion.
          </p>
        </div>

        {/* The 4 Promises of a Session */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e122b] to-[#0a0d1d] border border-teal-500/20 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-teal-300">CORE INTEGRITY</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              The Four Promises of an Honest Session
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-teal-400 font-bold block text-sm">01. Hidden Target</span>
              <p className="text-slate-400 leading-relaxed">
                You know nothing about the target beforehand. No monitor, partner, or device cues the viewer.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-teal-400 font-bold block text-sm">02. Raw Impressions</span>
              <p className="text-slate-400 leading-relaxed">
                You record what you sense (cool, rough, rising, wet) rather than what you think it is (a cathedral).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-teal-400 font-bold block text-sm">03. Fixed Record</span>
              <p className="text-slate-400 leading-relaxed">
                Once submitted, impressions are locked. No post-hoc editing to retroactively match the photograph.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-teal-400 font-bold block text-sm">04. Honest Feedback</span>
              <p className="text-slate-400 leading-relaxed">
                You see the real target and judge yourself fairly alongside misses. Honest data builds real mastery.
              </p>
            </div>
          </div>
        </div>

        {/* Ideogram Reflex Archival Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1024] via-[#0e122b] to-[#0d1024] border border-white/10 overflow-hidden">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
            <img
              src="/src/assets/images/crv_ideogram_drafting_1793624905721.jpg"
              alt="Researcher drafting rapid reflex ideogram with graphite pencil on archival parchment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-teal-300 flex items-center justify-between">
              <span>CRV Stage 1 · Somatosensory Reflex</span>
              <span className="text-slate-400">T &lt; 2.0s</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">THE FIRST TWO SECONDS</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Capturing the Wave Before the Mind Invents the Story
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              When an untraceable target coordinate is received, the nervous system reacts in a split-second 
              involuntary spasm before the cortex can rationalize what it means. Ingo Swann termed this the <strong className="text-white">Ideogram</strong>.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              In Skry, your first motion on the drawing surface records this pure somatosensory imprint: 
              a sharp rise (structure), a wavy sweep (water), a jagged line (mountain), or a flat horizon (land). 
              By anchoring this gesture first, you prevent Analytical Overlay from hijacking your perception.
            </p>
          </div>
        </div>

        {/* The Staged Protocol Steps */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-white">
            The Six-Stage Progression
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stage 1 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-amber-300">STAGE 1</span>
              <h4 className="font-serif font-bold text-white text-base">The Reflex Ideogram</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                The hand acts as a seismograph needle. Within 1-2 seconds of reading the coordinate, 
                your pen touches the canvas and catches the initial somatic tremor: flat, wavy, rising, or jagged.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-teal-300">STAGE 2</span>
              <h4 className="font-serif font-bold text-white text-base">Sensory Channels</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Systematically querying temperature, texture, ambient sounds, light luminance, and atmospheric mood. 
                Instead of asking "What is it?", you ask "What is it like?".
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-purple-300">STAGE 3</span>
              <h4 className="font-serif font-bold text-white text-base">AOL Quenching</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                When the brain offers a premature conclusion ("It's the Eiffel Tower!"), you declare <code className="text-purple-300 font-mono">AOL: Eiffel Tower</code>, 
                box it in your notes, and return to sensory data.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-300">STAGE 4</span>
              <h4 className="font-serif font-bold text-white text-base">Dimensional Descriptors</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Mapping physical scales and architectural line structures against our 49-descriptor ontology, 
                rewarding precision over indiscriminate selection.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-cyan-300">STAGE 5</span>
              <h4 className="font-serif font-bold text-white text-base">Blind 4-Way Quad Judging</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Before the answer is revealed, choose between 4 photographs using only your recorded notes. 
                A long-term hit rate consistently above 25% demonstrates non-local perception statistically.
              </p>
            </div>

            {/* Stage 6 */}
            <div className="p-6 rounded-2xl bg-[#0d1024] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-rose-300">STAGE 6</span>
              <h4 className="font-serif font-bold text-white text-base">The Unveiling & Reflection</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Closing the circle. Review your ideogram against the target, reflect on where AOL occurred, 
                and log the session into your private persistent calibration history.
              </p>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onLaunchApp}
            className="flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.35)] transition-all"
          >
            <span>Begin Stage 1 Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
