import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Do you only work with Shopify stores?',
    answer:
      "We specialize in Shopify and Shopify Plus because that's where 90% of scaling DTC brands live. But we've also built on WooCommerce, BigCommerce, and custom platforms. If you're outgrowing your tech stack, we'll tell you whether to fix it or migrate.",
  },
  {
    question: 'What size brands do you typically work with?',
    answer:
      "Our clients are doing $500K-$10M+ annually and hitting technical walls. You're past the Fiverr freelancer phase. You need real infrastructure, not more patches. If your store breaks under traffic or you're losing sales to site speed, we can fix it.",
  },
  {
    question: 'How does the engagement process work?',
    answer:
      "Discovery call. We audit your store, identify what's bottlenecking growth, and propose a plan. Could be a one-time build, a 3-month sprint, or an ongoing retainer. Most clients work with us for 6-12 months because fixing one thing usually reveals three more opportunities.",
  },
  {
    question: 'Can you help with store migrations?',
    answer:
      "Yes. We've migrated dozens of brands to Shopify from dying platforms. WooCommerce to Shopify. Magento to Shopify Plus. Custom nightmares to clean Shopify setups. We handle data, design, SEO, integrations, and post-launch optimization so nothing breaks.",
  },
  {
    question: 'What kind of results can we expect?',
    answer:
      "Our clients typically see 2-4x revenue growth within 12 months. Better conversion rates, faster sites, lower CAC, higher LTV. We focus on compounding improvements — infrastructure that makes every dollar you spend on marketing work harder.",
  },
  {
    question: 'Do you offer one-time projects or only retainers?',
    answer:
      "Both. One-time: store builds, migrations, speed optimization, conversion audits. Retainer: ongoing CRO, development, optimization, and growth. Most brands start with a project, see results, then keep us around to keep scaling.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="scroll-section section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}bg-grey.png)`,
            backgroundColor: '#374151', // Fallback color - dark grey (gray-700)
          }}
        ></div>
      </div>

      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green/5 blur-[80px] rounded-full will-change-transform"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wider mb-2 text-black">
            Frequently Asked <span className="text-green">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`bg-black rounded-xl border border-gray-600 p-5 md:p-6 cursor-pointer transition-all duration-300 ${
                  openIndex === index ? 'border-green/50 shadow-lg' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-sans uppercase tracking-tight pr-4 text-white">{faq.question}</h3>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-green/50 flex items-center justify-center text-green text-2xl transition-all duration-300 ${
                      openIndex === index ? 'rotate-45 bg-green/20' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-base md:text-lg text-white leading-relaxed font-sans">{faq.answer}</p>
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
