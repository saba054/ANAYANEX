import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SolutionsSection />
      <HowItWorksSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
