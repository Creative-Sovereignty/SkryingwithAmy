import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  X,
  BookOpen,
  Eye,
  Compass,
  ShieldAlert,
  RefreshCw,
  ArrowRight,
  History,
  Layers,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

export interface AmetiestSessionContext {
  phase: 'viewing' | 'revealed';
  code: string;
  selectedDescriptors?: string[];
  freeText?: string;
  targetName?: string;
  targetLocation?: string;
  scorePercentage?: number;
  verdict?: string;
}

export interface AmetiestMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

interface AmetiestGuideProps {
  sessionContext: AmetiestSessionContext;
  onStartSession?: () => void;
  onOpenTeachings?: () => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

const QUICK_PROMPTS = [
  {
    category: 'Live Session',
    label: 'Help me clear an Analytic Overlay (AOL)',
    prompt: 'My mind just tried to name the target. How do I declare and clear an Analytic Overlay (AOL) right now?',
  },
  {
    category: 'Method',
    label: 'How to execute a Stage 1 Ideogram',
    prompt: 'Explain how to do a Stage 1 ideogram and cool-down before viewing a blind coordinate.',
  },
  {
    category: 'History',
    label: 'SRI, Ingo Swann & Project Stargate',
    prompt: 'Tell me the documented history of the SRI program, Ingo Swann, and Project Stargate.',
  },
  {
    category: 'Framework',
    label: 'Remote Viewing vs. Astral Travel',
    prompt: 'How does Malychite explain the difference between remote viewing and astral travel in Journey Through Dimensions?',
  },
];

export const AmetiestGuide: React.FC<AmetiestGuideProps> = ({
  sessionContext,
  onStartSession,
  onOpenTeachings,
  isModal = false,
  onCloseModal,
}) => {
  const [messages, setMessages] = useState<AmetiestMessage[]>(() => [
    {
      id: 'ametiest_welcome',
      role: 'model',
      text: "Welcome. I am Ametiest, the AI guide on Malychite's site and here inside Scry. Whether you want to learn the documented history of SRI and Stargate, practice the step-by-step protocol—ideograms, raw sensory data, and declaring Analytic Overlay (AOL)—or debrief your active target session, I am here to help.",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (textToSend?: string) => {
    const trimmed = (textToSend ?? input).trim();
    if (!trimmed || isLoading) return;

    const userMsg: AmetiestMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map(m => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/ametiest/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
          sessionContext,
        }),
      });

      const data = await response.json();
      const replyMsg: AmetiestMessage = {
        id: `model_${Date.now()}`,
        role: 'model',
        text:
          data.reply ||
          'Take a slow breath and return to raw sensory perceptions—colors, temperatures, and textures—before naming anything.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, replyMsg]);
    } catch {
      const fallbackMsg: AmetiestMessage = {
        id: `fallback_${Date.now()}`,
        role: 'model',
        text: 'When practicing against a blind coordinate in Scry, remember to write down any Analytic Overlay (AOL)—your mind\'s urge to guess what the target is—set it aside, and keep describing raw shapes, textures, and temperatures.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSessionDebriefPrompt = () => {
    if (sessionContext.phase === 'revealed' && sessionContext.targetName) {
      sendMessage(
        `Can we debrief my session for coordinate ${sessionContext.code}? The target was ${sessionContext.targetName} (${sessionContext.scorePercentage}% match). How should I evaluate my sensory impressions?`
      );
    } else {
      sendMessage(
        `I am currently viewing blind coordinate ${sessionContext.code}. Guide me through a brief cool-down and how to record raw sensory impressions without front-loading.`
      );
    }
  };

  const chatInterface = (
    <div className="bg-[#0D0F22] border border-[#242A5C] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[560px]">
      {/* Chat Header */}
      <div className="px-5 py-4 border-b border-[#242A5C] bg-gradient-to-r from-[#141733] via-[#19153A] to-[#10232E] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2DD4BF] via-[#F472B6] to-[#C084FC] p-[2px] shadow-[0_0_15px_rgba(244,114,182,0.35)]">
            <div className="w-full h-full rounded-full bg-[#080914] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#F472B6] sparkle-icon" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold font-display shimmer-teal-pink-text">
                AMETIEST
              </h2>
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded-full bg-[#1B1F44] border border-[#F472B6]/40 text-[#F9A8D4]">
                Scry Linked Guide
              </span>
            </div>
            <p className="text-xs text-[#9FA6D1]">
              Malychite’s Remote Viewing Mentor · History, Protocol & Live Session Sync
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Live Scry Coordinate Badge */}
          <button
            type="button"
            onClick={handleSessionDebriefPrompt}
            title="Ask Ametiest about your current Scry coordinate"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080914] border border-[#2DD4BF]/40 hover:border-[#F472B6]/60 text-xs transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="font-mono-code text-[#E0E2EC]">{sessionContext.code}</span>
            <span className="text-[10px] text-[#5EEAD4] uppercase">
              {sessionContext.phase === 'revealed' ? 'Debrief' : 'Live Sync'}
            </span>
          </button>

          {isModal && onCloseModal && (
            <button
              type="button"
              onClick={onCloseModal}
              className="p-1.5 rounded-lg text-[#8A90B8] hover:text-white hover:bg-[#1B1F44] transition-colors"
              aria-label="Close Ametiest Guide"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#080914]/60">
        {messages.map(msg => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2DD4BF] to-[#F472B6] p-[1.5px] shrink-0 mt-1">
                  <div className="w-full h-full rounded-full bg-[#080914] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  </div>
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gradient-to-r from-[#1E1B4B] to-[#311042] border border-[#F472B6]/40 text-white rounded-br-xs shadow-md'
                    : 'bg-[#12152E] border border-[#242A5C] text-[#E0E2EC] rounded-bl-xs shadow-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span className="block text-[10px] text-[#71779E] mt-1.5 text-right font-mono-code">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2.5 text-xs text-[#9FA6D1] pl-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#2DD4BF]" />
            <span className="shimmer-teal-pink-text font-medium">
              Ametiest is attuning to your query...
            </span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Quick Prompt Chips */}
      <div className="px-4 py-2.5 bg-[#0A0C1C] border-t border-[#242A5C]/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <button
          type="button"
          onClick={handleSessionDebriefPrompt}
          disabled={isLoading}
          className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-[#1A2548] border border-[#2DD4BF]/50 text-[#5EEAD4] hover:border-[#F472B6] transition-all shrink-0 font-medium"
        >
          {sessionContext.phase === 'revealed'
            ? `Debrief ${sessionContext.code}`
            : `Coach Coordinate ${sessionContext.code}`}
        </button>
        {QUICK_PROMPTS.map((q, idx) => (
          <button
            key={idx}
            type="button"
            disabled={isLoading}
            onClick={() => sendMessage(q.prompt)}
            className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-[#141733] hover:bg-[#1B1F44] border border-[#242A5C] text-[#9FA6D1] hover:text-white transition-colors shrink-0"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={e => {
          e.preventDefault();
          sendMessage();
        }}
        className="p-3 sm:p-4 bg-[#0D0F22] border-t border-[#242A5C] flex items-center gap-2.5"
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={isLoading}
          placeholder="Ask Ametiest about ideograms, AOL quenching, Stargate history, or your session..."
          className="flex-1 bg-[#080914] border border-[#242A5C] focus:border-[#2DD4BF] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#5A608B] focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2DD4BF] via-[#F472B6] to-[#C084FC] text-[#080914] font-bold text-xs uppercase tracking-wider disabled:opacity-40 transition-all shadow-md active:scale-95 flex items-center gap-1.5 font-display"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="w-full max-w-2xl">{chatInterface}</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-8">
      {/* Hero Bridge Banner: Malychite's Site + Ametiest + Scry */}
      <div className="bg-gradient-to-br from-[#141738] via-[#0D0F22] to-[#19102C] border border-[#242A5C] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080914] border border-[#2DD4BF]/40 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6] sparkle-icon" />
              <span className="shimmer-teal-pink-text font-semibold">
                Malychite’s Remote Viewing Sanctuary · Linked with Scry
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Ametiest — Protocol Guide & Dimensional Bridge
            </h1>
            <p className="text-sm text-[#9FA6D1] leading-relaxed">
              Malychite is an author, Wiccan teacher, and Hermetic practitioner who wrote{' '}
              <em className="text-[#F3E8FF]">Journey Through Dimensions</em> and built{' '}
              <strong className="text-[#2DD4BF]">Scry</strong> for practicing remote viewing against real blind targets. Ametiest links both worlds—guiding your live target sessions while teaching documented SRI/Stargate history and clean sensory method.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onStartSession && (
              <button
                type="button"
                onClick={onStartSession}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] border border-[#2DD4BF]/60 hover:border-[#F472B6] text-xs font-bold uppercase tracking-wider font-display flex items-center gap-2 shadow-md transition-all"
              >
                <Eye className="w-4 h-4 text-[#2DD4BF]" />
                <span className="shimmer-teal-pink-text">Return to Target ({sessionContext.code})</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F472B6]" />
              </button>
            )}
            {onOpenTeachings && (
              <button
                type="button"
                onClick={onOpenTeachings}
                className="px-4 py-2.5 rounded-xl bg-[#141733] hover:bg-[#1B1F44] border border-[#242A5C] text-xs text-[#D8B4FE] font-medium flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#2DD4BF]" />
                <span>Journey Through Dimensions & Essays</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Live Chat + 4 Pillars from Ametiest's Charter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">{chatInterface}</div>

        {/* Right Column: Ametiest's 4 Pillars & Active Session Link */}
        <div className="space-y-4">
          {/* Active Scry Session Telemetry Card */}
          <div className="bg-[#0D0F22] border border-[#242A5C] rounded-2xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#2DD4BF]">
                Active Scry Link
              </span>
              <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#141733] border border-[#2DD4BF]/30 text-[#E0E2EC]">
                {sessionContext.code}
              </span>
            </div>
            <p className="text-xs text-[#9FA6D1] leading-relaxed mb-3">
              {sessionContext.phase === 'revealed'
                ? `Target unveiled: ${sessionContext.targetName} (${sessionContext.scorePercentage}% match). Ask Ametiest to review your hits and Analytic Overlays.`
                : `Blind session in progress (${sessionContext.selectedDescriptors?.length || 0} descriptors logged). Ametiest keeps the target blind while coaching your protocol.`}
            </p>
            <button
              type="button"
              onClick={handleSessionDebriefPrompt}
              className="w-full py-2 px-3 rounded-xl bg-[#141733] hover:bg-[#1B1F44] border border-[#2DD4BF]/40 text-xs font-medium text-[#5EEAD4] flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F472B6]" />
              <span>
                {sessionContext.phase === 'revealed'
                  ? 'Analyze Unveiled Session with Ametiest'
                  : 'Coach My Blind Coordinate Session'}
              </span>
            </button>
          </div>

          {/* 4 Pillars */}
          <div className="bg-[#0D0F22] border border-[#242A5C] rounded-2xl p-5 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider font-display shimmer-teal-pink-text">
              What Ametiest Helps With
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#080914] border border-[#242A5C]/60">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <History className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>1. Documented History</span>
                </div>
                <p className="text-[#8A90B8] leading-relaxed">
                  SRI (Targ & Puthoff), Ingo Swann’s coordinate method, Pat Price, Joe McMoneagle, Grill Flame, Sun Streak, and Stargate (declassified 1995).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#080914] border border-[#242A5C]/60">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#F472B6]" />
                  <span>2. Practical Method</span>
                </div>
                <p className="text-[#8A90B8] leading-relaxed">
                  Pre-session cool-down, Stage 1 ideograms, raw sensory descriptors before naming, and declaring Analytic Overlay (AOL).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#080914] border border-[#242A5C]/60">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>3. Malychite’s Framework</span>
                </div>
                <p className="text-[#8A90B8] leading-relaxed">
                  How structured protocol-driven remote viewing in <strong>Scry</strong> sits alongside experiential astral work in <em>Journey Through Dimensions</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
