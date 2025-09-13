import { BestSellers } from "@/components/BestSellers";
import { Categories } from "@/components/Categories";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Categories />
      <BestSellers />
    </main>
  );
}

