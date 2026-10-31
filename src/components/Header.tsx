import React from 'react';
import { 
  Eye, 
  Compass, 
  BarChart3, 
  BookOpen, 
  PlusCircle, 
  Headphones, 
  Wind, 
  Moon, 
  Users,
  Sparkles,
  MessageSquare
} from 'lucide-react';

export type ActiveView = 
  | 'session' 
  | 'daily' 
  | 'circles' 
  | 'guides' 
  | 'dreams' 
  | 'breathing' 
  | 'stats' 
  | 'ametiest'
  | 'protocol';

interface HeaderProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  onNewSession: () => void;
  onToggleRadio: () => void;
  isRadioPlaying?: boolean;
  streakCount: number;
  onOpenAmetiestModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onSelectView,
  onNewSession,
  onToggleRadio,
  isRadioPlaying,
  streakCount,
  onOpenAmetiestModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#080914]/90 backdrop-blur-md border-b border-[#242A5C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single wordmark with animated Teal & Pink Sparkle font */}
        <button
          type="button"
          onClick={() => onSelectView('session')}
          className="text-xl sm:text-2xl font-bold tracking-widest whitespace-nowrap shrink-0 font-display flex items-center gap-2 group hover:opacity-95 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#F472B6] shadow-[0_0_10px_#2DD4BF] animate-pulse" />
          <span className="shimmer-teal-pink-text font-extrabold tracking-widest">
            SCRY
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links with Teal & Pink sparkle shimmer */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <button
            type="button"
            onClick={() => onSelectView('session')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'session'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'session' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Practice</span>
            {activeView === 'session' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('daily')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'daily'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'daily' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Daily</span>
            {streakCount > 0 && (
              <span className="text-[11px] font-mono-code text-[#2DD4BF] px-1 py-0.2 bg-[#1B2544] rounded border border-[#2DD4BF]/30">
                {streakCount}d
              </span>
            )}
            {activeView === 'daily' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('ametiest')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'ametiest'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            <span>Ametiest</span>
            {activeView === 'ametiest' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('circles')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'circles'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'circles' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Circles</span>
            {activeView === 'circles' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('breathing')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'breathing'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'breathing' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Breathwork</span>
            {activeView === 'breathing' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('dreams')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'dreams'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'dreams' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Dreams</span>
            {activeView === 'dreams' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('guides')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'guides'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'guides' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Teachings</span>
            {activeView === 'guides' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('stats')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors relative flex items-center gap-1.5 ${
              activeView === 'stats'
                ? 'shimmer-teal-pink-text font-bold text-sm tracking-wide'
                : 'nav-link-sparkle text-[#9FA6D1]'
            }`}
          >
            {activeView === 'stats' && (
              <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon shrink-0" />
            )}
            <span>Logbook</span>
            {activeView === 'stats' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#5EEAD4] shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            )}
          </button>
        </nav>

        {/* Zone 3: Actions (Ametiest Quick Coach + Ambient Radio Toggle + Primary New Target CTA) */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenAmetiestModal && (
            <button
              type="button"
              onClick={onOpenAmetiestModal}
              title="Open Ametiest Live Session Guide"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#F472B6]/40 bg-[#18122E] hover:border-[#2DD4BF] text-xs transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6] sparkle-icon" />
              <span className="shimmer-teal-pink-text font-semibold hidden sm:inline">
                Ask Ametiest
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={onToggleRadio}
            title="Toggle Binaural Meditation Radio"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
              isRadioPlaying
                ? 'bg-[#1A2548] border-[#2DD4BF] text-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.2)]'
                : 'bg-[#141733] border-[#242A5C] text-[#8A90B8] nav-link-sparkle'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span className="hidden md:inline">Binaural Radio</span>
            {isRadioPlaying && <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />}
          </button>

          <button
            type="button"
            onClick={onNewSession}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] border border-[#2DD4BF]/60 hover:border-[#F472B6]/80 rounded-lg shadow-md shadow-[#2DD4BF]/20 hover:shadow-[#F472B6]/30 transition-all active:scale-95 whitespace-nowrap shrink-0 font-display group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/15 via-[#F472B6]/20 to-[#2DD4BF]/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <PlusCircle className="w-3.5 h-3.5 text-[#2DD4BF] group-hover:text-[#F472B6] transition-colors" />
            <span className="shimmer-teal-pink-text font-bold hidden sm:inline">
              New Target
            </span>
            <span className="shimmer-teal-pink-text font-bold sm:hidden">
              New
            </span>
            <Sparkles className="w-3 h-3 text-[#F472B6] sparkle-icon hidden sm:inline" />
          </button>
        </div>
      </div>

      {/* Mobile Ergonomic Navigation Scroller with Teal-Pink shimmer */}
      <div className="lg:hidden flex items-center justify-between border-t border-[#242A5C]/40 bg-[#0A0C1C] px-3 py-2 text-xs text-[#8A90B8] overflow-x-auto scrollbar-none gap-1">
        <button
          type="button"
          onClick={() => onSelectView('session')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'session'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Eye className={`w-3.5 h-3.5 ${activeView === 'session' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Practice</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('daily')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'daily'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Compass className={`w-3.5 h-3.5 ${activeView === 'daily' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Daily</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('ametiest')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'ametiest'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#F472B6]/40 shadow-[0_0_8px_rgba(244,114,182,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
          <span>Ametiest</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('circles')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'circles'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Users className={`w-3.5 h-3.5 ${activeView === 'circles' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Circles</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('breathing')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'breathing'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Wind className={`w-3.5 h-3.5 ${activeView === 'breathing' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Breath</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('dreams')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'dreams'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <Moon className={`w-3.5 h-3.5 ${activeView === 'dreams' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Dreams</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('guides')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'guides'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <BookOpen className={`w-3.5 h-3.5 ${activeView === 'guides' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Teachings</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectView('stats')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap transition-all ${
            activeView === 'stats'
              ? 'shimmer-teal-pink-text font-bold bg-[#141E38]/90 border border-[#2DD4BF]/40 shadow-[0_0_8px_rgba(45,212,191,0.25)]'
              : 'nav-link-sparkle'
          }`}
        >
          <BarChart3 className={`w-3.5 h-3.5 ${activeView === 'stats' ? 'text-[#2DD4BF]' : ''}`} />
          <span>Logbook</span>
        </button>
      </div>
    </header>
  );
};
