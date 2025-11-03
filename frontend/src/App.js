import React from 'react';
import '@/App.css';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ChallengesSection } from '@/components/ChallengesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyMaglincSection } from '@/components/WhyMaglincSection';
import { PricingSection } from '@/components/PricingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengesSection />
        <ServicesSection />
        <ProcessSection />
        <WhyMaglincSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;