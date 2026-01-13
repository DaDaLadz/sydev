import { useState } from 'react';

type CaseStudy = {
  id: number;
  artist: string;
  label: string;
  category: 'Artist' | 'Fan Page' | 'Client';
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
    artist: 'The Weeknd',
    label: 'XO / Republic',
    category: 'Artist',
    campaignType: 'Influencer Campaign',
    color: '#E31937',
    stats: [
      { label: 'Views', value: '20M', highlight: true },
      { label: 'Engagement', value: '10.85%' },
      { label: 'Audio Uses', value: '15K+' },
      { label: 'Platform', value: 'TikTok' },
    ],
  },
  {
    id: 2,
    artist: 'All American Rejects',
    label: 'DGC Records',
    category: 'Artist',
    campaignType: 'Influencer Campaign',
    color: '#FF6B00',
    stats: [
      { label: 'Views', value: '22M', highlight: true },
      { label: 'Engagements', value: '750K' },
      { label: 'Audio Uses', value: '50K+' },
      { label: 'Platform', value: 'TikTok' },
    ],
  },
  {
    id: 3,
    artist: 'MC Abdul',
    label: 'Fan Page',
    category: 'Fan Page',
    campaignType: 'Fan Page Growth',
    color: '#FF8C00',
    stats: [
      { label: 'Followers', value: '50K', highlight: true },
      { label: 'Days', value: '90' },
      { label: 'Views', value: '15M' },
      { label: 'Engagement', value: '13%' },
    ],
  },
  {
    id: 4,
    artist: 'Mo Amer',
    label: 'Comedian / Actor',
    category: 'Client',
    campaignType: 'Organic Social Campaign',
    color: '#FF4D00',
    stats: [
      { label: 'Views', value: '200M+', highlight: true },
      { label: 'New Followers', value: '1M+' },
      { label: 'TikTok Growth', value: '+300%' },
      { label: 'Paid Ads', value: '$0' },
    ],
  },
  {
    id: 5,
    artist: 'Mishaal Tamer',
    label: 'Artist',
    category: 'Artist',
    campaignType: 'Playlist Placement',
    color: '#1DB954',
    stats: [
      { label: 'Streams', value: '1M+', highlight: true },
      { label: 'Playlists', value: '50+' },
      { label: 'Countries', value: '10+' },
      { label: 'Platform', value: 'Spotify' },
    ],
  },
  {
    id: 6,
    artist: 'Mishaal Tamer',
    label: 'Artist',
    category: 'Artist',
    campaignType: 'Paid Advertising',
    color: '#FF4D00',
    stats: [
      { label: 'Streams', value: '250K+', highlight: true },
      { label: 'Ad Spend', value: '$5K' },
      { label: 'Platforms', value: '3' },
      { label: 'Blended CPA', value: '$0.14' },
    ],
  },
];

const CaseStudies = () => {
  const [filter, setFilter] = useState<'All' | 'Artist' | 'Fan Page' | 'Client'>('All');

  const filteredCaseStudies = filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.category === filter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="section-padding bg-midnight relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[80px] will-change-transform"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-light/8 rounded-full blur-[70px] will-change-transform"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3 block">Proven Results</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wider mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Real campaigns. Real numbers. Billions of streams and millions in revenue.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(['All', 'Artists', 'Fan Pages', 'Clients'] as const).map((label) => {
            const filterValue = label === 'Artists' ? 'Artist' : label === 'Fan Pages' ? 'Fan Page' : label === 'Clients' ? 'Client' : 'All';
            const isActive = filter === filterValue;

            return (
              <button
                key={label}
                onClick={() => setFilter(filterValue)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'bg-card border border-gray-700 text-gray-400 hover:border-accent/50 hover:text-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((caseStudy) => (
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
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        caseStudy.category === 'Artist'
                          ? 'bg-accent/20 text-accent'
                          : caseStudy.category === 'Fan Page'
                          ? 'bg-orange/20 text-orange'
                          : 'bg-white/10 text-white'
                      }`}
                    >
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
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1 transition-colors duration-300 text-white">
                    {caseStudy.artist}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">{caseStudy.label}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 flex-grow">
                    {caseStudy.stats.map((stat, index) => (
                      <div key={index} className="text-center bg-gray-900/40 rounded-xl py-3 px-2">
                        <div
                          className={`text-xl md:text-2xl font-bold ${
                            stat.highlight ? 'gradient-text' : 'text-white'
                          }`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
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
            className="inline-flex items-center gap-2 text-accent hover:text-orange transition-colors text-base font-semibold cursor-pointer bg-transparent border-none"
          >
            See results like these for your artists
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
