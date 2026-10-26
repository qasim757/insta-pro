/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowDownToLine,
  Lock,
  ShieldCheck,
  AlertTriangle,
  Code2,
  FileCheck2,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Settings2,
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const DownloadCard: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [showConfigHelper, setShowConfigHelper] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [activeDownloadUrl, setActiveDownloadUrl] = useState<string>(
    APP_CONFIG.APK_DOWNLOAD_URL || ''
  );
  const [showUrlEditor, setShowUrlEditor] = useState(false);
  const [urlSavedNotice, setUrlSavedNotice] = useState(false);

  // Initialize from localStorage if the user previously customized the link
  useEffect(() => {
    const saved = localStorage.getItem('instapro_custom_apk_url');
    if (saved && saved.trim().length > 0) {
      setActiveDownloadUrl(saved);
      setCustomUrlInput(saved);
    } else if (APP_CONFIG.APK_DOWNLOAD_URL) {
      setActiveDownloadUrl(APP_CONFIG.APK_DOWNLOAD_URL);
      setCustomUrlInput(APP_CONFIG.APK_DOWNLOAD_URL);
    }
  }, []);

  const isAvailable = Boolean(activeDownloadUrl && activeDownloadUrl.trim().length > 0);

  const sampleConfigSnippet = `// In /src/config/appConfig.ts
export const APP_CONFIG = {
  // Set your authorized, verified HTTPS APK link here:
  APK_DOWNLOAD_URL: "${activeDownloadUrl || 'https://download.instapro.app/InstaPro_Latest.apk'}",
  APK_MIRROR_URL: "https://instapro.app/download",
  EXPECTED_SHA256_HASH: "${APP_CONFIG.EXPECTED_SHA256_HASH || '7f83b1657ff1...'}",
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleConfigSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyHash = () => {
    if (APP_CONFIG.EXPECTED_SHA256_HASH) {
      navigator.clipboard.writeText(APP_CONFIG.EXPECTED_SHA256_HASH);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim().length > 0) {
      setActiveDownloadUrl(customUrlInput.trim());
      localStorage.setItem('instapro_custom_apk_url', customUrlInput.trim());
      setUrlSavedNotice(true);
      setTimeout(() => setUrlSavedNotice(false), 2500);
    }
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('instapro_custom_apk_url');
    const defaultUrl = APP_CONFIG.APK_DOWNLOAD_URL || '';
    setActiveDownloadUrl(defaultUrl);
    setCustomUrlInput(defaultUrl);
    setUrlSavedNotice(true);
    setTimeout(() => setUrlSavedNotice(false), 2500);
  };

  return (
    <section id="download" className="py-16 sm:py-20 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
            Package Distribution & Direct Links
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Insta Pro APK Download Hub
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Verified package links for Android. You can download directly via our active mirror, inspect the cryptographic hash, or configure a custom APK link.
          </p>
        </div>

        {/* Central Download Interface Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Download Status Panel (Col span 7) */}
          <div className="lg:col-span-7 bg-[#12121E] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ArrowDownToLine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Insta Pro Latest APK</h3>
                  <p className="text-xs text-slate-400">Standalone Sideload Package for Android 5.0+</p>
                </div>
              </div>
              
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                isAvailable
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5'
                  : 'bg-amber-950/70 text-amber-300 border border-amber-500/30'
              }`}>
                {isAvailable ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Download Ready</span>
                  </>
                ) : (
                  'Download Unset'
                )}
              </span>
            </div>

            {/* Core Status Message Box */}
            <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
              isAvailable
                ? 'bg-purple-950/20 border-purple-500/30 text-purple-200'
                : 'bg-amber-950/20 border-amber-500/25 text-amber-200'
            }`}>
              <ShieldCheck className={`w-5 h-5 shrink-0 mt-0.5 ${isAvailable ? 'text-purple-400' : 'text-amber-400'}`} />
              <div className="text-xs sm:text-sm leading-relaxed space-y-1">
                <p className="font-semibold text-white">
                  {isAvailable ? 'Active Direct APK Download Available' : 'The APK download link is not available yet.'}
                </p>
                <p className="text-slate-300 text-xs">
                  {isAvailable
                    ? 'Direct package link configured. Click the button below to initiate the APK download. Ensure you verify the SHA-256 signature before installing.'
                    : 'The direct download URL is unset. You can specify a verified link using the Link Manager below.'}
                </p>
                {isAvailable && (
                  <p className="text-[11px] font-mono text-pink-300 truncate pt-1">
                    Source: {activeDownloadUrl}
                  </p>
                )}
              </div>
            </div>

            {/* Primary Download Button */}
            <div className="space-y-3 pt-2">
              {isAvailable ? (
                <a
                  href={activeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 flex items-center justify-center gap-3 shadow-lg shadow-purple-900/40 transition-all duration-150 active:scale-[0.99] group text-sm sm:text-base"
                >
                  <ArrowDownToLine className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                  <span>Download Insta Pro APK (Direct)</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full py-4 px-6 rounded-xl font-medium text-slate-400 bg-[#181829] border border-white/5 cursor-not-allowed flex items-center justify-center gap-3 transition-colors select-none"
                >
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold">The APK download link is not available yet.</span>
                </button>
              )}

              {/* Mirror Links Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <a
                  href={APP_CONFIG.APK_MIRROR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>Official Release Portal</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={APP_CONFIG.APK_BACKUP_MIRROR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-pink-400" />
                    <span>Backup GitHub Mirror</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Cryptographic SHA-256 Hash Box */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-purple-400" />
                  Package SHA-256 Checksum:
                </span>
                <button
                  type="button"
                  onClick={handleCopyHash}
                  className="text-purple-400 hover:text-purple-300 text-xs inline-flex items-center gap-1"
                >
                  {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
                </button>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0A0A10] border border-white/10 font-mono text-[11px] text-slate-300 break-all select-all">
                {APP_CONFIG.EXPECTED_SHA256_HASH || 'Audit Pending Release Verification'}
              </div>
            </div>

          </div>

          {/* Right Column: Custom APK Link Manager & Webmaster Tools (Col span 5) */}
          <div className="lg:col-span-5 bg-[#141424] border border-purple-500/20 rounded-2xl p-6 sm:p-7 space-y-5 shadow-lg">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-400">
                <Settings2 className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Custom APK Link Manager
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowUrlEditor(!showUrlEditor)}
                className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-4"
              >
                {showUrlEditor ? 'Hide Editor' : 'Edit URL'}
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Have your own direct APK URL or preferred mirror (e.g. Google Drive, Mediafire, or Telegram)? You can update the download target in real time:
            </p>

            {/* Interactive URL Input Form */}
            <form onSubmit={handleApplyCustomUrl} className="space-y-3">
              <div>
                <label htmlFor="custom-apk-url" className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Active APK Download URL:
                </label>
                <input
                  id="custom-apk-url"
                  type="url"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="https://example.com/downloads/insta-pro.apk"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#0A0A10] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 font-mono"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Apply Link Now</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetToDefault}
                  title="Reset to default official URL"
                  className="p-2 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {urlSavedNotice && (
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[11px] flex items-center gap-1.5 animate-fade-in">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download link updated successfully!</span>
                </div>
              )}
            </form>

            {/* Code Snippet Box for Permanent Codebase Update */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <Code2 className="w-3.5 h-3.5 text-pink-400" />
                  Codebase Configuration:
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="relative bg-[#0A0A10] rounded-xl p-3 border border-white/10 font-mono text-[10px] text-purple-300 overflow-x-auto">
                <pre>{sampleConfigSnippet}</pre>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowConfigHelper(!showConfigHelper)}
                className="text-xs text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4"
              >
                {showConfigHelper ? 'Hide instructions' : 'View deployment guide'}
              </button>
              
              {showConfigHelper && (
                <div className="mt-2.5 p-3 rounded-lg bg-[#0E0E18] border border-white/5 text-[11px] text-slate-300 space-y-1.5 animate-fade-in">
                  <p>• File: <code className="text-pink-300">/src/config/appConfig.ts</code></p>
                  <p>• Constant: <code className="text-pink-300">APP_CONFIG.APK_DOWNLOAD_URL</code></p>
                  <p>• Primary Direct APK: <code className="text-emerald-300 text-[10px]">https://download.instapro.app/InstaPro_Latest.apk</code></p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
