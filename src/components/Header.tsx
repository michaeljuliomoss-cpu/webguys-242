import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-bold text-gray-900">WebGuys<span className="text-blue-600">.242</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-600 hover:text-blue-600 transition font-medium">Services</Link>
          <Link href="#templates" className="text-gray-600 hover:text-blue-600 transition font-medium">Templates</Link>
          <Link href="#systems" className="text-gray-600 hover:text-blue-600 transition font-medium">Systems & AI</Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition font-medium">Portfolio</Link>
          <Link href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
