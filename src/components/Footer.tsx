import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">WebGuys<span className="text-blue-400">.242</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building websites and systems for businesses in the Bahamas and beyond. From $200 starter sites to full-scale SaaS platforms.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#services" className="hover:text-blue-400 transition">Custom Websites</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition">Starter Sites</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition">E-Commerce</Link></li>
              <li><Link href="#systems" className="hover:text-blue-400 transition">Business Systems</Link></li>
              <li><Link href="#systems" className="hover:text-blue-400 transition">AI Integration</Link></li>
              <li><Link href="#systems" className="hover:text-blue-400 transition">SaaS Development</Link></li>
            </ul>
          </div>

          {/* Templates */}
          <div>
            <h4 className="font-bold text-lg mb-4">Templates</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#templates" className="hover:text-blue-400 transition">Restaurant & Food</Link></li>
              <li><Link href="#templates" className="hover:text-blue-400 transition">Beauty & Salon</Link></li>
              <li><Link href="#templates" className="hover:text-blue-400 transition">Tech & Startup</Link></li>
              <li><Link href="#templates" className="hover:text-blue-400 transition">Real Estate</Link></li>
              <li><Link href="#templates" className="hover:text-blue-400 transition">E-Commerce</Link></li>
              <li><Link href="#templates" className="hover:text-blue-400 transition">View All →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Nassau, Bahamas</li>
              <li>📱 +1 (242) XXX-XXXX</li>
              <li>📧 hello@webguys242.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-lg">📘</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-lg">📸</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-lg">🐦</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition text-lg">💬</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WebGuys.242. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ in the Bahamas 🇧🇸
          </p>
        </div>
      </div>
    </footer>
  )
}
