import { useState } from 'react';

type HeroProps = {
  backgroundVariant?: 'default' | 'dark' | 'gradient';
};

const Hero = ({ backgroundVariant = 'default' }: HeroProps) => {
  const [bgVariant, setBgVariant] = useState(backgroundVariant);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgroundStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundImage: `url(${import.meta.env.BASE_URL}bg-grey.png)`,
      backgroundColor: '#374151',
    },
    dark: {
      backgroundColor: '#111111',
      backgroundImage: 'radial-gradient(ellipse at top, rgba(255,55,1,0.12) 0%, rgba(255,55,1,0.04) 40%, transparent 70%)',
    },
    gradient: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background - switchable via prop or state */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={backgroundStyles[bgVariant]}
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-[120px] sm:pt-[136px] pb-16 md:pb-24">
        {/* Logo */}
        <div className="mb-6 md:mb-8 mt-4 animate-fade-in-up">
          <img
            src={`${import.meta.env.BASE_URL}logos/logo-color.png`}
            alt="Shop Yard"
            className="h-24 md:h-36 lg:h-44 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-6xl md:text-8xl font-display text-white">
            SHOP YARD
          </div>
        </div>

        {/* Headline */}
        <div className="mb-8 md:mb-10 max-w-5xl animate-fade-in-up delay-100">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[1.1] mb-5 ${bgVariant === 'default' ? 'text-black' : 'text-white'}`}>
            We Turn Shopify Stores Into{' '}
            <span className="text-green inline-block">Revenue Engines</span>
          </h1>
          <p className={`mx-auto leading-relaxed max-w-3xl text-lg md:text-xl lg:text-2xl ${bgVariant === 'default' ? 'text-black' : 'text-gray-300'}`}>
            Technical infrastructure and conversion experts who scale e-commerce businesses fast.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-200 mb-6">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center bg-green text-white font-sans rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ padding: 'clamp(10px, 1.8vh, 14px) clamp(28px, 3.5vw, 44px)', fontSize: 'clamp(0.9rem, 1.3vw, 1.15rem)' }}
          >
            <span className="relative z-10 uppercase tracking-wider">Book a Call</span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Background Variant Switcher */}
        <div className="animate-fade-in-up delay-300 flex items-center gap-2 mt-2">
          {(['default', 'dark', 'gradient'] as const).map((variant) => (
            <button
              key={variant}
              onClick={() => setBgVariant(variant)}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                bgVariant === variant
                  ? 'border-green scale-110'
                  : 'border-gray-400 hover:border-gray-300'
              }`}
              style={{
                backgroundColor:
                  variant === 'default'
                    ? '#374151'
                    : variant === 'dark'
                    ? '#111111'
                    : '#2d1810',
              }}
              title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} background`}
            />
          ))}
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
