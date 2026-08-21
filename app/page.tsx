import DesignHero from "@/components/DesignHero";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import PerformanceSection from "@/components/PerformanceSection";
import LatestProjects from "@/components/LatestProjects";
import Marquee from "@/components/Marquee";
import CommunicationSection from "@/components/CommunicationSection";
import PhotosSection from "@/components/PhotosSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <DesignHero />
      <Showcase />
      <PerformanceSection />
      <LatestProjects />
      <div className="h-20"></div>
      <Marquee />
      <div className="h-20"></div>
      <CommunicationSection />
      <Testimonials />
      <PhotosSection />
      <div className="h-20"></div>
      <Faq />
      <ContactCta />
      <Footer />
    </div>
  );
}
