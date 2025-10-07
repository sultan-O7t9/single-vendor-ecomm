import { HeroSection } from "@/components/sections/hero-section";
import { WeeklyProductsSection } from "@/components/sections/weekly-products-section";
import { OffersSection } from "@/components/sections/offers-section";
import { TopCategoriesSection } from "@/components/sections/top-categories-section";
import { BrandsListSection } from "@/components/sections/brands-list-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WeeklyProductsSection />
      <OffersSection />
      <TopCategoriesSection />
      <BrandsListSection />
      <ServicesSection />
    </div>
  );
}
