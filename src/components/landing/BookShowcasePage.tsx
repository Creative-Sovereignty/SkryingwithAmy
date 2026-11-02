import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Layers, 
  Brain, 
  Compass, 
  Eye, 
  Calendar,
  Lock,
  Feather
} from 'lucide-react';
import { AppMembership } from '../../types';

interface BookShowcasePageProps {
  onOpenStripeCheckout: () => void;
  onLaunchApp: () => void;
  membership: AppMembership;
}

export const BookShowcasePage: React.FC<BookShowcasePageProps> = ({
  onOpenStripeCheckout,
  onLaunchApp,
  membership,
}) => {
  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Hero Decision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Copy & Offer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-amber-400 font-mono">
            <span>The Official Companion Manual</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>73 Pages · 20 Chapters</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Remote Viewing: <br />
            <span className="bg-gradient-to-r from-amber-200 via-teal-300 to-purple-300 bg-clip-text text-transparent">
              Inner Vision, Outer Knowledge
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <em className="text-white font-medium not-italic">"The book explains the why and the how; the app gives you the targets, the timer, the tools, and the record of every session you run."</em>
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            Written by practitioner and elder teacher <strong className="text-white">Malychite</strong>, 
            this companion manual walks you step-by-step through the declassified protocols of 
            Stanford Research Institute, the seven Hermetic principles of non-local mind, the four doors of 
            altered perception, and a proven 30-day curriculum designed to take you from your first 
            reflex ideogram to the 50-session Century Horizon.
          </p>

          {/* Pricing & Membership Grant Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-purple-900/20 to-slate-900/80 border border-amber-400/30 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-300 font-mono block">Complete Companion Package</span>
                <span className="text-3xl font-serif font-bold text-white">$19</span>
                <span className="text-slate-400 text-xs ml-2">one-time digital edition</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-teal-300 bg-teal-500/20 border border-teal-500/40 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  1-Mo App Membership Included
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full 73-Page Digital PDF Manual with 20 Chapters & 5 Parts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-medium text-white">1 Full Month of Skry App Membership</span>
                <span className="text-slate-400 text-xs">(Adept Clearance & 30-Day Training Tracker)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Printable Appendix B Session Log Template for field notebooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Appendix A Quick 49-Descriptor Sensory Matrix & 18-Badge Guide</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenStripeCheckout}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-100 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all"
              >
                <span>Get the Book & Activate Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {membership.isActive && (
                <button
                  onClick={onLaunchApp}
                  className="px-5 py-3.5 text-sm font-medium text-teal-300 hover:text-white bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl transition-all"
                >
                  Enter Member App
                </button>
              )}
            </div>
            
            <p className="text-[11px] text-slate-400 text-center">
              Secured by Stripe · Instant PDF Download Link · Instant App Membership Unlock
            </p>
          </div>

        </div>

        {/* Right Column: Physical Monograph & Cover Presentation */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-purple-600/35 to-teal-400/25 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-[#0d1024] shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-4 flex flex-col space-y-4">
              
              {/* Luxury Hardcover Monograph Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-inner group">
                <img
                  src="/src/assets/images/manual_book_monograph_1793624906437.jpg"
                  alt="Remote Viewing Companion Manual Hardcover Edition by Malychite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-[10px] font-mono text-amber-300">
                  OFFICIAL COMPANION
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    Remote Viewing: Inner Vision, Outer Knowledge
                  </h3>
                  <p className="text-xs text-amber-200/90 font-serif">By Malychite · 20 Chapters & Field Drills</p>
                </div>
              </div>

              <div className="w-full py-3 px-4 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-left grid grid-cols-2 gap-2 text-slate-300 font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">PAGES</span>
                  <span>73 Formatted</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">EXERCISES</span>
                  <span>20 Practical Drills</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PROGRAM</span>
                  <span>30-Day Arc</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">BONUS PERK</span>
                  <span className="text-teal-300 font-semibold">1-Mo App Access</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Part by Part Curriculum Overview */}
      <div className="space-y-8 pt-8 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs tracking-wider uppercase text-teal-400 font-mono">Five Essential Pillars</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            What You Will Master in This Manual
          </h2>
          <p className="text-slate-400 text-sm">
            Curated to provide deep perceptual grounding without guesswork or ungrounded superstition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Part I */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-400/30 transition-all space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
              <Compass className="w-4 h-4 text-teal-400" />
              <span>PART I · CHAPTERS 1–4</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Foundations of Non-Local Perception</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Understand what remote viewing is and is not. Learn the 23-year history of government research, 
              tune brainwave states (Alpha & Theta), leverage binaural soundscapes, and build a repeatable pre-session ritual.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Matches Scry: Protocol Guide, Ambient Player, Breathing Guide
            </div>
          </div>

          {/* Part II */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-400/30 transition-all space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
              <Brain className="w-4 h-4 text-amber-400" />
              <span>PART II · CHAPTERS 5–8</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">The Staged CRV Protocol</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Master the blind coordinate, Stage 1 reflex ideograms, and the seven sensory channels. 
              Learn the critical art of quenching Analytical Overlay (AOL) with the Box-and-Return technique.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Matches Scry: Blind Session, Ideogram Sketchpad, Descriptor Grid
            </div>
          </div>

          {/* Part III */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-400/30 transition-all space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
              <Eye className="w-4 h-4 text-purple-400" />
              <span>PART III · CHAPTERS 9–10</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Honest Feedback & Calibration</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Explore why feedback is what trains the nervous system. Navigate the 4-photo blind Judge Mode, 
              calculate your statistical baseline against chance (25%), and spot personal cognitive biases.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Matches Scry: Reveal Phase, Quad Judging, Personal Stats
            </div>
          </div>

          {/* Part IV */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-400/30 transition-all space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>PART IV · CHAPTERS 11–18</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Beyond the Coordinate</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              The 7 Hermetic principles applied to remote viewing. Explore the 4 doors: CRV, Astral Projection/OBE, 
              Hypnagogic viewing, and Quiet Float. Dream target precognition, viewing circles, and the Viewer's Code of Ethics.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Matches Scry: Dream Journal, Circles, Technique Switcher
            </div>
          </div>

          {/* Part V */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-teal-400/30 transition-all space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>PART V · CHAPTERS 19–20</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">The 30-Day Training Program</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              A structured daily curriculum progressing from basic ideograms in Tier 1 to complex vectors in Tier 3. 
              Culminates in a full monthly review and pathways toward 50 sessions and the Century Horizon badge.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Matches Scry: Daily Target, Milestones, 18 Achievements
            </div>
          </div>

          {/* Author Note Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-purple-950/30 to-slate-900/70 border border-amber-400/20 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
              <Feather className="w-4 h-4 text-amber-400" />
              <span>ABOUT THE AUTHOR</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Elder Malychite</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Malychite is a Wiccan minister and an elder in the Priesthood of DCWA with over thirty years of teaching 
              the Craft and Hermetic philosophy. He trained in astral travel as part of his initiation and built Scry 
              to provide an honest, blind platform where seekers can test their inner vision against hard data.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-teal-950/60 border border-white/10 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
          Start Your 30-Day Journey Through Dimensions
        </h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Get instant access to the complete 73-page PDF manual and activate your 1-month Scry App Membership today.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onOpenStripeCheckout}
            className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-100 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all"
          >
            <span>Get the Book for $19</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
