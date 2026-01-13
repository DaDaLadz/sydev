const services = [
  {
    title: 'Influencer Marketing',
    description: 'Access our network of thousands of macro, micro, and nano creators and tastemakers worldwide. We handle outreach, negotiate rates, write briefs, and get authentic placements to market with real impact.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    reverse: false,
  },
  {
    title: 'Playlist Placements',
    description: 'Independent curator playlists with real, engaged followers on Spotify. No bots, no gimmicks, just fast results. Whether hip hop, pop, EDM, or country, we got you covered.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    reverse: true,
  },
  {
    title: 'Fan Page Growth',
    description: 'Build owned audiences at scale. We handle page buildout, content curation, posting strategy, community management, and analytics. You focus on the music.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    reverse: false,
  },
  {
    title: 'Paid Advertising',
    description: 'Full funnel campaigns on Meta, YouTube, TikTok, Spotify, and more.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    reverse: true,
  },
  {
    title: 'Social Media Management',
    description: 'Complete social media management for artists and labels. We create content calendars, manage posting schedules, engage with fans, and grow your presence across all major platforms.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    reverse: false,
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display uppercase tracking-tight mb-3 sm:mb-4">
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            End to end music marketing for labels and artists. Every platform. Every strategy. Transparent results.
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
            Explore Your Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
