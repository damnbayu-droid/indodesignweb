import HeroSpline from "@/components/HeroSpline";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeaturedProducts from "@/components/FeaturedProducts";
import PCBuilderCTA from "@/components/PCBuilderCTA";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">

      <HeroSpline />

      {/* SECTION LAIN (BELUM DIUBAH) */}
      <CategoryHighlights />
      <FeaturedProducts />
      <PCBuilderCTA />
      <TrustSignals />
      <FAQ />
      <Testimonials />

    </div>
  );
}
