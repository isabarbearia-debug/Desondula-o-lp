import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import WhyItWorksSection from '@/components/landing/WhyItWorksSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import InstructorSection from '@/components/landing/InstructorSection';
import WhatYouLearnSection from '@/components/landing/WhatYouLearnSection';
import ForWhoSection from '@/components/landing/ForWhoSection';
import BonusSection from '@/components/landing/BonusSection';
import OfferSection from '@/components/landing/OfferSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import FAQSection from '@/components/landing/FAQSection';
import FooterSection from '@/components/landing/FooterSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <BenefitsSection />
            <WhyItWorksSection />
            <TestimonialsSection />
            <InstructorSection />
            <WhatYouLearnSection />
            <ForWhoSection />
            <BonusSection />
            <OfferSection />
            <GuaranteeSection />
            <FAQSection />
            <FooterSection />
        </div>
    );
}