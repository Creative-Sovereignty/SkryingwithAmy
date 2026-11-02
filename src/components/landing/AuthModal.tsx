import React, { useState } from 'react';
import { X, User, Key, Shield, CheckCircle2, Sparkles, LogOut } from 'lucide-react';
import { UserProfile, DifficultyTier } from '../../types';
import { saveUserProfile, clearUserProfile } from '../../utils/storage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onUserChange: (user: UserProfile | null) => void;
  onLaunchApp: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserChange,
  onLaunchApp,
}) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signup');
  const [codename, setCodename] = useState(currentUser?.codename || 'Viewer-704');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [tier, setTier] = useState<DifficultyTier>(currentUser?.clearanceTier || 1);

  if (!isOpen) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newProfile: UserProfile = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      codename: codename.trim() || `Viewer-${Math.floor(100 + Math.random() * 900)}`,
      email: email.trim() || undefined,
      clearanceTier: tier,
      isMember: currentUser?.isMember || false,
      membershipExpiresAt: currentUser?.membershipExpiresAt,
      createdAt: new Date().toISOString(),
    };
    saveUserProfile(newProfile);
    onUserChange(newProfile);
    onClose();
    onLaunchApp();
  };

  const handleSignOut = () => {
    clearUserProfile();
    onUserChange(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-slate-950 border border-teal-500/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-teal-400" />
            <h3 className="font-serif font-bold text-white text-lg">
              {currentUser ? 'Viewer Dossier' : tab === 'signup' ? 'Create Viewer Profile' : 'Sign In'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing Signed-In State */}
        {currentUser ? (
          <div className="p-6 space-y-6">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-teal-400 font-mono uppercase tracking-wider block">Codename</span>
                  <span className="font-mono text-xl font-bold text-white">{currentUser.codename}</span>
                </div>
                {currentUser.isMember && (
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Member
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs text-slate-400 font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">CLEARANCE TIER</span>
                  <span>Tier {currentUser.clearanceTier}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ENROLLED</span>
                  <span>{new Date(currentUser.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  onLaunchApp();
                }}
                className="flex-1 py-3 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-[0_0_15px_rgba(45,212,191,0.35)] transition-all"
              >
                Launch App with This Profile
              </button>

              <button
                onClick={handleSignOut}
                className="px-3.5 py-3 text-xs text-rose-300 hover:text-rose-200 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-lg transition-colors flex items-center gap-1"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Form for new/sign-in */
          <div className="p-6 space-y-6">
            
            {/* Tabs */}
            <div className="flex border-b border-white/10 text-xs font-medium">
              <button
                onClick={() => setTab('signup')}
                className={`flex-1 py-2 text-center transition-colors ${
                  tab === 'signup' ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                New Viewer Profile
              </button>
              <button
                onClick={() => setTab('signin')}
                className={`flex-1 py-2 text-center transition-colors ${
                  tab === 'signin' ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Quick Sign In
              </button>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium font-mono">
                  Viewer Codename
                </label>
                <input
                  type="text"
                  required
                  value={codename}
                  onChange={(e) => setCodename(e.target.value)}
                  placeholder="e.g. Viewer-704, Sol-Observer"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium font-mono">
                  Email (Optional for backup)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="viewer@domain.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium font-mono">
                  Starting Target Clearance
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { t: 1, label: 'T1 Famous' },
                    { t: 2, label: 'T2 Obscure' },
                    { t: 3, label: 'T3 Vectors' },
                  ].map((item) => (
                    <button
                      key={item.t}
                      type="button"
                      onClick={() => setTier(item.t as DifficultyTier)}
                      className={`py-2 text-[11px] font-mono rounded-lg border transition-all ${
                        tier === item.t 
                          ? 'bg-teal-500/20 border-teal-400 text-teal-200' 
                          : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 hover:from-teal-200 hover:to-emerald-300 rounded-lg shadow-[0_0_15px_rgba(45,212,191,0.35)] transition-all"
              >
                {tab === 'signup' ? 'Create Profile & Enter Training' : 'Sign In & Enter Training'}
              </button>
            </form>

            <p className="text-[11px] text-slate-500 text-center font-mono">
              Profile & session history are stored locally on your device.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
