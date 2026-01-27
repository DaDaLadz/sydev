import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-between items-center h-[118px] sm:h-[134px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logos/logo-black.png`}
              alt="Shop Yard"
              className="h-[74px] sm:h-[90px] w-auto"
              onError={(e) => {
                // Fallback to text if logo not found
                e.currentTarget.style.display = 'none';
                const text = document.createElement('span');
                text.className = 'text-2xl font-display text-black';
                text.textContent = 'SY';
                e.currentTarget.parentElement?.appendChild(text);
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-black text-xl font-medium uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-black text-xl font-medium uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-black text-xl font-medium uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green text-white font-sans px-8 py-4 rounded-lg text-xl uppercase tracking-wider hover:shadow-lg transition-all duration-300 border-none cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:text-green transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 max-h-screen pointer-events-auto' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-6">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left py-4 px-4 text-2xl text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="w-full text-left py-4 px-4 text-2xl text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="w-full text-left py-4 px-4 text-2xl text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              FAQ
            </button>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green text-white font-sans px-8 py-5 rounded-xl text-2xl uppercase tracking-wider text-center cursor-pointer border-none hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
