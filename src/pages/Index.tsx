import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LiveRateCard } from '@/components/LiveRateCard';
import { ExchangeCalculator } from '@/components/ExchangeCalculator';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TrustBadges } from '@/components/TrustBadges';
import { TransactionTracker } from '@/components/TransactionTracker';
import { PartnersSection } from '@/components/PartnersSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

type ActiveTab = 'home' | 'track';

const Index = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTrackClick = () => {
    setActiveTab('track');
    scrollToTop();
  };

  const handleBackToHome = () => {
    setActiveTab('home');
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {activeTab === 'home' ? (
        <>
          <HeroSection onTrackClick={handleTrackClick} />
          <LiveRateCard />
          <ExchangeCalculator />
          <TrustBadges />
          <FeaturesSection />
          <PartnersSection />
        </>
      ) : (
        <TransactionTracker onBack={handleBackToHome} />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
