/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Check, Sparkles } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Overview' | 'Safety & Policy' | 'Installation & Updates';
}

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open first by default
  });
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is Insta Pro APK and how does it differ from the official app?',
      category: 'Overview',
      answer: 'Insta Pro is a community-developed, third-party modified client built on top of the Android Instagram application. Unlike the official client released by Meta Platforms on the Google Play Store, Insta Pro incorporates client-side modifications such as direct video/photo downloading to local device storage, stealth story viewing (omitting your username from creator view counts), ghost mode in direct messages (hiding typing indicators and seen receipts), and custom font/theme settings.'
    },
    {
      id: 'faq-2',
      question: 'Is Insta Pro APK safe to install on my Android device?',
      category: 'Safety & Policy',
      answer: 'Because modified APKs are distributed outside the Google Play Store and do not carry verified Meta developer signatures, they carry inherent security trade-offs. While the original modification authors aim to preserve user privacy, third-party distribution mirrors may inject adware, spyware, or keyloggers into repacked binaries. We strongly advise calculating the package SHA-256 checksum, running multi-engine scans on VirusTotal, and never logging in with business-critical or primary accounts.'
    },
    {
      id: 'faq-3',
      question: 'Why is the APK download link not available right now on this site?',
      category: 'Overview',
      answer: 'This website operates strictly as an independent technical documentation, architectural analysis, and educational resource. In accordance with safety principles, we do not host, fabricate, or distribute unvetted executable binaries. The download button remains deliberately disabled until verified, tamper-free package mirrors are cryptographically audited and configured by the site administrator.'
    },
    {
      id: 'faq-4',
      question: 'Does installing Insta Pro require rooting my phone?',
      category: 'Installation & Updates',
      answer: 'No. Insta Pro functions as a standard user-space Android APK package. It runs within Android\'s standard unprivileged application sandbox and does not require Magisk, SuperSU, or root modifications to your device\'s system or boot partitions.'
    },
    {
      id: 'faq-5',
      question: 'Can my Instagram account be suspended or banned for using a modified APK?',
      category: 'Safety & Policy',
      answer: 'Yes. Utilizing unauthorized modified clients violates Meta\'s Terms of Use (specifically sections regarding reverse-engineering and automated access). Meta employs sophisticated server-side heuristic monitoring to detect anomalous client fingerprints, rapid media scraping requests, or missing telemetry headers. To protect valuable accounts, we strongly discourage using primary creator or personal accounts with modified APKs.'
    },
    {
      id: 'faq-6',
      question: 'How do I update Insta Pro when a new build is released?',
      category: 'Installation & Updates',
      answer: 'Because modified applications are not tied to the Google Play Store ecosystem, they cannot receive automatic background updates. When Instagram updates its backend APIs or an older mod build stops functioning, users must manually obtain the updated APK from trusted developer channels and install it over the existing app (in-place upgrade) to maintain their settings.'
    },
    {
      id: 'faq-7',
      question: 'Is Insta Pro available for Apple iOS (iPhone/iPad)?',
      category: 'Overview',
      answer: 'No. Insta Pro is specifically compiled for the Android operating system (.apk format). Apple\'s iOS ecosystem enforces strict code-signing and app sandboxing that prevents direct sideloading of APK files. iOS users seeking similar functionality typically require jailbreak tweaks or IPA packages signed via AltStore/Sideloadly with temporary 7-day developer certificates.'
    },
    {
      id: 'faq-8',
      question: 'What should I do if Google Play Protect flags a downloaded APK?',
      category: 'Safety & Policy',
      answer: 'Google Play Protect frequently flags sideloaded APKs whose developer certificates are unknown or lack Google Play signing keys. If Play Protect flags the app as "Blocked by Play Protect" or "Unrecognized App", do not blindly tap "Install Anyway". First, check the package hash against release notes and scan the exact APK file on VirusTotal. If multiple top-tier antivirus engines detect malware or Trojan signatures, delete the file immediately.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = () => {
    const allOpen = faqs.reduce((acc, faq) => {
      acc[faq.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setOpenIds(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase mb-2">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true">·</span>
            <span>8 Essential Technical Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Common Inquiries & Operational Guidance
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Everything you need to know regarding APK safety, download policies, feature differences, and risk mitigation.
          </p>
        </div>

        {/* Search & Bulk Control Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs (e.g. safety, root, ban risk, updates)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#12121E] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
            <button
              type="button"
              onClick={handleExpandAll}
              className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* 8 Accordion Items */}
        <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-[#12121E] rounded-2xl border border-white/10 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Try searching for words like "safe", "root", or "iOS".
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = Boolean(openIds[faq.id]);
              return (
                <div
                  key={faq.id}
                  className={`bg-[#12121E] border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-purple-500/40 shadow-lg shadow-purple-950/20' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="font-mono text-xs text-purple-400 mt-0.5 shrink-0 font-bold">
                          0{index + 1}.
                        </span>
                        <div>
                          <span className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 leading-snug">
                            {faq.question}
                          </span>
                          <div className="text-[10px] text-purple-400/80 mt-1 uppercase tracking-wider">
                            {faq.category}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-purple-400 bg-purple-950/60 border-purple-500/40' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-[#0D0D17]/50"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
