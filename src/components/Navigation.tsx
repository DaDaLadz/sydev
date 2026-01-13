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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-center items-center h-14 sm:h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-400 hover:text-white text-xs uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-400 hover:text-white text-xs uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-400 hover:text-white text-xs uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-accent to-orange text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] transition-all duration-300 border-none cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="bg-[#0a0a12] border-t border-gray-800 px-4 py-6">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left py-4 px-4 text-lg text-white hover:text-accent hover:bg-white/5 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="w-full text-left py-4 px-4 text-lg text-white hover:text-accent hover:bg-white/5 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="w-full text-left py-4 px-4 text-lg text-white hover:text-accent hover:bg-white/5 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer uppercase tracking-wider font-medium"
            >
              FAQ
            </button>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-accent to-orange text-white font-bold px-6 py-4 rounded-xl text-lg uppercase tracking-wider text-center cursor-pointer border-none hover:shadow-[0_0_30px_rgba(255,77,0,0.5)] transition-all duration-300"
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
