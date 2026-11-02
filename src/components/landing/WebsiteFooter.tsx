import React from 'react';
import { ActiveWebPage } from '../../types';
import { BookOpen, Compass, Shield } from 'lucide-react';

interface WebsiteFooterProps {
  onNavigate: (page: ActiveWebPage) => void;
  onLaunchApp: () => void;
}

export const WebsiteFooter: React.FC<WebsiteFooterProps> = ({ onNavigate, onLaunchApp }) => {
  return (
    <footer className="bg-[#05060d] border-t border-white/10 py-12 px-4 sm:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-teal-400 to-purple-500">
              <img 
                src="/assets/aistudio/60D8DF35-AA1F-4DB0-8999-72D37966F48B-IMG_STYLE_4b45c9a3.jpg" 
                alt="Skry Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-serif tracking-[0.2em] text-base font-bold text-white block">SKRY</span>
              <span className="text-[11px] text-slate-500 font-mono">Blind Remote Viewing Protocol & Laboratory</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 font-medium text-slate-300">
            <button 
              onClick={() => onNavigate('overview')} 
              className="hover:text-teal-300 transition-colors"
            >
              Overview
            </button>
            <a href="#how-it-works" className="hover:text-teal-300 transition-colors">
              How It Works
            </a>
            <a href="#features" className="hover:text-teal-300 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-teal-300 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-teal-300 transition-colors">
              FAQ
            </a>
            <button 
              onClick={() => onNavigate('manual')} 
              className="text-amber-300 hover:text-amber-200 transition-colors"
            >
              The Manual ($19)
            </button>
            <button
              onClick={onLaunchApp}
              className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              Start Free Session &rarr;
            </button>
          </div>

        </div>

        {/* Legal & Historical Note */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} Skry. Based on declassified Coordinate Remote Viewing protocols developed at Stanford Research Institute.
          </p>
          <p>
            Companion Manual by Malychite · Harm None · Empirical Verification
          </p>
        </div>

      </div>
    </footer>
  );
};
