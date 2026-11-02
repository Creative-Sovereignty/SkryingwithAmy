import React from 'react';
import { ShieldCheck, HeartHandshake, EyeOff, Lock, AlertTriangle } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section id="ethics" className="py-20 px-4 sm:px-8 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-purple-400 font-mono">
            <span>Ethical Governance & Safety</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Standardized Civilian Practice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Compliance & The Viewer's Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Any power worth cultivating carries responsibility. Skry operates strictly within a harm-none, 
            non-intrusive framework grounded in the seven ethical tenets outlined in Chapter 18 of the manual.
          </p>
        </div>

        {/* Ethical Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#0d1022] border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Places, Not People</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Skry's target pools consist exclusively of public geography, historical architecture, and natural wonders. 
              We strictly forbid intrusive targeting of private individuals, private homes, or non-consensual subjects.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1022] border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">No Medical or Legal Overclaiming</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Remote viewing is an empirical calibration tool, not a medical diagnostic device or legal substitute. 
              Impressions are subjective data points, never to replace professional medical or legal counsel.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1022] border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Client-Side Privacy & Integrity</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your session sketches, text impressions, and dream logs remain stored on your device in local memory. 
              Your data is never transmitted to commercial tracking networks or unblinded third parties.
            </p>
          </div>

        </div>

        {/* The 7 Tenets from Chapter 18 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-white/10 space-y-4">
          <span className="text-xs font-mono uppercase text-amber-300 tracking-wider">
            CHAPTER 18 · A VIEWER'S CODE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300 pt-2">
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">1.</span>
              <span>I will harm none, including myself.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">2.</span>
              <span>I will view places freely and people only with consent.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">3.</span>
              <span>I will keep my sessions blind and my records honest.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">4.</span>
              <span>I will not present impressions as facts.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">5.</span>
              <span>I will never use viewing to replace medical, legal or emergency help.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-teal-400 font-bold shrink-0">6.</span>
              <span>I will respect the privacy and beliefs of others in circles.</span>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex items-start gap-2 pt-1 border-t border-white/5">
              <span className="font-mono text-teal-400 font-bold shrink-0">7.</span>
              <span>I will ground what I open and close what I begin.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
