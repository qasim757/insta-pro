/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, ShieldAlert, Lock, Info, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDisclaimer, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Install Guide', href: '#installation' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Security Advisory', href: '#security' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Download Hub', href: '#download' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#09090F] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Purpose (Col span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-[1.5px] flex items-center justify-center">
                <span className="w-full h-full bg-[#0B0B12] rounded-[5.5px] flex items-center justify-center font-bold text-xs text-white">
                  IP
                </span>
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                Insta<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pro</span> Guide
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent technical portal dedicated to architectural analysis, sideloading best practices, safety audits, and objective feature comparisons for Android power users.
            </p>

            <div className="text-[11px] text-slate-400">
              Published for educational and research reference.
            </div>
          </div>

          {/* Site Navigation Links (Col span 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-purple-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Disclosures & Compliance (Col span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Policies
            </h4>
            <div className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={onOpenDisclaimer}
                className="text-left text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1.5"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Non-Affiliation Disclaimer</span>
              </button>
              
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-left text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy & Data Policy</span>
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="text-left text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 pt-2"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top of page</span>
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Non-Affiliation Legal Notice Banner */}
        <div className="p-4 rounded-xl bg-[#0E0E18] border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs">
            <Info className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Strict Trademark & Meta Non-Affiliation Disclosure</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {APP_CONFIG.LEGAL_NOTICE}
          </p>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Insta Pro is a modified third-party software binary developed independently by community enthusiasts. This site does not host modified source code, does not crack software, and does not encourage unauthorized reverse engineering.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Insta Pro Information Hub · All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built for Android 5.0+</span>
            <span aria-hidden="true">·</span>
            <span>Mobile-First Responsive</span>
            <span aria-hidden="true">·</span>
            <span>Technical SEO Optimized</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
