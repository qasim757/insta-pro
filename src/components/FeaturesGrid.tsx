/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Download,
  EyeOff,
  Sparkles,
  Lock,
  Filter,
  Languages,
  Check,
  ChevronRight
} from 'lucide-react';

interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  technicalNote: string;
}

export const FeaturesGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'media-downloader',
      icon: Download,
      title: 'Direct Media & Reels Caching',
      category: 'Media Management',
      summary: 'Save posts, multiple carousel images, reels, and story clips directly into your device storage without watermarks or screen-recording workarounds.',
      bullets: [
        'Dedicated single-tap download icons attached to feed items and reels',
        'Batch-save multi-slide carousel posts in one folder',
        'Direct MP4 reel downloads with original audio track preserved'
      ],
      technicalNote: 'Files are saved to standard Android DCIM storage directories without metadata stripping.'
    },
    {
      id: 'ghost-mode',
      icon: EyeOff,
      title: 'Stealth Presence & Ghost Mode',
      category: 'Privacy Controls',
      summary: 'Inspect user stories, live streams, and direct messages without dispatching telemetry receipts or presence signals back to servers.',
      bullets: [
        'Hide story view status (your username is omitted from the creator viewer list)',
        'Prevent "Seen" receipts from triggering inside direct message threads',
        'Suppress the real-time "typing..." indicator when drafting messages'
      ],
      technicalNote: 'Intercepts client-side WebSocket and REST reporting payloads before network dispatch.'
    },
    {
      id: 'uncompressed-uploads',
      icon: Sparkles,
      title: 'High-Fidelity Media Uploads',
      category: 'Fidelity & Rendering',
      summary: 'Bypass default client-side downsampling algorithms to post photos and videos at maximum possible resolution and frame rates.',
      bullets: [
        'Upload 60 FPS story videos without jagged stutter or artifacting',
        'Retain higher JPEG bitrate parameters on portrait and square photos',
        'Disable aggressive bandwidth-saving compression algorithms'
      ],
      technicalNote: 'Enforces high-bitrate encoder profiles prior to transmission.'
    },
    {
      id: 'biometric-lock',
      icon: Lock,
      title: 'In-App PIN & Biometric Lock',
      category: 'Device Security',
      summary: 'Secure your social application directly with a built-in cryptographic PIN, pattern, or fingerprint prompt without installing third-party locker apps.',
      bullets: [
        'Seamless integration with standard Android BiometricPrompt API',
        'Configurable lock timer (immediately, 1 minute, 5 minutes)',
        'Option to conceal notifications and message previews on locked screens'
      ],
      technicalNote: 'Leverages hardware-backed Keystore authentication where supported by Android.'
    },
    {
      id: 'timeline-cleaner',
      icon: Filter,
      title: 'Feed Customization & Ad Filtering',
      category: 'Interface Optimization',
      summary: 'Curate your feed by filtering out sponsored advertisements, shopping recommendations, and algorithmically injected suggested posts.',
      bullets: [
        'Hide sponsored carousel posts and brand promotional units in feed',
        'Remove persistent shopping and marketplace entry points',
        'Prioritize accounts you actively follow over algorithm recommendations'
      ],
      technicalNote: 'Filters feed items via local JSON response schema manipulation.'
    },
    {
      id: 'inline-translation',
      icon: Languages,
      title: 'Multilingual In-Line Translation',
      category: 'Global Communication',
      summary: 'Instantly translate foreign comments, captions, and account biographies into your native language with multi-engine translation support.',
      bullets: [
        'Translate comment sections with a single tap beneath each thread',
        'Support for Google Translate and Yandex API translation bridges',
        'Customizable target language default stored in local preferences'
      ],
      technicalNote: 'Sends text payload to chosen translation endpoint without navigating away.'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
            <span>Capabilities Overview</span>
            <span aria-hidden="true">·</span>
            <span>Client Mod Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Core Auxiliary Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Insta Pro introduces targeted quality-of-life enhancements and privacy controls into the standard Android social client. Here is a technical breakdown of its primary features.
          </p>
        </div>

        {/* Bento / Asymmetric Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isExpanded = selectedFeature === feature.id;

            return (
              <div
                key={feature.id}
                className="group relative bg-[#12121E] hover:bg-[#151526] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-purple-950/20"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-purple-400">
                      {feature.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:bg-purple-900/40 flex items-center justify-center text-purple-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {feature.summary}
                  </p>

                  {/* Feature Capabilities Bullets */}
                  <ul className="space-y-2 text-xs text-slate-400 mb-4 border-t border-white/5 pt-3">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-pink-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Note Footer */}
                <div className="pt-3 border-t border-white/5">
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="text-slate-400 font-mono">Mechanism:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedFeature(isExpanded ? null : feature.id)}
                      className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 font-medium transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Specs' : 'View Architecture'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-[#0E0E18] border border-white/5 text-[11px] text-purple-200 leading-relaxed animate-fade-in">
                      {feature.technicalNote}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
