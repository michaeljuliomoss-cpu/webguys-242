export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Ready to Build{' '}
              <span className="text-blue-600">Something Great?</span>
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Tell us about your project and we'll get back to you within 24 hours. No pressure, no obligation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="font-bold text-gray-900">Location</p>
                  <p className="text-gray-500">Nassau, Bahamas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📱</div>
                <div>
                  <p className="font-bold text-gray-900">WhatsApp</p>
                  <p className="text-gray-500">+1 (242) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📧</div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-500">hello@webguys242.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="font-bold text-gray-900 mb-2">💡 Free Consultation</p>
              <p className="text-gray-600 text-sm">
                Not sure what you need? Book a free 15-minute call and we'll help you figure out the best approach for your business.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">What do you need?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white text-gray-700">
                  <option value="">Select a service...</option>
                  <option>Starter Website ($200)</option>
                  <option>Custom Website ($700+)</option>
                  <option>E-Commerce Store ($1,500+)</option>
                  <option>Backend Dashboard ($1,000+)</option>
                  <option>AI Tools ($2,000+)</option>
                  <option>Full System / SaaS</option>
                  <option>Not sure — need advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="Describe your business and what you're looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
              >
                Send Message →
              </button>
              <p className="text-xs text-gray-400 text-center">
                We'll respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
