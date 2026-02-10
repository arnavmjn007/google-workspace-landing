import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="border-4 border-blue-500 min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}
