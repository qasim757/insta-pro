/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DownloadCard } from './components/DownloadCard';
import { FeaturesGrid } from './components/FeaturesGrid';
import { AppSpecs } from './components/AppSpecs';
import { InstallGuide } from './components/InstallGuide';
import { ComparisonTable } from './components/ComparisonTable';
import { SecuritySection } from './components/SecuritySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DisclaimerModal, PrivacyModal } from './components/LegalModals';

export default function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B12] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-pink-300">
      
      {/* 1. Responsive Header / Navigation Bar */}
      <Navbar
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section with Smartphone Mockup */}
        <Hero
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        />

        {/* 3. Central Download Status & Verification Hub */}
        <DownloadCard />

        {/* 4. Core Feature Cards (Bento-style layout) */}
        <FeaturesGrid />

        {/* 5. Verified Application Technical Specifications */}
        <AppSpecs />

        {/* 6. Step-by-Step Android Sideloading Walkthrough */}
        <InstallGuide />

        {/* 7. Official Instagram vs. Insta Pro Comparison Matrix */}
        <ComparisonTable />

        {/* 8. Security, Threat Analysis & Permission Audit */}
        <SecuritySection />

        {/* 9. Eight (8) Technical FAQ Accordions */}
        <FaqSection />

      </main>

      {/* 10. Comprehensive Footer */}
      <Footer
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* 11. Interactive Modals: Legal Disclaimer & Privacy Policy */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

    </div>
  );
}
