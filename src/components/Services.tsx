const services = [
  {
    icon: '🌐',
    title: 'Custom Website Design',
    description: 'Beautiful, responsive websites tailored to your brand. Mobile-first design that converts visitors into customers.',
    price: 'From $700',
    features: ['Multi-page design', 'Mobile responsive', 'SEO optimized', 'Custom animations'],
    color: 'blue',
  },
  {
    icon: '📄',
    title: 'Starter Websites',
    description: 'Get online fast with a clean, professional single-page website. Perfect for small businesses just getting started.',
    price: 'From $200',
    features: ['Single page design', 'Mobile responsive', 'Contact form', 'Social links'],
    color: 'green',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Stores',
    description: 'Full online stores with payment processing, inventory management, and everything you need to sell online.',
    price: 'From $1,500',
    features: ['Payment processing', 'Inventory management', 'Order tracking', 'Admin dashboard'],
    color: 'purple',
  },
  {
    icon: '⚙️',
    title: 'Backend Dashboards',
    description: 'Custom admin panels and backend systems to manage your business operations efficiently.',
    price: 'From $1,000',
    features: ['User management', 'Data analytics', 'Role-based access', 'API integration'],
    color: 'orange',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Tools',
    description: 'Integrate AI into your business — chatbots, automation, content generation, and smart recommendations.',
    price: 'From $2,000',
    features: ['AI chatbots', 'Content automation', 'Smart analytics', 'Custom AI models'],
    color: 'pink',
  },
  {
    icon: '📱',
    title: 'Mobile Consultation',
    description: 'Expert advice on mobile strategy, app development, and making your business mobile-ready.',
    price: 'From $500',
    features: ['Mobile audit', 'App strategy', 'UX optimization', 'Performance tuning'],
    color: 'cyan',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', badge: 'bg-green-100 text-green-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600', badge: 'bg-pink-100 text-pink-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', badge: 'bg-cyan-100 text-cyan-700' },
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Everything Your Business Needs{' '}
            <span className="text-blue-600">Online</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From simple websites to complex AI-powered systems — we build it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const colors = colorMap[service.color]
            return (
              <div
                key={service.title}
                className={`group relative ${colors.bg} border ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-bold`}>
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className={`w-4 h-4 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
