const systems = [
  {
    icon: '🔧',
    title: 'Business Systems',
    description: 'Custom CRM, inventory management, booking systems, and operational tools that run your business on autopilot.',
    features: ['Custom CRM', 'Inventory tracking', 'Booking systems', 'Workflow automation'],
    image: '📊',
  },
  {
    icon: '☁️',
    title: 'SaaS Products',
    description: 'Full-scale software-as-a-service platforms. From idea to launch — we handle design, development, and deployment.',
    features: ['Multi-tenant architecture', 'Subscription billing', 'User management', 'Analytics dashboard'],
    image: '🚀',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Add intelligence to any system — chatbots, recommendation engines, content generation, and predictive analytics.',
    features: ['AI chatbots', 'Smart recommendations', 'Content automation', 'Predictive analytics'],
    image: '🧠',
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    description: 'Connect your tools and automate everything. Payment gateways, email systems, social media, and third-party APIs.',
    features: ['Payment processing', 'Email automation', 'Social media API', 'Custom webhooks'],
    image: '⚡',
  },
]

export default function Systems() {
  return (
    <section id="systems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Systems & AI
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Beyond Websites —{' '}
            <span className="text-blue-600">Full Solutions</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We don't just build websites. We build the systems that power your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                i % 2 === 0
                  ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200'
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
