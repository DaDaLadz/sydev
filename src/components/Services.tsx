const services = [
  {
    title: 'Store Design & Setup',
    description: 'Shopify builds designed for conversion with custom themes, strategic apps, and optimized checkout flows.',
    icon: `${import.meta.env.BASE_URL}icons/icon-storefront.png`,
  },
  {
    title: 'Development & Technical',
    description: 'We build the technical infrastructure that keeps high-volume stores running with custom code and API integrations.',
    icon: `${import.meta.env.BASE_URL}icons/icon-cart-tools.png`,
  },
  {
    title: 'Optimization & Growth',
    description: 'CRO testing, analytics tracking, systematic revenue optimization. We eliminate friction, fix leaks, and compound conversions.',
    icon: `${import.meta.env.BASE_URL}icons/icon-analytics.png`,
  },
  {
    title: 'Strategic Consulting',
    description: 'Expert guidance from the team that\'s scaled brands to millions. We tell you what to build, what to kill, and what moves revenue.',
    icon: `${import.meta.env.BASE_URL}icons/icon-pencil.png`,
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
        <div className="text-center mb-8 md:mb-12 px-4">
          <span className="text-green text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-3 text-white">
            Four Ways We Scale <span className="text-green">Your Store</span>
          </h2>
        </div>

        {/* 4-Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-200 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-300 hover:border-green/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" fill="%2392FD7B" opacity="0.2"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2392FD7B" font-size="48"%3E?%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-sans uppercase mb-3 text-green transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-black leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-transparent rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-green text-white font-display rounded-xl px-6 py-3 text-base uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_40px_rgba(255,55,1,0.4)] transition-all duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
