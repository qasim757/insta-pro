/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Download,
  EyeOff,
  Check,
  ShieldCheck,
  Lock,
  Sparkles,
  Sliders,
  Volume2
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'ghost' | 'lock'>('feed');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [ghostModeEnabled, setGhostModeEnabled] = useState(true);
  const [uncompressedUploads, setUncompressedUploads] = useState(true);
  const [appLockEnabled, setAppLockEnabled] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2800);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Interactive Mode Switcher Tabs */}
      <div className="w-full flex items-center justify-between p-1 mb-4 bg-[#141424] border border-white/10 rounded-xl text-xs font-medium text-slate-300">
        <button
          type="button"
          onClick={() => setActiveTab('feed')}
          className={`flex-1 py-1.5 px-2 rounded-lg transition-all duration-150 flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'feed'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
              : 'hover:text-white hover:bg-white/5'
          }`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Media Saver</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ghost')}
          className={`flex-1 py-1.5 px-2 rounded-lg transition-all duration-150 flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'ghost'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
              : 'hover:text-white hover:bg-white/5'
          }`}
        >
          <EyeOff className="w-3.5 h-3.5" />
          <span>Ghost Mode</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('lock')}
          className={`flex-1 py-1.5 px-2 rounded-lg transition-all duration-150 flex items-center justify-center gap-1.5 whitespace-nowrap ${
            activeTab === 'lock'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm'
              : 'hover:text-white hover:bg-white/5'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Privacy & Lock</span>
        </button>
      </div>

      {/* Phone Chassis */}
      <div className="relative w-full aspect-[9/18.5] max-h-[580px] bg-[#0E0E18] rounded-[44px] p-3 shadow-2xl shadow-purple-950/40 border-[3.5px] border-slate-700/60 ring-1 ring-white/10 overflow-hidden flex flex-col">
        {/* Top Punch Hole Camera & Speaker Grill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          <div className="w-12 h-1 bg-slate-800 rounded-full" />
        </div>
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-30 w-3.5 h-3.5 bg-black rounded-full border border-slate-800/80 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-blue-950 rounded-full" />
        </div>

        {/* Device Status Bar */}
        <div className="pt-2 px-4 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-20 shrink-0 select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="text-slate-400">5G</span>
            <div className="w-4 h-2.5 border border-slate-400 rounded-sm p-[1px] flex items-center">
              <div className="h-full w-full bg-slate-200 rounded-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Screen Area with Internal Instagram-like UI */}
        <div className="relative flex-1 bg-[#09090F] rounded-[32px] overflow-hidden flex flex-col border border-white/5">
          
          {/* Header Bar inside Mockup */}
          <div className="px-3.5 py-2 flex items-center justify-between border-b border-white/5 bg-[#0D0D17]/90 shrink-0">
            <span className="font-bold tracking-tight text-sm bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Instagram <span className="text-[10px] text-pink-400 font-mono">PRO</span>
            </span>
            <div className="flex items-center gap-3 text-slate-300">
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* TAB 1: MEDIA SAVER FEED VIEW */}
          {activeTab === 'feed' && (
            <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
              {/* Stories Bar */}
              <div className="flex gap-2.5 overflow-x-hidden pb-1 border-b border-white/5">
                {[
                  { name: 'Your Story', avatar: 'bg-purple-600', ring: 'border-purple-500' },
                  { name: 'alex_photo', avatar: 'bg-pink-600', ring: 'border-pink-500' },
                  { name: 'urban_art', avatar: 'bg-amber-600', ring: 'border-amber-500' },
                  { name: 'tokyo_drift', avatar: 'bg-cyan-600', ring: 'border-cyan-500' },
                ].map((st, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 shrink-0 w-12">
                    <div className={`w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400`}>
                      <div className="w-full h-full rounded-full bg-[#0E0E18] flex items-center justify-center text-[10px] font-bold text-white">
                        {st.name[0].toUpperCase()}
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400 truncate w-full text-center">
                      {st.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feed Post Card */}
              <div className="bg-[#12121E] rounded-xl overflow-hidden border border-white/5 shadow-sm">
                {/* Author Info */}
                <div className="p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold text-white">
                      K
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white leading-tight">kyoto_visuals</div>
                      <div className="text-[9px] text-slate-400">Gion District · Original Audio</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-400 font-medium">Following</span>
                </div>

                {/* Post Visual Canvas (High aesthetic stylized photography preview) */}
                <div className="relative aspect-square w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 flex flex-col justify-between p-3 overflow-hidden">
                  {/* Subtle Grid & Visual elements */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#F472B6_1px,transparent_1px)] [background-size:14px_14px]" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-medium text-purple-300 border border-purple-500/30">
                      HDR 1080p Original
                    </span>
                    <span className="p-1 rounded-full bg-black/60 backdrop-blur-md text-white/80">
                      <Volume2 className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Aesthetic Graphic inside phone screen */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/40 flex items-center justify-center mb-2">
                      <Sparkles className="w-6 h-6 text-pink-400" />
                    </div>
                    <span className="text-xs font-semibold text-slate-100 tracking-tight">
                      Night Lights of Higashiyama
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Captured in Uncompressed RAW
                    </span>
                  </div>

                  {/* Interactive Download Floating Micro-Action */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[9px] text-slate-400">Swipe for details</span>
                    <button
                      type="button"
                      onClick={handleSimulateDownload}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-semibold shadow-lg shadow-purple-900/50 transition-transform active:scale-95"
                      title="Test direct media download UI"
                    >
                      <Download className="w-3 h-3" />
                      <span>{downloadSuccess ? 'Downloaded!' : 'Save Media'}</span>
                    </button>
                  </div>
                </div>

                {/* Direct Action Icons Bar */}
                <div className="p-2.5 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsLiked(!isLiked)}
                      className="transition-transform active:scale-125"
                      aria-label="Like post"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'text-pink-500 fill-pink-500' : 'text-slate-300'}`} />
                    </button>
                    <MessageCircle className="w-4 h-4 text-slate-300" />
                    <Send className="w-4 h-4 text-slate-300" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSimulateDownload}
                      className="p-1 rounded text-purple-400 hover:text-purple-300 hover:bg-purple-950/40"
                      aria-label="Save media directly"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSaved(!isSaved)}
                      aria-label="Bookmark post"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'text-purple-400 fill-purple-400' : 'text-slate-300'}`} />
                    </button>
                  </div>
                </div>

                {/* Download Status Toast Simulation */}
                {downloadSuccess && (
                  <div className="mx-2 mb-2 p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center gap-2 text-emerald-300 text-[10px] animate-fade-in">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Media saved to <strong>/DCIM/InstaPro/</strong></span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: GHOST MODE SIMULATION */}
          {activeTab === 'ghost' && (
            <div className="flex-1 p-3.5 space-y-3 flex flex-col justify-center">
              <div className="text-center space-y-1">
                <div className="inline-flex p-2.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-400 mb-1">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-white">Stealth & Ghost Controls</h4>
                <p className="text-[10px] text-slate-400 max-w-[220px] mx-auto">
                  Browse profiles, stories, and live sessions without broadcasting your presence.
                </p>
              </div>

              <div className="bg-[#12121E] rounded-xl p-3 border border-white/5 space-y-2.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Hide View Stories</span>
                  <button
                    type="button"
                    onClick={() => setGhostModeEnabled(!ghostModeEnabled)}
                    className={`w-8 h-4 rounded-full transition-colors relative ${
                      ghostModeEnabled ? 'bg-purple-600' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`block w-3 h-3 bg-white rounded-full transition-transform absolute top-0.5 ${
                        ghostModeEnabled ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
                <div className="text-[9px] text-slate-400">
                  {ghostModeEnabled ? '✓ Your username is excluded from seen lists' : 'Standard viewer logging enabled'}
                </div>

                <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                  <span className="text-slate-200">Hide Typing Indicator</span>
                  <span className="text-[10px] text-purple-400 font-mono">Active</span>
                </div>

                <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                  <span className="text-slate-200">Do Not Mark Read (DMs)</span>
                  <span className="text-[10px] text-pink-400 font-mono">Active</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[9px] text-purple-300">
                Insta Pro injects client-side hooks to prevent sending read receipts or presence telemetry packets.
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY & APP LOCK SIMULATION */}
          {activeTab === 'lock' && (
            <div className="flex-1 p-3.5 space-y-3 flex flex-col justify-center">
              <div className="text-center space-y-1">
                <div className="inline-flex p-2.5 rounded-full bg-pink-950/70 border border-pink-500/40 text-pink-400 mb-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-white">In-App Security Suite</h4>
                <p className="text-[10px] text-slate-400 max-w-[220px] mx-auto">
                  Protect chats, retain full media quality, and block in-feed sponsored ads.
                </p>
              </div>

              <div className="bg-[#12121E] rounded-xl p-3 border border-white/5 space-y-2.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-200">PIN / Biometric Lock</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAppLockEnabled(!appLockEnabled)}
                    className={`w-8 h-4 rounded-full transition-colors relative ${
                      appLockEnabled ? 'bg-purple-600' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`block w-3 h-3 bg-white rounded-full transition-transform absolute top-0.5 ${
                        appLockEnabled ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                  <span className="text-slate-200">Max Quality Uploads</span>
                  <button
                    type="button"
                    onClick={() => setUncompressedUploads(!uncompressedUploads)}
                    className={`w-8 h-4 rounded-full transition-colors relative ${
                      uncompressedUploads ? 'bg-pink-600' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`block w-3 h-3 bg-white rounded-full transition-transform absolute top-0.5 ${
                        uncompressedUploads ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                  <span className="text-slate-200">Disable Feed Ads</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Filtered</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom App Navigation inside Mockup */}
          <div className="px-4 py-2 bg-[#0D0D17] border-t border-white/5 flex items-center justify-between text-slate-400 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-600" />
            <span className="w-3 h-3 border border-slate-600 rounded-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
          </div>
        </div>

        {/* Bottom Android Home Pill / Navigation bar */}
        <div className="pt-2 pb-0.5 flex justify-center shrink-0">
          <div className="w-28 h-1 bg-slate-600/70 rounded-full" />
        </div>
      </div>

      <span className="mt-3 text-[11px] text-slate-400 text-center">
        Interactive UI Demonstration · Tap tabs above to toggle feature simulations
      </span>
    </div>
  );
};
