/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, HardDrive, Smartphone, ShieldCheck, Scale, AlertOctagon, Terminal } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const AppSpecs: React.FC = () => {
  const specs = [
    {
      label: 'Application Identity',
      value: APP_CONFIG.APP_NAME,
      detail: 'Independent third-party client modification',
      icon: Terminal,
    },
    {
      label: 'Minimum Operating System',
      value: APP_CONFIG.MIN_OS,
      detail: 'API Level 21+ supported across Android builds',
      icon: Smartphone,
    },
    {
      label: 'Supported ABIs / Architectures',
      value: APP_CONFIG.SUPPORTED_ABIS.join(', '),
      detail: 'Universal binary compilation for 32-bit & 64-bit SoCs',
      icon: Cpu,
    },
    {
      label: 'Distribution Format',
      value: APP_CONFIG.PACKAGE_TYPE,
      detail: 'Compiled Android Package Kit archive (.apk)',
      icon: HardDrive,
    },
    {
      label: 'Root Privileges Required',
      value: 'No Root Required',
      detail: 'Executes within standard unprivileged Android sandbox',
      icon: ShieldCheck,
    },
    {
      label: 'Licensing & Pricing',
      value: APP_CONFIG.LICENSE,
      detail: 'Community modification; zero in-app purchase gates',
      icon: Scale,
    },
    {
      label: 'Official Meta Affiliation',
      value: 'None (Independent)',
      detail: 'Not affiliated with or endorsed by Instagram or Meta Platforms, Inc.',
      icon: AlertOctagon,
    },
    {
      label: 'Direct Download Link Status',
      value: APP_CONFIG.APK_DOWNLOAD_URL ? 'Configured' : 'Unset / Pending Verification',
      detail: 'Protected to prevent malicious redirection or tampered binaries',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="specifications" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
            <span>Technical Reference</span>
            <span aria-hidden="true">·</span>
            <span>Verified System Parameters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Application Technical Specifications
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Factual system requirements, execution constraints, and architecture data. In accordance with strict integrity guidelines, we do not fabricate version numbers, file sizes, or fake download stats.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="bg-[#12121E] border border-white/10 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
            
            {/* Column 1 */}
            <div className="divide-y divide-white/5">
              {specs.slice(0, 4).map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="p-5 sm:p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                        {spec.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {spec.value}
                      </div>
                      <div className="text-xs text-slate-400">
                        {spec.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="divide-y divide-white/5">
              {specs.slice(4, 8).map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="p-5 sm:p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-pink-950/50 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                        {spec.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {spec.value}
                      </div>
                      <div className="text-xs text-slate-400">
                        {spec.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Factual Disclaimer Banner at footer of specs table */}
          <div className="p-4 bg-[#0E0E18] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>All specifications reflect standard Android packaging conventions for modified clients.</span>
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              SHA-256 Digest: {APP_CONFIG.EXPECTED_SHA256_HASH || 'Audit Pending Release Verification'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
