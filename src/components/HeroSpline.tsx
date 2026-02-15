'use client'

import { useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle, Smartphone, Mail, Globe, FileText, User, ArrowRight } from "lucide-react";
import { CodeWindow } from "@/components/ui/code-window";

export default function HeroSpline() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative w-full h-screen bg-black/[0.96] overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="container mx-auto h-full px-4 relative z-10 flex flex-col md:flex-row items-center">
                {/* Left content */}
                <div className="flex-1 text-center md:text-left pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                        Jasa Pembuatan Website <br />
                        <span className="text-neon-blue">Profesional</span>
                    </h1>
                    <p className="mt-6 text-neutral-300 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
                        Bangun website cepat, profesional, dan SEO-ready untuk bisnis Anda.
                        IndoDesign membantu UMKM hingga perusahaan membangun identitas digital yang kuat.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#order-website"
                            className="inline-flex items-center justify-center gap-2 bg-neon-blue text-black font-bold px-8 py-4 rounded-lg hover:scale-[1.03] transition shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                        >
                            Order Website
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 transition"
                        >
                            Konsultasi Gratis
                        </button>
                    </div>
                </div>

                {/* Right content - Spline Scene */}
                <div className="flex-1 w-full h-[50vh] md:h-full relative">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* CONSULTATION MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left Side - Visual */}
                            <div className="hidden md:flex w-2/5 relative bg-gradient-to-br from-[#111] to-black border-r border-white/5 p-8 flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-neon-blue/5 opacity-50" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Mulai Proyek Anda
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Konsultasikan kebutuhan website Anda secara gratis bersama tim ahli kami.
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8 transform hover:scale-105 transition-transform duration-500">
                                    <CodeWindow
                                        className="shadow-2xl border-neon-blue/20"
                                        filename="Success.tsx"
                                        code={`// Your future website
const project = {
  status: "Started",
  quality: "Premium",
  seo: "Optimized",
  result: "Growth 🚀"
};

export default project;`}
                                    />
                                </div>

                                <div className="relative z-10 space-y-3 mt-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-neon-blue" />
                                        <span>Respon Cepat</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-neon-blue" />
                                        <span>Analisis Gratis</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-neon-blue" />
                                        <span>Tanpa Komitmen Awal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar bg-[#050505]">
                                <div className="md:hidden mb-6">
                                    <h3 className="text-xl font-bold text-white">Konsultasi Gratis</h3>
                                    <p className="text-sm text-gray-400">Isi formulir di bawah ini.</p>
                                </div>

                                <form
                                    action="https://formspree.io/f/mnjqrvyd"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    {/* Nama */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <User className="w-3 h-3" /> Nama Lengkap
                                        </label>
                                        <input
                                            name="nama"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-blue/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Whatsapp & Email Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                <Smartphone className="w-3 h-3" /> WhatsApp
                                            </label>
                                            <input
                                                name="whatsapp"
                                                required
                                                placeholder="0812..."
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-blue/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                <Mail className="w-3 h-3" /> Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="email@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-blue/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    {/* Type of Website */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Globe className="w-3 h-3" /> Jenis Website
                                        </label>
                                        <select
                                            name="jenis_website"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-blue/50 focus:bg-white/10 focus:outline-none transition-all"
                                        >
                                            <option value="Landing Page">Landing Page (Promosi)</option>
                                            <option value="Company Profile">Company Profile</option>
                                            <option value="Toko Online">Toko Online / E-Commerce</option>
                                            <option value="Custom Web App">Custom Web App</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select>
                                    </div>

                                    {/* Keterangan */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <FileText className="w-3 h-3" /> Keterangan / Catatan
                                        </label>
                                        <textarea
                                            name="keterangan"
                                            rows={4}
                                            placeholder="Ceritakan sedikit tentang kebutuhan website Anda..."
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-blue/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-neon-blue text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,243,255,0.3)] mt-2"
                                    >
                                        Kirim Konsultasi <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>

                                    <p className="text-xs text-center text-gray-500 mt-4">
                                        Kami akan membalas via WhatsApp/Email secepatnya.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
