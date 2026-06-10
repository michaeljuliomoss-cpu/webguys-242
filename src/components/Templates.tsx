const templates = [
  {
    name: 'Restaurant & Food',
    image: '🍽️',
    category: 'Food & Beverage',
    pages: '5-8 pages',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Beauty & Salon',
    image: '💇',
    category: 'Beauty',
    pages: '4-6 pages',
    color: 'from-pink-400 to-purple-500',
  },
  {
    name: 'Tech & Startup',
    image: '💻',
    category: 'Technology',
    pages: '6-10 pages',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Real Estate',
    image: '🏠',
    category: 'Property',
    pages: '8-12 pages',
    color: 'from-green-400 to-teal-500',
  },
  {
    name: 'E-Commerce Store',
    image: '🛍️',
    category: 'Retail',
    pages: '10+ pages',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Professional Services',
    image: '💼',
    category: 'Business',
    pages: '5-8 pages',
    color: 'from-slate-400 to-blue-500',
  },
  {
    name: 'Tourism & Travel',
    image: '🏝️',
    category: 'Hospitality',
    pages: '6-10 pages',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Fitness & Health',
    image: '💪',
    category: 'Health',
    pages: '4-6 pages',
    color: 'from-red-400 to-orange-500',
  },
]

export default function Templates() {
  return (
    <section id="templates" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Template Library
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Start With a{' '}
            <span className="text-blue-600">Proven Design</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Our pre-built templates cut development time in half. Customize any template to match your brand — or go fully custom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`h-40 bg-gradient-to-br ${t.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform">{t.image}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">{t.category}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.pages}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Need something unique? We'll build it from scratch.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
          >
            Request Custom Design →
          </a>
        </div>
      </div>
    </section>
  )
}
