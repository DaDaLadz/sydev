const services = [
  {
    title: 'Store Infrastructure & Optimization',
    description: 'Shopify store buildout, theme customization, app integrations, and conversion rate optimization. We handle the technical foundation so your store can scale without breaking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    reverse: false,
  },
  {
    title: 'Paid Ads & Analytics',
    description: 'Meta, Google, TikTok campaigns built for performance. Full-funnel strategy, creative testing, and data-driven optimization to drive revenue, not just traffic.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    reverse: true,
  },
  {
    title: 'Email & SMS Automation',
    description: 'Klaviyo flows, segmentation, and lifecycle campaigns that turn browsers into buyers and one-time customers into repeat revenue streams.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    reverse: false,
  },
  {
    title: 'Branding & Creative',
    description: 'Brand identity, product photography, ad creative, and landing page design. We build the visual and messaging system that makes your brand feel premium.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    reverse: true,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-light/10 blur-[80px] rounded-full will-change-transform"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-light/10 blur-[60px] rounded-full will-change-transform"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 blur-[100px] rounded-full will-change-transform"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display uppercase tracking-tight mb-3 sm:mb-4">
            Four Pillars of <span className="gradient-text">E-Commerce Growth</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build the systems underneath your Shopify store so growth feels intentional, not chaotic.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index}>
              <div
                className={`group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-colors duration-300 flex flex-col ${
                  service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover transition-transform duration-500 scale-100 brightness-50"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent md:hidden`}
                  ></div>
                  <div
                    className={`absolute inset-0 ${
                      service.reverse ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                    } from-card via-card/50 to-transparent hidden md:block`}
                  ></div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-accent/30 border border-accent/50 flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-5 sm:p-8 md:p-12 bg-card flex flex-col justify-center">
                  <div className="text-accent mb-3 sm:mb-4 md:hidden">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-display uppercase mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-light/10 to-orange-light/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button onClick={scrollToContact} className="btn-secondary inline-block">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
