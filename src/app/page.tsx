import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Templates from "@/components/Templates";
import Systems from "@/components/Systems";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "WebGuys.242 | Web Design Agency in Nassau, Bahamas",
  description: "Custom websites, e-commerce stores, business systems, and AI tools for businesses in the Bahamas and beyond. From $200 starter sites to full-scale SaaS platforms.",
  keywords: "web design Bahamas, website developer Nassau, e-commerce Bahamas, custom website, business systems, AI tools",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Templates />
      <Systems />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
