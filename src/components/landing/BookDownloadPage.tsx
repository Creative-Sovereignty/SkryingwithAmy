import React, { useState } from 'react';
import { 
  Download, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Key, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import { AppMembership } from '../../types';

interface BookDownloadPageProps {
  onLaunchApp: () => void;
  membership: AppMembership;
  onActivateMembership: () => void;
}

export const BookDownloadPage: React.FC<BookDownloadPageProps> = ({
  onLaunchApp,
  membership,
  onActivateMembership,
}) => {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const handleDownload = () => {
    setDownloadTriggered(true);
    // Ensure membership is activated upon download
    if (!membership.isActive) {
      onActivateMembership();
    }
  };

  const formattedExpiry = membership.expiresAt 
    ? new Date(membership.expiresAt).toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) 
    : '30 Days from today';

  return (
    <div className="py-12 px-4 sm:px-8 max-w-4xl mx-auto space-y-10 animate-fadeIn">
      
      {/* Thank you and celebration banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-purple-950/40 to-slate-900 border border-amber-400/30 text-center space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-teal-400 p-0.5 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)]">
          <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-amber-300" />
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-teal-300 font-mono">Payment Completed</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Welcome to the Circle of Observers
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Your copy of <em className="text-amber-300 not-italic font-medium">Remote Viewing: Inner Vision, Outer Knowledge</em> is ready, 
            and your 1-month membership to the Skry training application is activated.
          </p>
        </div>
      </div>

      {/* Primary Download & Membership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Book Download Card */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>DIGITAL EDITION · PDF</span>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-20 sm:w-24 aspect-[3/4] rounded-lg overflow-hidden border border-amber-400/30 shadow-md shrink-0">
                <img
                  src="/src/assets/images/manual_book_monograph_1793624906437.jpg"
                  alt="Manual Book Cover"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                  Download Full 73-Page Manual
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  By Malychite · 20 practical drills, 30-day curriculum, Hermetic axioms, and field log templates.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href="/assets/aistudio/SCRY_Journey_Through_Dimensions_746ff621.pdf"
              download="Skry-Remote-Viewing-Manual-Malychite.pdf"
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-100 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (73 Pages)</span>
            </a>

            {downloadTriggered && (
              <p className="text-[11px] text-teal-300 text-center flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Download initiated. Keep a copy in your files.</span>
              </p>
            )}
          </div>
        </div>

        {/* 1-Month Membership Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 border border-teal-500/30 space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>INCLUDED BONUS</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-400/30">
                Active Member
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white">
              1-Month Skry App Access
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed">
              Your account clearance is elevated. Enjoy unrestricted access to all target tiers (T1 Famous, T2 Obscure, T3 Vectors), 
              the 30-day curriculum tracker, and the Ametiest AI session debrief mentor.
            </p>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Plan:</span>
                <span className="text-teal-300 font-medium">Adept Scholar</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Access Active Until:</span>
                <span className="text-amber-300">{formattedExpiry}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onLaunchApp}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all"
            >
              <span>Launch Skry Training App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Day 1 Quick Start from Chapter 19 */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>CHAPTER 19 QUICK-START · DAY 1 CURRICULUM</span>
        </div>

        <h4 className="font-serif text-lg font-bold text-white">
          Your First 24 Hours in the Program
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold block">01. Read Foundations</span>
            <p className="text-slate-400">
              Read Chapters 1 & 2 of the manual to understand what separates remote viewing from mere daydreaming.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold block">02. Write Your "Why"</span>
            <p className="text-slate-400">
              Note what would convince you this works or does not work in your notebook. Date it for Day 30.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold block">03. Run First Session</span>
            <p className="text-slate-400">
              Enter the Skry App, receive your blind coordinate, and capture your first Stage 1 reflex ideogram.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
