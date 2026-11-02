import React from 'react';
import { ActiveWebPage, UserProfile, AppMembership } from '../../types';
import { Sparkles, BookOpen, Shield, Compass, Book, User, ArrowRight } from 'lucide-react';

interface WebsiteNavProps {
  activePage: ActiveWebPage;
  onNavigate: (page: ActiveWebPage) => void;
  onLaunchApp: () => void;
  onOpenAuth: () => void;
  userProfile: UserProfile | null;
  membership: AppMembership;
}

export const WebsiteNav: React.FC<WebsiteNavProps> = ({
  activePage,
  onNavigate,
  onLaunchApp,
  onOpenAuth,
  userProfile,
  membership,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#080914]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Brand Wordmark with Sacred Eye Logo */}
        <div 
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-teal-400 to-purple-500 shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all">
            <img 
              src="/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg" 
              alt="Skry Sacred Eye Emblem" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
              SKRY
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs tracking-wider uppercase font-medium text-slate-300">
          <button
            onClick={() => onNavigate('overview')}
            className={`transition-colors hover:text-white whitespace-nowrap ${
              activePage === 'overview' ? 'text-teal-400 font-semibold border-b border-teal-400 pb-0.5' : ''
            }`}
          >
            Overview
          </button>

          <a
            href="#how-it-works"
            onClick={(e) => {
              if (activePage !== 'overview') {
                e.preventDefault();
                onNavigate('overview');
                setTimeout(() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-teal-300 transition-colors whitespace-nowrap"
          >
            How It Works
          </a>

          <a
            href="#features"
            onClick={(e) => {
              if (activePage !== 'overview') {
                e.preventDefault();
                onNavigate('overview');
                setTimeout(() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-teal-300 transition-colors whitespace-nowrap"
          >
            Features
          </a>

          <a
            href="#pricing"
            onClick={(e) => {
              if (activePage !== 'overview') {
                e.preventDefault();
                onNavigate('overview');
                setTimeout(() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-teal-300 transition-colors whitespace-nowrap"
          >
            Pricing
          </a>

          <a
            href="#faq"
            onClick={(e) => {
              if (activePage !== 'overview') {
                e.preventDefault();
                onNavigate('overview');
                setTimeout(() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-teal-300 transition-colors whitespace-nowrap"
          >
            FAQ
          </a>

          <button
            onClick={() => onNavigate('manual')}
            className={`flex items-center gap-1.5 transition-colors hover:text-white whitespace-nowrap ${
              activePage === 'manual' ? 'text-amber-300 font-semibold border-b border-amber-300 pb-0.5' : 'text-amber-200/90'
            }`}
          >
            <Book className="w-3.5 h-3.5 text-amber-400" />
            <span>The Manual</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Auth Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {membership.isActive && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-md">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Member Active
            </span>
          )}

          {userProfile ? (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 rounded-md transition-colors whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-mono text-teal-200">{userProfile.codename}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Sign In
            </button>
          )}

          <button
            onClick={onLaunchApp}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-lg shadow-[0_0_15px_rgba(45,212,191,0.35)] hover:shadow-[0_0_22px_rgba(45,212,191,0.55)] transition-all whitespace-nowrap"
          >
            <span>Launch Training</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
