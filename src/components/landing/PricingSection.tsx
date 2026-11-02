import React from 'react';
import { Check, ShieldCheck, HelpCircle, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { AppMembership } from '../../types';

interface PricingSectionProps {
  onLaunchApp: () => void;
  onOpenStripeCheckout: () => void;
  membership: AppMembership;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onLaunchApp,
  onOpenStripeCheckout,
  membership,
}) => {
  return (
    <section id="pricing" aria-label="Pricing and Access" className="py-20 px-4 sm:px-8 border-b border-white/5 bg-[#080916]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Access</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Start free today. Advance when you&apos;re ready.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            No credit card required to begin your perceptual trials. No surprise recurring subscriptions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Free Tier */}
          <div className="p-8 rounded-2xl bg-[#0d1021] border border-white/10 hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-white">Laboratory Free</h3>
                <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono font-medium">
                  Instant Access
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm font-light">/ forever</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full access to the standardized double-blind CRV training engine. Test, log, and benchmark your intuition without paying a penny.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-white/5">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Unlimited blind coordinate generation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Interactive Ideogram Canvas &amp; stroke recorder</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>7 sensory channel descriptor taxonomy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Double-blind 4-way decoy matrix &amp; hit calculation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Binaural Theta (6 Hz) &amp; Solfeggio soundscapes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <button
                onClick={onLaunchApp}
                className="w-full py-3 px-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 text-sm shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <span>Start Free Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-500 font-mono">
                No credit card required · Runs immediately in browser
              </p>
            </div>
          </div>

          {/* Card 2: Manual Companion + 1-Month Membership */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141026] to-[#0c0e20] border-2 border-amber-500/40 relative shadow-[0_0_35px_rgba(245,158,11,0.15)] flex flex-col justify-between space-y-6">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider shadow-md">
              Field Manual Edition
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Adept Companion</span>
                </h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-extrabold text-amber-300">$19</span>
                <span className="text-slate-400 text-sm font-light">one-time payment</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Receive the official 73-page illustrated field manual &ldquo;SCRY: A Journey Through Dimensions&rdquo; plus 1 month of full platform access and curriculum tracking.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-200 pt-4 border-t border-white/5">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-white">Full 73-page PDF manual download</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-amber-200">1 Month full app membership included</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>30-Day structured training curriculum tracker</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Target coordinate ledger &amp; calibration statistics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct author notes by Malychite</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <button
                onClick={onOpenStripeCheckout}
                className="w-full py-3 px-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-sm shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>{membership.isActive ? 'Manual Already Purchased' : 'Get The Book + 1-Mo Access ($19)'}</span>
                <Sparkles className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono">
                One-time charge via Stripe · No automatic recurring renewal
              </p>
            </div>
          </div>

        </div>

        {/* Clear Policy Footnote answering Card, Limits, and Support */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
          <div>
            <span className="block text-white font-medium mb-1">Credit Card Policy</span>
            <span>No credit card is required to use the free laboratory or track your sessions.</span>
          </div>
          <div>
            <span className="block text-white font-medium mb-1">Limits &amp; Expirations</span>
            <span>Free sessions never expire. The Adept Manual tier is a one-time purchase with no recurring fee.</span>
          </div>
          <div>
            <span className="block text-white font-medium mb-1">Support &amp; Inquiries</span>
            <span>Questions or methodology guidance? Contact us directly at <span className="text-teal-300 font-mono">support@skryapp.com</span>.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
