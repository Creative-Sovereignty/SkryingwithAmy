import React from 'react';
import { 
  Target, 
  PenTool, 
  Layers, 
  Eye, 
  Headphones, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FeaturesBentoProps {
  onLaunchApp: () => void;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ onLaunchApp }) => {
  return (
    <section id="features" className="py-20 px-4 sm:px-8 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-teal-400 font-mono">
            <span>Operational Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Six Core Pillars</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Designed for Empirical Perceptual Calibration
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Each tool inside Skry mirrors the standardized Controlled Remote Viewing protocols 
            developed for intelligence reconnaissance, translated into an accessible personal laboratory.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1: Blind Coordinates */}
          <div className="p-7 rounded-2xl bg-[#0e1124] border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Cryptographically Blind Coordinates
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Every session generates an untraceable 8-character coordinate (e.g., <code className="text-teal-300 font-mono">K7Q-294</code>). 
                The target remains completely hidden from both viewer and client until submission, guaranteeing zero front-loading or subconscious cueing.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span>CRV STAGE 0</span>
              <span>·</span>
              <span>DOUBLE-BLIND ENFORCED</span>
            </div>
          </div>

          {/* Feature 2: Ideogram Kinematics */}
          <div className="p-7 rounded-2xl bg-[#0e1124] border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="w-16 h-10 rounded-lg overflow-hidden border border-purple-500/20 shadow-sm">
                  <img
                    src="/src/assets/images/crv_ideogram_drafting_1793624905721.jpg"
                    alt="Ideogram reflex preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Stage 1 Ideogram Kinematics
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Capture the subconscious nervous system's raw reflex before the conscious mind invents stories. 
                Our low-latency digital sketchpad tracks rapid strokes, motion feels, and somatic impressions.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span>CRV STAGE 1</span>
              <span>·</span>
              <span>SEISMOGRAPHIC REFLEX</span>
            </div>
          </div>

          {/* Feature 3: 7 Sensory Channels */}
          <div className="p-7 rounded-2xl bg-[#0e1124] border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                49-Descriptor Sensory Taxonomy
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Break perception down into seven physical channels: water presence, terrain topography, 
                architectural geometries, tactile substances, dominant colors, and emotional scale.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span>CRV STAGE 2</span>
              <span>·</span>
              <span>QUALITATIVE SIGNAL EXTRACTION</span>
            </div>
          </div>

          {/* Feature 4: Quad Decoy Judging */}
          <div className="p-7 rounded-2xl bg-[#0e1124] border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Blind 4-Way Quad Judging
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Evaluate your notes against the true target alongside three randomized decoys. 
                Beating the 25% chance baseline over dozens of sessions provides mathematically objective verification of non-local signal.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span>CRV FEEDBACK</span>
              <span>·</span>
              <span>25% CHANCE BASELINE</span>
            </div>
          </div>

          {/* Feature 5: Resonant Acoustics */}
          <div className="p-7 rounded-2xl bg-[#0e1124] border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Solfeggio & Binaural Entrainment
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Integrated ambient soundscapes designed to gently guide cortical rhythms from busy waking Beta 
                down into receptive Alpha (10 Hz) and deep Theta (6 Hz) contemplation states.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span>NEURO-ACOUSTIC</span>
              <span>·</span>
              <span>THETA & ALPHA PRESETS</span>
            </div>
          </div>

          {/* Feature 6: Ametiest AI Mentor */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-purple-950/40 via-[#0e1124] to-[#0e1124] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Ametiest AI Perceptual Debrief
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                An intelligent session debrief system that analyzes your raw text, isolates Analytical Overlay (AOL), 
                and evaluates matches across terrain, color, and structure with objective feedback.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-purple-400/90 font-mono flex items-center gap-2">
              <span>STAGE EVALUATION</span>
              <span>·</span>
              <span>AOL QUENCHING MENTOR</span>
            </div>
          </div>

        </div>

        {/* Feature Action Callout */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onLaunchApp}
            className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-teal-300 hover:text-white bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl transition-all"
          >
            <span>Try an Interactive Viewing Session Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
