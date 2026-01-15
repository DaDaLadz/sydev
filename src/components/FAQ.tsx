import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Do you only work with Shopify stores?',
    answer:
      "We specialize in Shopify and Shopify Plus, but we've also worked with brands on WooCommerce, BigCommerce, and custom platforms. Our approach is platform-agnostic - we focus on building systems that scale, no matter what tech stack you're using.",
  },
  {
    question: 'What size brands do you typically work with?',
    answer:
      "Most of our clients are doing $500K-$10M+ in annual revenue and are looking to scale sustainably. We work with both bootstrapped DTC brands and venture-backed e-commerce companies. If you're past the figuring it out phase and ready to build real systems, we can help.",
  },
  {
    question: 'How does the engagement process work?',
    answer:
      "We start with a discovery call to understand your goals, current setup, and biggest pain points. From there, we'll propose a tailored scope - whether that's a full-service retainer, a one-time project, or ongoing support. Most clients work with us on a monthly retainer basis for 6-12 months.",
  },
  {
    question: 'Can you help with store migrations?',
    answer:
      "Yes. We've handled dozens of platform migrations - from WooCommerce to Shopify, Magento to Shopify Plus, and custom builds to Shopify. We handle everything: data migration, theme setup, app integrations, SEO preservation, and post-launch optimization.",
  },
  {
    question: 'What kind of results can we expect?',
    answer:
      "Results vary by brand, but our clients typically see 2-4x revenue growth within 12 months, improved conversion rates, lower CAC, and higher LTV. We focus on sustainable, compounding growth - not quick wins that fall apart under scale.",
  },
  {
    question: 'Do you offer one-time projects or only retainers?',
    answer:
      "Both. We offer one-time projects for things like store builds, migrations, or conversion rate audits. For ongoing growth - paid ads, email automation, CRO testing - we work on monthly retainers. Most clients start with a project and transition to ongoing support once they see results.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-700 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green/5 blur-[80px] rounded-full will-change-transform"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wider mb-4 text-white">
            Frequently Asked <span className="text-green">Questions</span>
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
                className={`bg-gray-800 rounded-2xl border border-gray-600 p-8 cursor-pointer transition-all duration-300 ${
                  openIndex === index ? 'border-green/50 shadow-lg' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-display uppercase tracking-tight pr-4 text-white">{faq.question}</h3>
                  <span
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 border-green/50 flex items-center justify-center text-green text-3xl transition-all duration-300 ${
                      openIndex === index ? 'rotate-45 bg-green/20' : ''
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
                  <p className="text-lg md:text-xl text-white leading-relaxed">{faq.answer}</p>
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
