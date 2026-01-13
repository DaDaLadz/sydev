import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How does the process work?',
    answer:
      "Every campaign starts with a quick onboarding call and a strategy tailored to your goals. We handle creative, targeting, execution, and optimization while you focus on the music. Weekly updates with full transparency on performance.",
  },
  {
    question: 'Is this real promotion or bots?',
    answer:
      'Everything we do is 100% transparent and platform compliant. No bots. No fake streams. No inflated numbers. Our strategies are backed by paid media, creator partnerships, and curated networks, all designed to build long term fans.',
  },
  {
    question: 'What platforms do you promote on?',
    answer:
      'We run campaigns across Spotify, Apple Music, YouTube, TikTok, Instagram, Meta, and a variety of other platforms. Our multi platform approach ensures your roster reaches fans wherever they discover new music.',
  },
  {
    question: 'Do you work with labels or only indie artists?',
    answer:
      'We partner with major labels, indie labels, and independent artists alike. From Universal Music Group and EMPIRE to emerging artists releasing their first single. Our approach stays the same: strategy first, results driven, fully customized.',
  },
  {
    question: 'What kind of results can we expect?',
    answer:
      "Results vary by campaign, but our track record speaks for itself. We've driven 20M+ views for The Weeknd, 22M views for All American Rejects, and achieved 200M+ views for Mo Amer with zero paid ads. We'll discuss realistic targets for your specific goals.",
  },
  {
    question: 'How long until we see results?',
    answer:
      'Most clients see meaningful traction within the first 2 to 4 weeks. However, sustainable growth is a marathon, not a sprint. We focus on building lasting momentum and long term fan engagement.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-midnight relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/8 blur-[80px] rounded-full will-change-transform"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`card cursor-pointer transition-all duration-300 ${
                  openIndex === index ? 'border-accent/50' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold pr-4">{faq.question}</h3>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-accent/50 flex items-center justify-center text-accent text-2xl transition-all duration-300 ${
                      openIndex === index ? 'rotate-45 bg-accent/20' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 mt-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-lg text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
