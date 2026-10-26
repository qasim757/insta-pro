/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowDownToLine, ShieldAlert } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDisclaimer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Install Guide', href: '#installation' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Security & Safety', href: '#security' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0B12]/90 backdrop-blur-md">
      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-[1.5px] flex items-center justify-center">
            <span className="w-full h-full bg-[#0B0B12] rounded-[6.5px] flex items-center justify-center font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-400">
              IP
            </span>
          </span>
          <span className="tracking-tight">
            Insta<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pro</span>
          </span>
          <span className="text-[10px] font-medium tracking-wide text-purple-300/80 bg-purple-950/60 border border-purple-800/50 px-1.5 py-0.5 rounded">
            INFO HUB
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#download"
            onClick={(e) => handleScrollTo(e, '#download')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg shadow-sm shadow-purple-900/30 transition-all duration-150 whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#download"
            onClick={(e) => handleScrollTo(e, '#download')}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-md whitespace-nowrap shrink-0"
          >
            <ArrowDownToLine className="w-3 h-3" />
            <span>Download</span>
          </a>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0E0E18] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#download"
              onClick={(e) => handleScrollTo(e, '#download')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Check APK Status</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDisclaimer();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-slate-400 hover:text-slate-200"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Independent Disclaimer Notice</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
