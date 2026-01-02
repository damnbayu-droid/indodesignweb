"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Power, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👉 INI FUNGSI POWER BUTTON (PENTING)
  const handlePowerClick = () => {
    window.dispatchEvent(new Event("toggle-chatbot"));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + Power CTA */}
        <div className="flex items-center gap-3">
          {/* POWER BUTTON */}
          <button
            onClick={handlePowerClick}
            aria-label="Buka bantuan AI"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/10 border border-neon-blue/30 hover:border-neon-blue/80 transition-colors"
          >
            <Power className="w-5 h-5 text-neon-blue hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all" />
          </button>

          {/* LOGO */}
          <Link href="/" className="text-xl font-bold tracking-wider text-white">
            IndoDesign<span className="text-neon-blue">.website</span>
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search website services..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-neon-blue transition-colors" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Cart */}
          <button className="relative group p-2 rounded-full hover:bg-white/5 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-neon-blue transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-red rounded-full"></span>
          </button>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/61423854701"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-neon-green/50 hover:bg-neon-green/10 transition-all group"
          >
            <span className="hidden md:inline text-sm font-medium text-gray-300 group-hover:text-neon-green">
              WhatsApp
            </span>
          </Link>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div
        className={cn(
          "md:hidden px-4 pb-4 transition-all duration-300",
          scrolled ? "pt-0" : "pt-2"
        )}
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white"
          />
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
        </div>
      </div>
    </header>
  );
}
