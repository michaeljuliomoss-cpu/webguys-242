"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
            <span className="text-white font-bold text-base">W</span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            WebGuys<span className="text-blue-600">.242</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition font-medium text-sm">Services</a>
          <a href="#templates" className="text-gray-600 hover:text-blue-600 transition font-medium text-sm">Templates</a>
          <a href="#systems" className="text-gray-600 hover:text-blue-600 transition font-medium text-sm">Systems & AI</a>
          <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition font-medium text-sm">Portfolio</a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition shadow-md shadow-blue-600/20"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#templates" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>Templates</a>
            <a href="#systems" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>Systems & AI</a>
            <a href="#portfolio" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setMobileOpen(false)}>Portfolio</a>
            <a href="#contact" className="block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition" onClick={() => setMobileOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
