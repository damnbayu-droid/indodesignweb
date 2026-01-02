import Hero from "@/components/Hero";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeaturedProducts from "@/components/FeaturedProducts";
import PCBuilderCTA from "@/components/PCBuilderCTA";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">

      {/* HERO SECTION — IndoDesign.website */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/HLybcHC6/Hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Jasa Pembuatan Website Profesional untuk Bisnis Online
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Bangun website cepat, profesional, dan SEO-ready untuk bisnis Anda.
              IndoDesign.website membantu UMKM hingga perusahaan membangun website
              modern dengan performa tinggi dan desain terpercaya.
            </p>
          </div>

          <div className="flex md:justify-end">
          <a
            href="#order-website"
            className="inline-flex items-center gap-3 bg-neon-blue text-black font-bold px-8 py-4 rounded-lg hover:scale-[1.03] transition"
          >
            Order Website Sekarang
          </a>
          </div>
        </div>
      </section>

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
