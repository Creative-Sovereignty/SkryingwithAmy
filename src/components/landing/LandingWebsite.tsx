import React, { useState } from 'react';
import { ActiveWebPage, UserProfile, AppMembership } from '../../types';
import { WebsiteNav } from './WebsiteNav';
import { HeroSection } from './HeroSection';
import { SocialProof } from './SocialProof';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { HowItWorksSection } from './HowItWorksSection';
import { FeaturesBento } from './FeaturesBento';
import { HistorySection } from './HistorySection';
import { MethodologySection } from './MethodologySection';
import { PricingSection } from './PricingSection';
import { FaqSection } from './FaqSection';
import { ComplianceSection } from './ComplianceSection';
import { CallToActionSection } from './CallToActionSection';
import { BookShowcasePage } from './BookShowcasePage';
import { BookDownloadPage } from './BookDownloadPage';
import { StripeCheckoutModal } from './StripeCheckoutModal';
import { AuthModal } from './AuthModal';
import { WebsiteFooter } from './WebsiteFooter';

interface LandingWebsiteProps {
  onLaunchApp: () => void;
  userProfile: UserProfile | null;
  onUserProfileChange: (user: UserProfile | null) => void;
  membership: AppMembership;
  onActivateMembership: () => void;
}

export const LandingWebsite: React.FC<LandingWebsiteProps> = ({
  onLaunchApp,
  userProfile,
  onUserProfileChange,
  membership,
  onActivateMembership,
}) => {
  const [activeWebPage, setActiveWebPage] = useState<ActiveWebPage>('overview');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  const handleNavigate = (page: ActiveWebPage) => {
    setActiveWebPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = () => {
    setIsStripeModalOpen(false);
    onActivateMembership();
    setActiveWebPage('download');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080914] text-[#E0E2EC] flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-200">
      
      {/* 1. Navbar */}
      <WebsiteNav
        activePage={activeWebPage}
        onNavigate={handleNavigate}
        onLaunchApp={onLaunchApp}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        userProfile={userProfile}
        membership={membership}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeWebPage === 'overview' && (
          <>
            {/* 2. Hero Section (5-Second Rule: Outcome, 1 Primary Button, 2 Focal Points) */}
            <HeroSection
              onLaunchApp={onLaunchApp}
              onNavigate={handleNavigate}
            />

            {/* 3. Social Proof (SRI Lineage, 25% Chance vs 42.8% Hit Rate, Peer-reviewed quote) */}
            <SocialProof />

            {/* 4. Problem (The pain of unverified perception, front-loading, AOL hijacking) */}
            <ProblemSection />

            {/* 5. Solution (Framed as outcomes: Cryptographic isolation, somatosensory capture, blind scoring) */}
            <SolutionSection onLaunchApp={onLaunchApp} />

            {/* 6. How It Works (3-step outcome flow: Coordinate -> Sensory Matrix -> 4-Way Decoy Blind Test) */}
            <HowItWorksSection onLaunchApp={onLaunchApp} />

            {/* 7. Features (Outcome-led, 6 core capabilities) */}
            <FeaturesBento onLaunchApp={onLaunchApp} />

            {/* Extended Scientific & Historical Heritage */}
            <HistorySection />
            <MethodologySection onLaunchApp={onLaunchApp} />

            {/* 8. Pricing (Free Tier vs Adept Manual Edition, no card required, limits, support) */}
            <PricingSection
              onLaunchApp={onLaunchApp}
              onOpenStripeCheckout={() => setIsStripeModalOpen(true)}
              membership={membership}
            />

            {/* 9. FAQ (Keyboard-accessible accordion answering real objections) */}
            <FaqSection />

            {/* Compliance & Cognitive Ergonomics */}
            <ComplianceSection />

            {/* 10. Call to Action (Repeats the ONE primary action, no competing decision) */}
            <CallToActionSection onLaunchApp={onLaunchApp} />
          </>
        )}

        {/* Dedicated Companion Manual Sub-Pages */}
        {activeWebPage === 'manual' && (
          <BookShowcasePage
            onOpenStripeCheckout={() => setIsStripeModalOpen(true)}
            onLaunchApp={onLaunchApp}
            membership={membership}
          />
        )}

        {activeWebPage === 'download' && (
          <BookDownloadPage
            onLaunchApp={onLaunchApp}
            membership={membership}
            onActivateMembership={onActivateMembership}
          />
        )}
      </main>

      {/* 11. Footer (Product, Pricing, Manual, Ethics, Terms, Contact) */}
      <WebsiteFooter
        onNavigate={handleNavigate}
        onLaunchApp={onLaunchApp}
      />

      {/* Stripe Payment Gateway Modal */}
      <StripeCheckoutModal
        isOpen={isStripeModalOpen}
        onClose={() => setIsStripeModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Persistent Profile / Sign Up / Sign In Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={userProfile}
        onUserChange={onUserProfileChange}
        onLaunchApp={onLaunchApp}
      />

    </div>
  );
};
