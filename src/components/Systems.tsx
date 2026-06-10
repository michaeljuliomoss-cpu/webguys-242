"use client";

const features = [
  {
    title: "Business Systems",
    description: "Custom CRM, inventory management, booking systems, and operational tools that run your business on autopilot.",
    tags: ["Custom CRM", "Inventory tracking", "Booking systems", "Workflow automation"],
    color: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "SaaS Products",
    description: "Full-scale software-as-a-service platforms. From idea to launch — we handle design, development, and deployment.",
    tags: ["Multi-tenant architecture", "Subscription billing", "User management", "Analytics dashboard"],
    color: "violet",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description: "Add intelligence to any system — chatbots, recommendation engines, content generation, and predictive analytics.",
    tags: ["AI chatbots", "Smart recommendations", "Content automation", "Predictive analytics"],
    color: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "API & Integrations",
    description: "Connect your tools and automate everything. Payment gateways, email systems, social media, and third-party APIs.",
    tags: ["Payment processing", "Email automation", "Social media API", "Custom webhooks"],
    color: "slate",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { iconBg: string; iconText: string; tagBg: string; tagText: string; border: string }> = {
  blue: { iconBg: "bg-blue-100", iconText: "text-blue-600", tagBg: "bg-blue-50", tagText: "text-blue-700", border: "border-blue-100" },
  violet: { iconBg: "bg-violet-100", iconText: "text-violet-600", tagBg: "bg-violet-50", tagText: "text-violet-700", border: "border-violet-100" },
  slate: { iconBg: "bg-slate-100", iconText: "text-slate-600", tagBg: "bg-slate-50", tagText: "text-slate-700", border: "border-slate-200" },
};

export default function Systems() {
  return (
    <section id="systems" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Systems & AI
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Beyond Websites —{" "}
            <span className="text-blue-600">Full Solutions</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We don't just build websites. We build the systems that power your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white ${colors.border}`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText} shrink-0 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 mb-4 text-sm leading-relaxed">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span key={tag} className={`${colors.tagBg} ${colors.tagText} text-xs font-semibold px-3 py-1 rounded-full border ${colors.border}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
