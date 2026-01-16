type CaseStudy = {
  id: number;
  brand: string;
  industry: string;
  category: 'E-Commerce' | 'Shopify' | 'DTC';
  campaignType: string;
  color: string;
  stats: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    brand: 'Chuga',
    industry: 'Premium Apparel',
    category: 'DTC',
    campaignType: 'Full-Stack Growth',
    color: '#FF6B00',
    stats: [
      { label: 'Revenue Growth', value: '340%', highlight: true },
      { label: 'ROAS', value: '4.2x' },
      { label: 'Email Revenue', value: '32%' },
      { label: 'Timeline', value: '12 Months' },
    ],
  },
  {
    id: 2,
    brand: 'AANM',
    industry: 'Beauty & Wellness',
    category: 'E-Commerce',
    campaignType: 'Paid Ads + CRO',
    color: '#2196F3',
    stats: [
      { label: 'AOV Increase', value: '+47%', highlight: true },
      { label: 'CVR', value: '3.8%' },
      { label: 'CAC Reduction', value: '-28%' },
      { label: 'Platform', value: 'Shopify Plus' },
    ],
  },
  {
    id: 3,
    brand: 'Portalba',
    industry: 'Home & Lifestyle',
    category: 'Shopify',
    campaignType: 'Store Build + Automation',
    color: '#FF4D00',
    stats: [
      { label: 'Store Launch', value: '6 Weeks', highlight: true },
      { label: 'Email Open Rate', value: '42%' },
      { label: 'SMS CTR', value: '12.3%' },
      { label: 'Repeat Rate', value: '38%' },
    ],
  },
];

const CaseStudies = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="scroll-section section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg-grey.png)',
            backgroundColor: '#374151', // Fallback color - dark grey (gray-700)
          }}
        ></div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-green/5 rounded-full blur-[70px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block">Client Results</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wider mb-4 text-black">
            Built to <span className="text-green">Scale</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg md:text-xl">
            Real brands. Real systems. Real revenue growth.
          </p>
        </div>

        {/* Case Study Cards - All displayed, no filters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="relative cursor-pointer group h-full">
              <div className="h-full bg-card rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col border-gray-800/50 hover:border-gray-700">
                {/* Icon/Visual Section */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

                  {/* Animated Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[90, 130, 170].map((size, index) => (
                      <div
                        key={index}
                        className="absolute rounded-full transition-all duration-700 opacity-30"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          border: `1px solid ${caseStudy.color}`,
                          opacity: 0.1,
                        }}
                      />
                    ))}
                  </div>

                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${caseStudy.color}25 0%, transparent 60%)`,
                    }}
                  ></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white">
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* Campaign Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-black/60 text-gray-400">
                      {caseStudy.campaignType}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1 transition-colors duration-300 text-black">
                    {caseStudy.brand}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-5">{caseStudy.industry}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 flex-grow">
                    {caseStudy.stats.map((stat, index) => (
                      <div key={index} className="text-center bg-gray-800/40 rounded-xl py-3 px-2">
                        <div
                          className={`text-xl md:text-2xl font-bold ${
                            stat.highlight ? 'text-black' : 'text-black'
                          }`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-green hover:text-black transition-colors text-base font-semibold cursor-pointer bg-transparent border-none"
          >
            Build systems like these for your brand
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
