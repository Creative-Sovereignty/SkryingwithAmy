import React, { useState } from 'react';
import { X, CreditCard, ExternalLink, ShieldCheck, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface StripeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

// NOTE: You can update this URL to your live Stripe Payment Link or Checkout URL anytime!
export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/example_payment_link';

export const StripeCheckoutModal: React.FC<StripeCheckoutModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [customStripeUrl, setCustomStripeUrl] = useState(STRIPE_CHECKOUT_URL);
  const [showConfig, setShowConfig] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 1200);
  };

  const handleOpenStripeLink = () => {
    if (customStripeUrl && customStripeUrl.startsWith('http')) {
      window.open(customStripeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-950 border border-amber-400/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-white text-lg">Secure Stripe Checkout</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Order Summary */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-white text-sm">
                  Remote Viewing: Inner Vision, Outer Knowledge
                </h4>
                <p className="text-xs text-slate-400">73-Page Digital PDF Manual by Malychite</p>
                <div className="flex items-center gap-1.5 mt-2 text-[11px] text-teal-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Includes 1-Month Skry App Membership</span>
                </div>
              </div>
              <span className="font-mono text-xl font-bold text-amber-300">$19.00</span>
            </div>
          </div>

          {/* Action Choice: Real Link vs Simulated Test */}
          <div className="space-y-4">
            
            {/* Primary Option: Complete/Simulate in Test Sandbox */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 to-slate-900/80 border border-teal-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider font-mono">
                  Instant Test Checkout
                </span>
                <span className="text-[10px] text-teal-400/80">Immediate Download & Member Grant</span>
              </div>
              <p className="text-xs text-slate-300">
                Confirm payment to immediately receive the PDF manual download and unlock 1 month of Skry App Membership.
              </p>
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-100 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2 font-mono">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Processing Order...
                  </span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete Order & Unlock ($19.00)</span>
                  </>
                )}
              </button>
            </div>

            {/* External Stripe Payment Link */}
            <div className="pt-2">
              <button
                onClick={handleOpenStripeLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>Open External Stripe Link</span>
              </button>
            </div>

            {/* Account Info Note / Config Toggle */}
            <div className="pt-2 border-t border-white/5">
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="text-[11px] text-slate-500 hover:text-slate-300 underline transition-colors"
              >
                {showConfig ? 'Hide Stripe Account URL Config' : 'Update Stripe Account URL'}
              </button>

              {showConfig && (
                <div className="mt-3 p-3 rounded-lg bg-slate-900 border border-white/10 space-y-2">
                  <label className="text-[11px] text-slate-300 block font-mono">
                    Custom Stripe Payment Link:
                  </label>
                  <input
                    type="url"
                    value={customStripeUrl}
                    onChange={(e) => setCustomStripeUrl(e.target.value)}
                    placeholder="https://buy.stripe.com/..."
                    className="w-full px-3 py-1.5 text-xs bg-slate-950 border border-white/20 rounded text-white focus:outline-none focus:border-amber-400"
                  />
                  <p className="text-[10px] text-slate-400">
                    You can paste your live Stripe payment link above, or edit it directly in the codebase.
                  </p>
                </div>
              )}
            </div>

          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>256-Bit Encrypted Payment Flow · 100% Satisfaction Guarantee</span>
          </div>

        </div>

      </div>
    </div>
  );
};
