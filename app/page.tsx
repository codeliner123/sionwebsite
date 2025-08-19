import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import PricingTeaser from '@/components/PricingTeaser';
import SecurityBadges from '@/components/SecurityBadges';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <FeatureGrid />
        <HowItWorks />
        <Testimonials />
        <PricingTeaser />
        <SecurityBadges />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}