import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main className="border-4 border-blue-500 min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBy />
    </main>
  );
}
