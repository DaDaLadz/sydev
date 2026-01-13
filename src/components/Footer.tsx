const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-midnight border-t border-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-3xl font-display uppercase tracking-wider mb-4">
              Shop <span className="gradient-text">Yard</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              We help e-commerce brands build the systems underneath their storefront, so scale feels smooth, not fragile.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              A 4Labs Digital Company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:hello@shopyard.com" className="hover:text-accent transition-colors">
                  hello@shopyard.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2025 Shop Yard. A 4Labs Digital Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
