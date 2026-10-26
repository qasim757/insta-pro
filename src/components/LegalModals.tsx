/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ShieldAlert, Lock, AlertTriangle, FileText, CheckCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#12121E] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#151526]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 id="disclaimer-title" className="text-base sm:text-lg font-bold text-white">
                Legal Disclaimer & Fair Use Notice
              </h2>
              <p className="text-xs text-slate-400">Independent Documentation Policy</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-purple-200">
            <strong>Clear Non-Affiliation Declaration: </strong>
            {APP_CONFIG.LEGAL_NOTICE}
          </div>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              1. Informational & Educational Scope
            </h3>
            <p className="text-slate-400">
              This website is created solely for educational analysis, technological study, and user information regarding modified Android software architectures. We do not claim ownership of the Instagram trademark or any associated proprietary assets owned by Meta Platforms, Inc.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              2. Download Links & Software Integrity
            </h3>
            <p className="text-slate-400">
              Direct download links on this website remain inactive and disabled until authorized, cryptographically scanned packages are configured. We do not generate fake APKs, spoof download timers, or package malicious installers. Users who obtain APK files from third parties do so at their own independent discretion.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              3. Terms of Service & Account Safety
            </h3>
            <p className="text-slate-400">
              Modifying, reverse engineering, or accessing Instagram servers via unauthorized third-party clients violates Meta's Terms of Use. We strongly warn users that deploying secondary accounts is advisable, as automated integrity systems may trigger rate limits or account suspensions.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              4. Limitation of Liability
            </h3>
            <p className="text-slate-400">
              The maintainers of this website assume no liability for hardware malfunction, data loss, account suspension, or security breaches resulting from the installation of third-party software packages obtained across the internet.
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0E0E18] border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            I Understand & Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#12121E] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#151526]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-title" className="text-base sm:text-lg font-bold text-white">
                Privacy Policy
              </h2>
              <p className="text-xs text-slate-400">User Data & Confidentiality Commitment</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <strong>Zero Data Harvesting: </strong>
              This website does not require registration, collect personal credentials, use behavioral tracking pixels, or store cookies.
            </div>
          </div>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              1. Log Files & Analytics
            </h3>
            <p className="text-slate-400">
              We do not utilize Google Analytics, Facebook Pixel, or invasive telemetry scripts. Standard static web server request headers (IP address, user agent) are processed purely for network routing and DDoS mitigation.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              2. Client-Side Browser Storage
            </h3>
            <p className="text-slate-400">
              Interactive features on this site (such as marking steps complete in the Installation Guide or searching FAQs) operate strictly within your browser's temporary local session memory and are never transmitted to external databases.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              3. External Outbound Links
            </h3>
            <p className="text-slate-400">
              Our website may contain hyperlinks to external reference materials or third-party documentation. Once you navigate away from our domain, you are subject to the privacy policies of those external domains.
            </p>
          </section>

          <section className="space-y-1.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-xs">
              4. Contact & Inquiries
            </h3>
            <p className="text-slate-400">
              If you have inquiries regarding technical accuracy or wish to submit feedback regarding package verification, reach out via official open-source community channels.
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0E0E18] border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 rounded-lg transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
};
