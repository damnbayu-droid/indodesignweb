"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Power } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-[#050505] border-t border-white/5 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                <Power className="w-4 h-4 text-neon-blue" />
              </div>
              <span className="text-xl font-bold text-white">
                IndoDesign<span className="text-neon-blue">.website</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed">
              IndoDesign.website adalah jasa pembuatan website profesional di
              Indonesia. Fokus pada desain modern, performa tinggi, SEO-ready,
              dan konversi bisnis.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://instagram.com/balihelp.id"
                target="_blank"
                className="hover:text-neon-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-neon-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-neon-blue transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-neon-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>Jasa Pembuatan Website</li>
              <li>Web Design Profesional</li>
              <li>Website Bisnis & Company Profile</li>
              <li>SEO & Performance Optimization</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>Konsultasi Website</li>
              <li>Revisi & Maintenance</li>
              <li>Optimasi Mobile & SEO</li>
              <li>Technical Support</li>
            </ul>
          </div>

          {/* Contact / Payment */}
          <div>
            <h4 className="font-bold text-white mb-6">Get in Touch</h4>

            <p className="text-sm mb-4">
              Email:{" "}
              <a
                href="mailto:info@bali.enterprises"
                className="hover:text-neon-blue"
              >
                info@bali.enterprises
              </a>
              <br />
              <a
                href="mailto:balihelp2019@gmail.com"
                className="hover:text-neon-blue"
              >
                balihelp2019@gmail.com
              </a>
            </p>

            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
              Payment
            </h5>
            <div className="flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="font-bold text-white text-lg">QRIS</span>
              <span className="font-bold text-white text-lg">BANK</span>
              <span className="font-bold text-white text-lg">PAYPAL</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            IndoDesign.website by Bali.Enterprises | All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-4 text-xs">
            <a href="https://bali.enterprises" className="hover:text-white">
              bali.enterprises
            </a>
            <a href="https://indonesianvisas.com" className="hover:text-white">
              indonesianvisas.com
            </a>
            <a href="https://visas.agency" className="hover:text-white">
              visas.agency
            </a>
            <a href="https://balivisas.agency" className="hover:text-white">
              balivisas.agency
            </a>
            <a href="https://visa.biz.id" className="hover:text-white">
              visa.biz.id
            </a>
            <a href="https://mybisnis.app" className="hover:text-white">
              mybisnis.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
