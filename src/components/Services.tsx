const services = [
  {
    title: 'Store Design & Setup',
    description: 'Shopify store buildout, theme customization, app integrations, and conversion rate optimization. We handle the technical foundation so your store can scale without breaking.',
    icon: '/icons/icon-storefront.png', // Icon #3 - Storefront + Infrastructure
  },
  {
    title: 'Development & Technical',
    description: 'Custom development, technical integrations, and backend systems. We build the infrastructure that powers seamless e-commerce experiences.',
    icon: '/icons/icon-cart-tools.png', // Icon #5 - Cart + Tools
  },
  {
    title: 'Optimization & Growth',
    description: 'Data-driven optimization, analytics, and growth strategies. We analyze, test, and refine every aspect of your store to maximize revenue.',
    icon: '/icons/icon-analytics.png', // Icon #6 - Analytics + Growth
  },
  {
    title: 'Strategic Consulting',
    description: 'Expert guidance on e-commerce strategy, planning, and execution. We help you make the right decisions for sustainable, profitable growth.',
    icon: '/icons/icon-pencil.png', // Icon #8 - Pencil
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
    <section id="services" className="scroll-section section-padding bg-black relative overflow-hidden">
      {/* Background Effects - Orange gradiation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green/10 via-green/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green/5 blur-[80px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 px-4">
          <span className="text-green text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-4 text-white">
            Four Pillars of <span className="text-green">E-Commerce Growth</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We build the systems underneath your Shopify store so growth feels intentional, not chaotic.
          </p>
        </div>

        {/* 4-Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-200 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-300 hover:border-green/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" fill="%2392FD7B" opacity="0.2"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2392FD7B" font-size="48"%3E?%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 text-green transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-black leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-green text-white font-display rounded-xl px-8 py-4 text-lg uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_40px_rgba(255,55,1,0.4)] transition-all duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
