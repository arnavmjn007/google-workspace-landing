import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import SolutionsSection from "@/components/Solutions";
import WorkspaceSucceed from "@/components/Workspace";
import FAQ from "@/components/FAQ";
import SalesContact from "@/components/SalesContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <Features />
      <SolutionsSection />
      <WorkspaceSucceed />
      <FAQ />
      <SalesContact />
      <Footer />
    </main>
  );
}

// Router
