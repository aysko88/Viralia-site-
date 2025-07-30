import React from 'react';
import HeroSection from '../components/HeroSection';
import PacksPreview from '../components/PacksPreview';
import ReviewsSection from '../components/ReviewsSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <PacksPreview />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;