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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg-grey.png)',
            backgroundColor: '#374151', // Fallback color - dark grey (gray-700)
          }}
        ></div>

        {/* Subtle Orange Accent Orbs */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                top: `${10 + i * 15}%`,
                left: i === 0 ? '-10%' : i === 1 ? '50%' : 'auto',
                right: i === 2 ? '-10%' : 'auto',
                background: `radial-gradient(circle, rgba(255, 55, 1, 0.2) 0%, rgba(255, 55, 1, 0.1) 40%, transparent 70%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-[138px] sm:pt-[154px] pb-32">
        {/* Logo - User should add logo-color.png to /public/logos/ */}
        <div className="mb-8 md:mb-12 mt-6 animate-fade-in-up">
          <img
            src="/logos/logo-color.png"
            alt="Shop Yard"
            className="h-32 md:h-48 lg:h-56 w-auto"
            onError={(e) => {
              // Fallback to text if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-7xl md:text-9xl font-display text-white">
            SHOP YARD
          </div>
        </div>

        {/* Headline */}
        <div className="mb-12 md:mb-16 max-w-5xl animate-fade-in-up delay-100">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[1.1] mb-8 text-black">
            As your online business grows, your systems need to{' '}
            <span className="text-green inline-block">grow with it.</span>
          </h1>
          <p className="text-black mx-auto leading-relaxed max-w-3xl text-xl md:text-2xl lg:text-3xl">
            We help e-commerce brands build the systems underneath their storefront,{' '}
            <span className="text-green font-medium">so scale feels smooth, not fragile.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-200 mb-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center bg-green text-white font-display rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ padding: 'clamp(12px, 2vh, 16px) clamp(32px, 4vw, 48px)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            <span className="relative z-10 uppercase tracking-wider">Book a Call</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce opacity-50 mt-4">
          <div className="w-5 h-8 border-2 border-green/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
