const clients = [
  { name: 'TechGuys.242', initials: 'TG', color: 'bg-blue-500' },
  { name: 'BraidsByTina', initials: 'BT', color: 'bg-pink-500' },
  { name: 'K&G Hair', initials: 'KG', color: 'bg-purple-500' },
  { name: 'Carlo', initials: 'CR', color: 'bg-green-500' },
]

const testimonials = [
  {
    quote: "They built our entire online presence from scratch. Professional, fast, and the results speak for themselves — our bookings doubled in the first month.",
    author: 'BraidsByTina',
    role: 'Beauty & Salon',
    rating: 5,
  },
  {
    quote: "The team understood exactly what we needed. Clean design, easy to manage, and our customers love the new site. Best investment we've made.",
    author: 'K&G Hair',
    role: 'Hair Salon',
    rating: 5,
  },
  {
    quote: "From concept to launch in under two weeks. The backend dashboard they built saves us hours every week. Incredible value for the price.",
    author: 'TechGuys.242',
    role: 'Tech Services',
    rating: 5,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Clients */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="text-blue-600">Bahamas Businesses</span>
          </h2>
          <div className="flex justify-center gap-6 mt-8">
            {clients.map((c) => (
              <div key={c.name} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                <div className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                  {c.initials}
                </div>
                <span className="font-semibold text-gray-900">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
