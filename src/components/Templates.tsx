"use client";

const templates = [
  { name: "Restaurant & Food", category: "Food & Beverage", pages: "5-8 pages", gradient: "from-orange-400 to-red-500", accent: "bg-orange-50 text-orange-600" },
  { name: "Beauty & Salon", category: "Beauty", pages: "4-6 pages", gradient: "from-pink-400 to-rose-500", accent: "bg-pink-50 text-pink-600" },
  { name: "Tech & Startup", category: "Technology", pages: "6-10 pages", gradient: "from-blue-400 to-indigo-500", accent: "bg-blue-50 text-blue-600" },
  { name: "Real Estate", category: "Property", pages: "8-12 pages", gradient: "from-emerald-400 to-teal-500", accent: "bg-emerald-50 text-emerald-600" },
  { name: "E-Commerce Store", category: "Retail", pages: "10+ pages", gradient: "from-violet-400 to-purple-500", accent: "bg-violet-50 text-violet-600" },
  { name: "Professional Services", category: "Business", pages: "5-8 pages", gradient: "from-slate-400 to-blue-500", accent: "bg-slate-100 text-slate-600" },
  { name: "Tourism & Travel", category: "Hospitality", pages: "6-10 pages", gradient: "from-cyan-400 to-blue-500", accent: "bg-cyan-50 text-cyan-600" },
  { name: "Fitness & Health", category: "Health", pages: "4-6 pages", gradient: "from-red-400 to-orange-500", accent: "bg-red-50 text-red-600" },
];

export default function Templates() {
  return (
    <section id="templates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Template Library
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Start With a{" "}
            <span className="text-blue-600">Proven Design</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Our pre-built templates cut development time in half. Customize any template to match your brand — or go fully custom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates.map((template) => (
            <div
              key={template.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`h-36 bg-gradient-to-br ${template.gradient} flex items-center justify-center relative overflow-hidden`}>
                {/* Mock browser preview */}
                <div className="w-3/4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-2/3 h-2 bg-gray-200 rounded" />
                    <div className="w-1/2 h-2 bg-gray-100 rounded" />
                    <div className="w-full h-1.5 bg-gray-100 rounded mt-2" />
                    <div className="w-3/4 h-1.5 bg-gray-100 rounded" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
                <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/15 rounded-full" />
              </div>
              <div className="p-4">
                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${template.accent} bg-transparent`}>
                  {template.category}
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-0.5">{template.name}</h3>
                <p className="text-xs text-gray-400">{template.pages}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Need something unique? We'll build it from scratch.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
          >
            Request Custom Design
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
