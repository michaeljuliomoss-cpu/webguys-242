"use client";

const services = [
  {
    title: "Custom Website Design",
    price: "From $700",
    description: "Beautiful, responsive websites tailored to your brand. Mobile-first design that converts visitors into customers.",
    features: ["Multi-page design", "Mobile responsive", "SEO optimized", "Custom animations"],
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Starter Websites",
    price: "From $200",
    description: "Get online fast with a clean, professional single-page website. Perfect for small businesses just getting started.",
    features: ["Single page design", "Mobile responsive", "Contact form", "Social links"],
    color: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Stores",
    price: "From $1,500",
    description: "Full online stores with payment processing, inventory management, and everything you need to sell online.",
    features: ["Payment processing", "Inventory management", "Order tracking", "Admin dashboard"],
    color: "violet",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Backend Dashboards",
    price: "From $1,000",
    description: "Custom admin panels and backend systems to manage your business operations efficiently.",
    features: ["User management", "Data analytics", "Role-based access", "API integration"],
    color: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Tools",
    price: "From $2,000",
    description: "Integrate AI into your business — chatbots, automation, content generation, and smart recommendations.",
    features: ["AI chatbots", "Content automation", "Smart analytics", "Custom AI models"],
    color: "rose",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Mobile Consultation",
    price: "From $500",
    description: "Expert advice on mobile strategy, app development, and making your business mobile-ready.",
    features: ["Mobile audit", "App strategy", "UX optimization", "Performance tuning"],
    color: "cyan",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; priceBg: string; priceText: string; border: string; hoverBorder: string }> = {
  blue: { bg: "bg-blue-50/50", iconBg: "bg-blue-100", iconText: "text-blue-600", priceBg: "bg-blue-100", priceText: "text-blue-700", border: "border-blue-100", hoverBorder: "hover:border-blue-200" },
  emerald: { bg: "bg-emerald-50/50", iconBg: "bg-emerald-100", iconText: "text-emerald-600", priceBg: "bg-emerald-100", priceText: "text-emerald-700", border: "border-emerald-100", hoverBorder: "hover:border-emerald-200" },
  violet: { bg: "bg-violet-50/50", iconBg: "bg-violet-100", iconText: "text-violet-600", priceBg: "bg-violet-100", priceText: "text-violet-700", border: "border-violet-100", hoverBorder: "hover:border-violet-200" },
  amber: { bg: "bg-amber-50/50", iconBg: "bg-amber-100", iconText: "text-amber-600", priceBg: "bg-amber-100", priceText: "text-amber-700", border: "border-amber-100", hoverBorder: "hover:border-amber-200" },
  rose: { bg: "bg-rose-50/50", iconBg: "bg-rose-100", iconText: "text-rose-600", priceBg: "bg-rose-100", priceText: "text-rose-700", border: "border-rose-100", hoverBorder: "hover:border-rose-200" },
  cyan: { bg: "bg-cyan-50/50", iconBg: "bg-cyan-100", iconText: "text-cyan-600", priceBg: "bg-cyan-100", priceText: "text-cyan-700", border: "border-cyan-100", hoverBorder: "hover:border-cyan-200" },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Everything Your Business Needs{" "}
            <span className="text-blue-600">Online</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From simple websites to complex AI-powered systems — we build it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`group relative ${colors.bg} border ${colors.border} ${colors.hoverBorder} rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText}`}>
                    {service.icon}
                  </div>
                  <span className={`${colors.priceBg} ${colors.priceText} px-3 py-1 rounded-full text-sm font-bold`}>
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-5 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className={`w-4 h-4 ${colors.iconText} shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
