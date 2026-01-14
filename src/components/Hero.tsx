import PackagingTape from './PackagingTape';

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black"></div>

        {/* Subtle Green Accent Orbs */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                top: `${10 + i * 15}%`,
                left: i === 0 ? '-10%' : i === 1 ? '50%' : 'auto',
                right: i === 2 ? '-10%' : 'auto',
                background: `radial-gradient(circle, rgba(146, 253, 123, 0.15) 0%, rgba(146, 253, 123, 0.05) 40%, transparent 70%)`,
              }}
            />
          ))}
        </div>

        {/* Packaging Tape Divider at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <PackagingTape />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-20 pb-32">
        {/* Logo - User should add logo-color.png to /public/logos/ */}
        <div className="mb-8 md:mb-12 animate-fade-in-up">
          <img
            src="/logos/logo-color.png"
            alt="Shop Yard"
            className="h-16 md:h-24 w-auto drop-shadow-[0_0_25px_rgba(146,253,123,0.3)]"
            onError={(e) => {
              // Fallback to text if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-5xl md:text-7xl font-display text-green drop-shadow-[0_0_25px_rgba(146,253,123,0.3)]">
            SHOP YARD
          </div>
        </div>

        {/* Headline */}
        <div className="mb-12 md:mb-16 max-w-4xl animate-fade-in-up delay-100">
          <h1 className="font-bold tracking-tight leading-[1.1] mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            As your online business grows, your systems need to{' '}
            <span className="text-green inline-block">grow with it.</span>
          </h1>
          <p className="text-gray-400 mx-auto leading-relaxed max-w-2xl text-lg md:text-xl">
            We help e-commerce brands build the systems underneath their storefront,{' '}
            <span className="text-white font-medium">so scale feels smooth, not fragile.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-200">
          <button
            onClick={() => scrollToSection('services')}
            className="group relative inline-flex items-center justify-center bg-green text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(146,253,123,0.4)]"
            style={{ padding: 'clamp(12px, 2vh, 16px) clamp(32px, 4vw, 48px)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            <span className="relative z-10 uppercase tracking-wider">Learn More</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-5 h-8 border-2 border-green/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
