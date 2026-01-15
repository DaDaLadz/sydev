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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg-grey.png)',
            backgroundColor: '#374151', // Fallback color - dark grey (gray-700)
          }}
        ></div>

        {/* Subtle Green Accent Orbs */}
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
                background: `radial-gradient(circle, rgba(1, 138, 106, 0.2) 0%, rgba(1, 138, 106, 0.1) 40%, transparent 70%)`,
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
        {/* Stacked Boxes - Left Side */}
        <div className="absolute left-4 md:left-8 lg:left-16 bottom-32 md:bottom-40 hidden md:block pointer-events-none">
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-gray-600/50 bg-gray-700/30 backdrop-blur-sm"
                style={{
                  transform: `translateX(${i * 8}px) translateY(${-i * 4}px)`,
                  opacity: 0.6 + i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stacked Boxes - Right Side */}
        <div className="absolute right-4 md:right-8 lg:right-16 bottom-32 md:bottom-40 hidden md:block pointer-events-none">
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-gray-600/50 bg-gray-700/30 backdrop-blur-sm"
                style={{
                  transform: `translateX(${-i * 8}px) translateY(${-i * 4}px)`,
                  opacity: 0.6 + i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo - User should add logo-color.png to /public/logos/ */}
        <div className="mb-8 md:mb-12 animate-fade-in-up">
          <img
            src="/logos/logo-color.png"
            alt="Shop Yard"
            className="h-24 md:h-32 lg:h-40 w-auto"
            onError={(e) => {
              // Fallback to text if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-5xl md:text-7xl font-display text-white">
            SHOP YARD
          </div>
        </div>

        {/* Headline */}
        <div className="mb-12 md:mb-16 max-w-4xl animate-fade-in-up delay-100">
          <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight leading-[1.1] mb-6 text-white">
            As your online business grows, your systems need to{' '}
            <span className="text-green inline-block">grow with it.</span>
          </h1>
          <p className="text-gray-300 mx-auto leading-relaxed max-w-2xl text-lg md:text-xl">
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
