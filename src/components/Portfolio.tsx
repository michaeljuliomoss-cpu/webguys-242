"use client";

const clients = [
  { initials: "TG", name: "TechGuys.242", industry: "Tech Services", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { initials: "BT", name: "BraidsByTina", industry: "Beauty & Salon", color: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
  { initials: "KG", name: "K&G Hair", industry: "Hair Salon", color: "bg-gradient-to-br from-violet-500 to-violet-600" },
  { initials: "CR", name: "Carlo", industry: "Restaurant", color: "bg-gradient-to-br from-amber-500 to-amber-600" },
];

const testimonials = [
  {
    quote: "They built our entire online presence from scratch. Professional, fast, and the results speak for themselves — our bookings doubled in the first month.",
    author: "BraidsByTina",
    industry: "Beauty & Salon",
    initial: "B",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    quote: "The team understood exactly what we needed. Clean design, easy to manage, and our customers love the new site. Best investment we've made.",
    author: "K&G Hair",
    industry: "Hair Salon",
    initial: "K",
    color: "bg-gradient-to-br from-violet-500 to-violet-600",
  },
  {
    quote: "From concept to launch in under two weeks. The backend dashboard they built saves us hours every week. Incredible value for the price.",
    author: "TechGuys.242",
    industry: "Tech Services",
    initial: "T",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Bahamas Businesses
            </span>
          </h2>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 ${client.color} rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                {client.initials}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{client.name}</p>
                <p className="text-xs text-gray-400">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
