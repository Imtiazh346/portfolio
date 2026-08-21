import Header from "@/components/Header";
import DesignHero from "@/components/DesignHero";
import Showcase from "@/components/Showcase";
import PerformanceSection from "@/components/PerformanceSection";
import LatestProjects from "@/components/LatestProjects";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <DesignHero />
      <Showcase />
      <PerformanceSection />
      <LatestProjects />
    </div>
  );
}
