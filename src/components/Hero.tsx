"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 lg:pt-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-100/50 to-cyan-100/30 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-100/40 to-blue-50/20 blur-3xl" />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              #1 Web Design Agency in the Bahamas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              We Build Digital{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Experiences
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-100/60 rounded-full -z-10" />
              </span>
              <br />
              That Drive{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed max-w-xl">
              Custom websites, powerful systems, and AI-driven tools — built for businesses in the Bahamas and beyond. From $200 starter sites to full-scale SaaS platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-base border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Browse Templates
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-5">
              <div className="flex -space-x-2.5">
                {[
                  { initials: "TG", bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
                  { initials: "BT", bg: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
                  { initials: "KG", bg: "bg-gradient-to-br from-violet-500 to-violet-600" },
                  { initials: "CR", bg: "bg-gradient-to-br from-amber-500 to-amber-600" },
                ].map((c, i) => (
                  <div key={i} className={`w-10 h-10 ${c.bg} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {c.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1.5">4.9</span>
                </div>
                <p className="text-xs text-gray-400">50+ clients across the Bahamas</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                  alt="Web design workspace with modern computer setup"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Floating card - top right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl shadow-gray-900/10 p-3 border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">+127%</p>
                    <p className="text-[10px] text-gray-400">Traffic increase</p>
                  </div>
                </div>
              </div>

              {/* Floating card - bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl shadow-gray-900/10 p-3 border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">5-14 Days</p>
                    <p className="text-[10px] text-gray-400">Delivery time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
