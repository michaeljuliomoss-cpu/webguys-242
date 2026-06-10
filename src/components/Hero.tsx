"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.04]" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="400" fill="url(#heroGrad1)" />
          <defs>
            <radialGradient id="heroGrad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) scale(400)">
              <stop stopColor="#2563eb" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 600 600" fill="none">
          <circle cx="0" cy="600" r="500" fill="url(#heroGrad2)" />
          <defs>
            <radialGradient id="heroGrad2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 600) scale(500)">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        {/* Geometric shapes */}
        <svg className="absolute top-32 left-[10%] w-16 h-16 opacity-[0.06]" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="16" fill="#2563eb" transform="rotate(15 32 32)" />
        </svg>
        <svg className="absolute top-[45%] right-[8%] w-12 h-12 opacity-[0.06]" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#0ea5e9" />
        </svg>
        <svg className="absolute bottom-32 left-[15%] w-20 h-20 opacity-[0.04]" viewBox="0 0 80 80" fill="none">
          <polygon points="40,0 80,80 0,80" fill="#6366f1" />
        </svg>
        {/* Dot grid pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="dotPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#2563eb" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              #1 Web Design Agency in the Bahamas
            </div>

            <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
              We Build Websites That{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                  Make You Money
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="url(#underlineGrad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underlineGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2563eb" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              Custom websites, powerful systems, and AI-driven tools — built for businesses in the Bahamas and beyond. From $200 starter sites to full-scale SaaS platforms.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#templates"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all hover:-translate-y-0.5"
              >
                View Templates
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  { initials: "TG", bg: "bg-blue-500", border: "border-white" },
                  { initials: "BT", bg: "bg-emerald-500", border: "border-white" },
                  { initials: "KG", bg: "bg-violet-500", border: "border-white" },
                  { initials: "CR", bg: "bg-amber-500", border: "border-white" },
                ].map((client, i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 ${client.bg} rounded-full border-2 ${client.border} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                  >
                    {client.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">50+</span> happy clients across the Bahamas</p>
              </div>
            </div>
          </div>

          {/* Right: Visual showcase */}
          <div className="relative">
            {/* Main browser mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 max-w-xs">
                    https://yourbusiness.com
                  </div>
                </div>
              </div>
              {/* Website preview inside browser */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 relative overflow-hidden">
                {/* Mock website content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                      <div className="w-24 h-3 bg-gray-300 rounded" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-12 h-2 bg-gray-200 rounded" />
                      <div className="w-12 h-2 bg-gray-200 rounded" />
                      <div className="w-12 h-2 bg-gray-200 rounded" />
                    </div>
                  </div>
                  <div className="pt-8 space-y-3">
                    <div className="w-3/4 h-4 bg-gray-800 rounded" />
                    <div className="w-1/2 h-4 bg-gray-800 rounded" />
                    <div className="w-2/3 h-3 bg-gray-300 rounded mt-4" />
                    <div className="w-1/2 h-3 bg-gray-300 rounded" />
                    <div className="flex gap-3 mt-4">
                      <div className="w-28 h-10 bg-blue-600 rounded-lg" />
                      <div className="w-28 h-10 bg-gray-200 rounded-lg" />
                    </div>
                  </div>
                  {/* Colorful cards */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-blue-100 rounded-lg p-3 space-y-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg" />
                      <div className="w-full h-2 bg-blue-200 rounded" />
                      <div className="w-2/3 h-2 bg-blue-200 rounded" />
                    </div>
                    <div className="bg-emerald-100 rounded-lg p-3 space-y-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg" />
                      <div className="w-full h-2 bg-emerald-200 rounded" />
                      <div className="w-2/3 h-2 bg-emerald-200 rounded" />
                    </div>
                    <div className="bg-violet-100 rounded-lg p-3 space-y-2">
                      <div className="w-8 h-8 bg-violet-500 rounded-lg" />
                      <div className="w-full h-2 bg-violet-200 rounded" />
                      <div className="w-2/3 h-2 bg-violet-200 rounded" />
                    </div>
                  </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 rotate-12" />
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-violet-400 to-pink-400 rounded-full opacity-15" />
              </div>
            </div>

            {/* Floating badge - left */}
            <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg shadow-gray-900/10 p-4 border border-gray-100 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">+127%</p>
                  <p className="text-xs text-gray-400">Avg. traffic increase</p>
                </div>
              </div>
            </div>

            {/* Floating badge - right */}
            <div className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-lg shadow-gray-900/10 p-4 border border-gray-100 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">5-14 Days</p>
                  <p className="text-xs text-gray-400">Average delivery</p>
                </div>
              </div>
            </div>

            {/* Floating badge - bottom */}
            <div className="absolute -bottom-4 left-1/4 bg-white rounded-xl shadow-lg shadow-gray-900/10 p-4 border border-gray-100 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">4.9/5</p>
                  <p className="text-xs text-gray-400">Client rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
