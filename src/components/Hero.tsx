import { useState } from 'react';

const partners = [
  { name: 'Chuga', category: 'Client', color: '#FF6B00', textColor: '#fff', font: 'Montserrat', fontSize: '1.3rem', fontWeight: '700', letterSpacing: '0.08em' },
  { name: 'AANM', category: 'Client', color: '#2196F3', textColor: '#fff', font: "'Helvetica Neue', Arial, sans-serif", fontSize: '1.4rem', fontWeight: '700', letterSpacing: '0.12em' },
  { name: 'Portalba', category: 'Client', color: '#FF4D00', textColor: '#fff', font: 'Playfair Display', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0.1em' },
];

const Hero = () => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const currentPartner = partners[currentPartnerIndex];

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
        <div className="absolute inset-0 bg-[#080810]"></div>

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${300 + i * 50}px`,
                height: `${300 + i * 50}px`,
                top: `${-10 + i * 10}%`,
                left: i % 2 === 0 ? `${-5 + i * 5}%` : 'auto',
                right: i % 2 !== 0 ? `${-8 + i * 2}%` : 'auto',
                background: `radial-gradient(circle, rgba(255, ${77 + i * 20}, ${i * 10}, 0.${12 - i}) 0%, rgba(255, ${120 - i * 10}, 50, 0.${6 - i}) 40%, transparent 70%)`,
                animation: `orbFloat${(i % 5) + 1} ${12 + i * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          {/* Wave Layer 1 */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-0" style={{ height: '120px', opacity: 0.3 }}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="flex-1 mx-[0.5px] rounded-t-sm"
                style={{
                  maxWidth: '2px',
                  background: 'linear-gradient(to top, rgba(255, 77, 0, 0.5) 0%, rgba(255, 120, 50, 0.2) 60%, transparent 100%)',
                  animation: `wave1 ${8 + (i % 5) * 2}s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Wave Layer 2 */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-0" style={{ height: '90px', opacity: 0.45 }}>
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="flex-1 mx-[0.5px] rounded-t-sm"
                style={{
                  maxWidth: '2.5px',
                  background: 'linear-gradient(to top, rgba(255, 77, 0, 0.6) 0%, rgba(255, 100, 50, 0.3) 50%, transparent 100%)',
                  animation: `wave2 ${6 + (i % 4) * 1.5}s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Wave Layer 3 */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-0" style={{ height: '60px', opacity: 0.6 }}>
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="flex-1 mx-[0.5px] rounded-t-sm"
                style={{
                  maxWidth: '1.5px',
                  background: 'linear-gradient(to top, rgba(255, 77, 0, 0.7) 0%, rgba(255, 150, 80, 0.4) 40%, transparent 100%)',
                  animation: `wave3 ${5 + (i % 3) * 1}s ease-in-out ${i * 0.08}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Glow Line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 md:h-2"
            style={{
              background: 'linear-gradient(to top, rgba(255, 77, 0, 0.4) 0%, transparent 100%)',
              boxShadow: '0 0 30px rgba(255, 77, 0, 0.3), 0 0 60px rgba(255, 77, 0, 0.15)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-20 pb-10">
        {/* Logo */}
        <div className="mb-6 md:mb-10 animate-fade-in-up">
          <div className="text-5xl md:text-7xl font-display text-accent drop-shadow-[0_0_25px_rgba(255,77,0,0.3)]">
            SHOP YARD
          </div>
        </div>

        {/* Headline */}
        <div className="mb-8 md:mb-12 max-w-4xl animate-fade-in-up delay-100">
          <h1 className="font-bold tracking-tight leading-[1.1] mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            As your online business grows, your systems need to{' '}
            <span className="text-accent inline-block">grow with it.</span>
          </h1>
          <p className="text-gray-400 mx-auto leading-relaxed max-w-2xl text-lg md:text-xl">
            We help e-commerce brands build the systems underneath their storefront,{' '}
            <span className="text-white font-medium">so scale feels smooth, not fragile.</span>
          </p>
        </div>

        {/* Trusted Partners */}
        <div className="w-full max-w-6xl animate-fade-in-up delay-200">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent mb-6 opacity-90">
            Trusted by ambitious brands like
          </p>

          {/* Partners Carousel */}
          <div className="relative w-full mb-6">
            <div className="flex items-center justify-center gap-2 px-2">
              <button
                onClick={prevPartner}
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all border border-white/20"
                aria-label="Previous partners"
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2 flex-1 justify-center">
                <div
                  className="mobile-tile max-w-[200px] w-full relative flex items-center justify-center rounded-2xl border-2 overflow-hidden"
                  style={{
                    height: '75px',
                    background: 'linear-gradient(160deg, rgba(25, 25, 40, 0.98) 0%, rgba(15, 15, 30, 0.95) 100%)',
                    backdropFilter: 'blur(16px)',
                    borderColor: currentPartner.color,
                    boxShadow: `0 0 20px ${currentPartner.color}50`,
                  }}
                >
                  <span
                    className="relative z-10 text-center px-3"
                    style={{
                      fontFamily: currentPartner.font,
                      fontSize: currentPartner.fontSize,
                      fontWeight: currentPartner.fontWeight,
                      letterSpacing: currentPartner.letterSpacing,
                      color: currentPartner.textColor,
                    }}
                  >
                    {currentPartner.name}
                  </span>
                </div>
              </div>

              <button
                onClick={nextPartner}
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all border border-white/20"
                aria-label="Next partners"
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {partners.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: i === currentPartnerIndex ? '24px' : '8px',
                    background: i === currentPartnerIndex ? 'linear-gradient(90deg, #FF6B00, #FF4D00)' : 'rgba(255, 255, 255, 0.2)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-400">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-accent to-orange text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,77,0,0.4)]"
            style={{ padding: 'clamp(12px, 2vh, 16px) clamp(32px, 4vw, 48px)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            <span className="relative z-10 uppercase tracking-wider">Learn More</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
