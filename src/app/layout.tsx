import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | IndoDesign.website",
  description:
    "IndoDesign.website adalah jasa pembuatan website profesional di Indonesia. Desain modern, SEO-ready, fast loading, dan mobile friendly untuk bisnis.",
  keywords: [
    "jasa pembuatan website",
    "web design indonesia",
    "website bisnis",
    "jasa web profesional",
    "seo website",
  ],
  openGraph: {
    title: "IndoDesign.website | Jasa Pembuatan Website Profesional",
    description:
      "Bangun website bisnis profesional dengan desain modern, SEO-ready, dan performa tinggi.",
    url: "https://indodesign.website",
    siteName: "IndoDesign.website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
