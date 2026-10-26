/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Settings,
  Download,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info
} from 'lucide-react';

interface Step {
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  instructions: string[];
  securityNote: string;
}

export const InstallGuide: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const steps: Step[] = [
    {
      stepNumber: '01',
      title: 'Configure Android "Unknown Sources" Permission',
      subtitle: 'Grant temporary sideloading authorization to your browser or file manager.',
      icon: Settings,
      instructions: [
        'Open your Android device System Settings.',
        'Navigate to Apps > Special App Access > Install Unknown Apps (or Settings > Security).',
        'Select the application you will use to download or browse the file (e.g. Google Chrome or Files by Google).',
        'Toggle the switch to "Allow from this source". You can revoke this permission anytime after installation.'
      ],
      securityNote: 'Modern Android (8.0+) isolates sideload permissions per app rather than globally, keeping your device secure.'
    },
    {
      stepNumber: '02',
      title: 'Acquire Verified Package Archive (.apk)',
      subtitle: 'Ensure direct source acquisition without deceptive intermediary downloaders.',
      icon: Download,
      instructions: [
        'Obtain the official .apk binary from an authorized repository mirror.',
        'Ensure the downloaded file extension is strictly .apk (never execute .exe, .bat, or .zip masquerading as APKs).',
        'Avoid download portals that require completing surveys, installing companion apps, or granting accessibility rights.'
      ],
      securityNote: 'Authentic APK files will prompt standard Android Package Installer dialogs upon opening.'
    },
    {
      stepNumber: '03',
      title: 'Cryptographic Checksum & Malware Screening',
      subtitle: 'Confirm file integrity prior to package execution.',
      icon: ShieldCheck,
      instructions: [
        'Compute the SHA-256 hash using a terminal (`sha256sum file.apk`) or mobile hash-checker tool.',
        'Cross-reference the calculated digest against official release logs if provided.',
        'Submit the APK to VirusTotal.com to cross-scan across 70+ antivirus engines for anomalous payloads.'
      ],
      securityNote: 'If VirusTotal flags generic adware or unauthorized repackaging signatures, do not install.'
    },
    {
      stepNumber: '04',
      title: 'Execute Android Package Installer & Audit Permissions',
      subtitle: 'Complete sideloading and review runtime permissions.',
      icon: Smartphone,
      instructions: [
        'Locate the .apk file in your Downloads folder and tap to open.',
        'Review the requested Android permissions dialog (Storage, Camera, Microphone).',
        'Tap "Install". If Google Play Protect displays a "Blocked by Play Protect" dialog, review the warning thoroughly before choosing whether to proceed.',
        'After installation, open the app and log in using a secondary or testing account to verify stability.'
      ],
      securityNote: 'Never grant Device Administrator, SMS, or Accessibility permissions to any social media client mod.'
    }
  ];

  const totalSteps = steps.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  return (
    <section id="installation" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
              <span>Step-by-Step Procedure</span>
              <span aria-hidden="true">·</span>
              <span>Android Sideloading Walkthrough</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Installation & Sideloading Walkthrough
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Standard operating procedures for manually sideloading Android application packages safely, minimizing system exposure and preventing malicious payload execution.
            </p>
          </div>

          {/* Interactive Progress Indicator */}
          <div className="bg-[#12121E] border border-white/10 rounded-xl p-4 min-w-[240px] shrink-0">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Walkthrough Progress</span>
              <span className="text-purple-400">{completedCount} of {totalSteps} Steps</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = Boolean(completedSteps[index]);

            return (
              <div
                key={index}
                className={`bg-[#12121E] border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-emerald-950/10'
                    : 'border-white/10 hover:border-purple-500/30'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 border border-purple-800/60 px-2 py-0.5 rounded">
                        STEP {step.stepNumber}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">Standard Sideload</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleStep(index)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        isCompleted
                          ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/40'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                      }`}
                      aria-pressed={isCompleted}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Step Action Items */}
                  <ul className="space-y-2.5 text-xs text-slate-300 my-4 border-t border-white/5 pt-3">
                    {step.instructions.map((inst, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security Note Callout */}
                <div className="mt-4 p-3 rounded-xl bg-[#0E0E18] border border-white/5 text-[11px] text-slate-300 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-white">Security Advisory: </strong>
                    {step.securityNote}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Post-Installation Advisory Banner */}
        <div className="mt-8 p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-100">Post-Installation Caution: </strong>
            Because modified APKs do not receive background updates via Google Play, you are solely responsible for monitoring security updates and re-verifying future package releases manually.
          </div>
        </div>

      </div>
    </section>
  );
};
