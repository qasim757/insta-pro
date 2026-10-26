/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Eye,
  KeyRound,
  FileSearch,
  UserX
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Platform Sideloading Risk Profile',
      icon: AlertTriangle,
      color: 'text-amber-400',
      bgColor: 'bg-amber-950/40',
      borderColor: 'border-amber-500/30',
      summary: 'APK packages distributed outside the Google Play Store do not undergo automated Google Bouncer validation or developer identity verification.',
      guidance: 'Always inspect the APK with multiple malware engines (e.g. VirusTotal) and verify cryptographic hashes before triggering package installation.'
    },
    {
      title: 'Meta Terms of Service Enforcement',
      icon: UserX,
      color: 'text-rose-400',
      bgColor: 'bg-rose-950/40',
      borderColor: 'border-rose-500/30',
      summary: 'Meta Platforms explicitly prohibits the use of unauthorized third-party clients, reverse-engineered APKs, and automated scraping tools under Section 4 of their Terms of Use.',
      guidance: 'Account risk: Meta automated systems may issue temporary checkpoint locks or permanent bans. Never utilize your primary business or high-value personal account on modified clients.'
    },
    {
      title: 'Credential & Session Security',
      icon: KeyRound,
      color: 'text-purple-400',
      bgColor: 'bg-purple-950/40',
      borderColor: 'border-purple-500/30',
      summary: 'When logging into a modified client, your authentication tokens (OAuth session cookies) pass through modified application bytecode.',
      guidance: 'Always enable Two-Factor Authentication (2FA) via an authenticator app (Google Authenticator, Bitwarden) rather than SMS fallback to prevent session hijacking.'
    },
    {
      title: 'Strict Android Permissions Audit',
      icon: FileSearch,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/40',
      borderColor: 'border-cyan-500/30',
      summary: 'Malicious repackaged APKs frequently insert unauthorized permission declarations to harvest contact lists, SMS messages, or financial information.',
      guidance: 'Legitimate social apps only require Camera, Microphone, and Media storage. Instantly abort installation if an APK requests Accessibility Services, SMS, or Device Administrator rights.'
    }
  ];

  return (
    <section id="security" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-400 uppercase mb-2">
            <span>Security Engineering & Threat Modeling</span>
            <span aria-hidden="true">·</span>
            <span>Independent Risk Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Security, Privacy & Account Safety Advisory
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Modified Android applications offer enhanced usability, but they also introduce distinct threat vectors. We provide an unvarnished technical assessment so you can make informed decisions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {securityPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#12121E] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${pillar.bgColor} border ${pillar.borderColor} flex items-center justify-center ${pillar.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {pillar.summary}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0E0E18] border border-white/5 text-xs text-slate-300">
                  <strong className="text-white block mb-1">Recommended Mitigation:</strong>
                  <span className="leading-relaxed">{pillar.guidance}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Permissions Audit Checklist Box */}
        <div className="bg-[#141424] border border-purple-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Runtime Permissions: Red Flags vs. Expected Access</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Inspect requested manifest permissions before granting them on your Android operating system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            
            {/* Safe / Expected Permissions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Standard Expected Permissions
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-black/30 border border-emerald-500/20 flex items-start gap-2">
                  <span className="font-mono text-emerald-300">READ_MEDIA_IMAGES</span>
                  <span className="text-slate-400">— Needed to display gallery photos for upload.</span>
                </li>
                <li className="p-2.5 rounded-lg bg-black/30 border border-emerald-500/20 flex items-start gap-2">
                  <span className="font-mono text-emerald-300">WRITE_EXTERNAL_STORAGE</span>
                  <span className="text-slate-400">— Needed for downloading reels to your DCIM gallery.</span>
                </li>
                <li className="p-2.5 rounded-lg bg-black/30 border border-emerald-500/20 flex items-start gap-2">
                  <span className="font-mono text-emerald-300">CAMERA & RECORD_AUDIO</span>
                  <span className="text-slate-400">— Needed for in-app photo capture and voice notes.</span>
                </li>
              </ul>
            </div>

            {/* Dangerous / Red Flag Permissions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                CRITICAL RED FLAGS (ABORT IF REQUESTED)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/20 flex items-start gap-2">
                  <span className="font-mono text-rose-300">BIND_ACCESSIBILITY_SERVICE</span>
                  <span className="text-slate-400">— High risk: Allows reading screen content, keystrokes, and banking OTPs.</span>
                </li>
                <li className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/20 flex items-start gap-2">
                  <span className="font-mono text-rose-300">READ_SMS / RECEIVE_SMS</span>
                  <span className="text-slate-400">— High risk: Enables interception of 2FA verification codes.</span>
                </li>
                <li className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/20 flex items-start gap-2">
                  <span className="font-mono text-rose-300">DEVICE_ADMINISTRATOR</span>
                  <span className="text-slate-400">— High risk: Grants remote wipe or persistent uninstallation locks.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
