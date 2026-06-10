export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            #1 Web Design Agency in the Bahamas
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            We Build Websites That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Make You Money
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Custom websites, powerful systems, and AI-driven tools — built for businesses in the Bahamas and beyond. 
            From $200 starter sites to full-scale SaaS platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Start Your Project →
            </a>
            <a
              href="#templates"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-200 hover:border-blue-400 transition hover:-translate-y-0.5"
            >
              View Templates
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'].map((color, i) => (
                <div key={i} className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                  {['TG', 'BT', 'KG', 'CR'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-gray-900">50+ Happy Clients</p>
              <p className="text-sm text-gray-500">TechGuys.242, BraidsByTina, K&G Hair & more</p>
            </div>
          </div>
        </div>

        {/* Right: Video / Promo */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-100">
            {/* Video placeholder — replace src with actual promo video */}
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMi0ydi0ySDI2djJoOHptMC00di0ySDI2djJoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
              <div className="text-center z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 font-medium">Watch Our Promo Video</p>
                <p className="text-white/50 text-sm mt-1">See what we can do for your business</p>
              </div>
            </div>
            {/* Uncomment when you have a real video: */}
            {/* <video
              className="w-full aspect-video object-cover"
              autoPlay muted loop playsInline
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/promo.mp4" type="video/mp4" />
            </video> */}
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">5-14 Days</p>
                <p className="text-sm text-gray-500">Average delivery</p>
              </div>
            </div>
          </div>
          {/* Floating badge 2 */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Award Winning</p>
                <p className="text-sm text-gray-500">Design quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
