import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TopicsSection from "@/components/TopicsSection";
import ToolsSlider from "@/components/ToolsSlider";
import EvidenceSection from "@/components/EvidenceSection";
import CompanySection from "@/components/CompanySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <TopicsSection />
      <ToolsSlider />
      <EvidenceSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
