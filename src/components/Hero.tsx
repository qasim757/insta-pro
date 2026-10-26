/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDownToLine, ShieldAlert, CheckCircle2, Info } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { APP_CONFIG } from '../config/appConfig';

interface HeroProps {
  onOpenDisclaimer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDisclaimer }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-white/5">
      {/* Subtle Ambient Background Gradient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-purple-600/15 via-pink-500/10 to-transparent blur-[120px] -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Legal Disclaimer Banner right at the top of Hero */}
        <div className="mb-8 p-3 sm:p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-purple-400 shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-white">Independent Informational Resource:</strong> This website is an educational analysis platform. It is strictly not affiliated with, authorized, or maintained by Instagram or Meta Platforms, Inc.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDisclaimer}
            className="text-pink-400 hover:text-pink-300 font-medium underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            Read Full Disclaimer
          </button>
        </div>

        {/* 2-Column Desktop Grid: Content Left, Smartphone Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Category Kicker (Zero-Pill discipline: clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase">
              <span>Android Application Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Technical Sideloading Guide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Insta Pro APK: Features, Architecture &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Security Guide
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              An exhaustive technical overview of the popular third-party Instagram client modification. Examine auxiliary capabilities including direct media caching, stealth presence controls, and biometric locking alongside critical security assessments, Terms of Service trade-offs, and verified Android sideloading walkthroughs.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                onClick={(e) => handleScrollTo(e, '#download')}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Latest APK (Direct)</span>
              </a>

              <a
                href="#security"
                onClick={(e) => handleScrollTo(e, '#security')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-[#161626] hover:bg-[#1E1E34] border border-white/10 hover:border-purple-500/30 rounded-xl transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <ShieldAlert className="w-4 h-4 text-pink-400" />
                <span>Security & Account Safety</span>
              </a>
            </div>

            {/* Factual Core Parameters (Zero-Pill discipline: Clean unboxed metadata with separators) */}
            <div className="pt-4 border-t border-white/5">
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-y-2 gap-x-3">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Target: Android 5.0+
                </span>
                <span aria-hidden="true">·</span>
                <span>Arch: arm64-v8a / x86</span>
                <span aria-hidden="true">·</span>
                <span>Root Required: No</span>
                <span aria-hidden="true">·</span>
                <span>Format: Standalone Sideload APK</span>
              </div>
            </div>

            {/* Download Status Callout Box */}
            <div className="p-3.5 rounded-xl bg-[#12121E] border border-white/10 flex items-start gap-3">
              <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${APP_CONFIG.APK_DOWNLOAD_URL ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Current Distribution Status: </strong>
                {APP_CONFIG.APK_DOWNLOAD_URL ? (
                  <span className="text-emerald-300 font-medium">
                    Verified package URL configured. Tap the Download button to access the APK package.
                  </span>
                ) : (
                  <span className="text-amber-300">
                    The APK download link is not available yet. We enforce stringent hash and signature audits before authorizing download mirrors.
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Smartphone Mockup with Interactive Feature Demonstrator */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>

        </div>

      </div>
    </section>
  );
};
