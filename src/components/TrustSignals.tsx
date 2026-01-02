"use client";

import { ShieldCheck, Zap, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Struktur Website Aman & Stabil",
    description:
      "Website dibangun dengan struktur yang rapi, aman, dan siap dikembangkan untuk jangka panjang.",
  },
  {
    icon: Zap,
    title: "Fast Loading Performance",
    description:
      "Optimasi performa agar website cepat diakses di desktop maupun mobile.",
  },
  {
    icon: Headphones,
    title: "Support & Konsultasi Profesional",
    description:
      "Didampingi langsung oleh tim berpengalaman dari awal hingga website live.",
  },
  {
    icon: Globe,
    title: "SEO Ready & Scalable",
    description:
      "Struktur SEO-friendly agar website mudah ditemukan di Google dan siap berkembang.",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 text-neon-blue">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
