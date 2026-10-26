/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, X, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  category: string;
  official: boolean | string;
  instaPro: boolean | string;
  description: string;
}

export const ComparisonTable: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'media' | 'privacy' | 'security'>('all');

  const rows: ComparisonRow[] = [
    {
      feature: 'Direct Local Media Caching',
      category: 'media',
      official: false,
      instaPro: true,
      description: 'Ability to save videos, reels, and high-res photos directly into Android /DCIM/ folder without third-party web scrapers.',
    },
    {
      feature: 'Story & Reel Downloader',
      category: 'media',
      official: false,
      instaPro: true,
      description: 'One-click download button embedded directly onto stories and reels with audio tracks intact.',
    },
    {
      feature: 'Stealth Story Viewing (Ghost Mode)',
      category: 'privacy',
      official: false,
      instaPro: true,
      description: 'View any public or followed user story without appending your handle to their viewed analytics list.',
    },
    {
      feature: 'Hide DM Read Receipts & Typing Status',
      category: 'privacy',
      official: false,
      instaPro: true,
      description: 'Read incoming direct messages without dispatching "Seen" status and conceal active keyboard drafting.',
    },
    {
      feature: 'Configurable Upload Quality (60 FPS)',
      category: 'media',
      official: 'Limited / Compressed',
      instaPro: 'Configurable Bitrate',
      description: 'Bypasses standard client downsampling pipelines to preserve raw resolution and 60fps frame rates.',
    },
    {
      feature: 'In-App PIN / Biometric App Locker',
      category: 'privacy',
      official: false,
      instaPro: true,
      description: 'Built-in security screen preventing unauthorized local access without requiring system-wide locker apps.',
    },
    {
      feature: 'Ad & Sponsored Post Filtering',
      category: 'privacy',
      official: false,
      instaPro: true,
      description: 'Client-side rules to suppress commercial sponsored posts and algorithmic carousel units in the home feed.',
    },
    {
      feature: 'Google Play Protect Auto-Updates',
      category: 'security',
      official: true,
      instaPro: false,
      description: 'Automatic background deployment of security patches, stability hotfixes, and API changes through Google Play.',
    },
    {
      feature: 'Cryptographic Developer Signature by Meta',
      category: 'security',
      official: true,
      instaPro: false,
      description: 'Signed directly by Meta Platforms, Inc. with verified keystore certificate matching official Android ecosystem records.',
    },
    {
      feature: 'Meta Terms of Service Compliance',
      category: 'security',
      official: '100% Compliant',
      instaPro: 'Potential Violation',
      description: 'Using modified clients breaches Section 4 of Meta Terms of Use, which may trigger automated telemetry flags.',
    },
  ];

  const filteredRows = filterCategory === 'all'
    ? rows
    : rows.filter((r) => r.category === filterCategory);

  const renderBadge = (val: boolean | string) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Supported</span>
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400">
          <X className="w-4 h-4 text-rose-400 shrink-0" />
          <span>Not Available</span>
        </span>
      );
    }
    if (val === 'Potential Violation') {
      return (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{val}</span>
        </span>
      );
    }
    return (
      <span className="text-xs font-medium text-slate-300">
        {val}
      </span>
    );
  };

  return (
    <section id="comparison" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
              <span>Objective Matrix</span>
              <span aria-hidden="true">·</span>
              <span>Technical Feature Breakdown</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Official Instagram vs. Insta Pro Client
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              An impartial comparison illustrating enhanced feature availability balanced against official platform guarantees, Google Play verification, and terms compliance.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill discipline: Clean functional buttons) */}
          <div className="flex items-center p-1 bg-[#141424] border border-white/10 rounded-xl text-xs font-medium shrink-0">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Features
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('media')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'media'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Media & Downloads
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('privacy')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'privacy'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Privacy & Ghost
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('security')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'security'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Security & Policy
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-[#12121E] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0E0E18] text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 min-w-[240px]">Capability / Dimension</th>
                  <th scope="col" className="py-4 px-6 min-w-[180px] bg-slate-900/40">
                    Official Instagram Client
                  </th>
                  <th scope="col" className="py-4 px-6 min-w-[180px] bg-purple-950/20 text-purple-300">
                    Insta Pro (Client Mod)
                  </th>
                  <th scope="col" className="py-4 px-6 min-w-[280px]">Operational Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    {/* Capability Name */}
                    <td className="py-4 px-6 font-semibold text-white">
                      <div className="space-y-0.5">
                        <div>{row.feature}</div>
                        <span className="text-[10px] text-purple-400 font-normal uppercase tracking-wider">
                          {row.category}
                        </span>
                      </div>
                    </td>

                    {/* Official App State */}
                    <td className="py-4 px-6 bg-slate-900/20">
                      {renderBadge(row.official)}
                    </td>

                    {/* Insta Pro State */}
                    <td className="py-4 px-6 bg-purple-950/10">
                      {renderBadge(row.instaPro)}
                    </td>

                    {/* Operational Description */}
                    <td className="py-4 px-6 text-slate-300 text-xs leading-relaxed">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Summary Callout */}
          <div className="p-4 bg-[#0A0A10] border-t border-white/5 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                <strong>Conclusion:</strong> While Insta Pro expands utility, the official client guarantees cryptographic verification and uninterrupted Meta service compliance.
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              Evaluated for Android OS platforms
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
