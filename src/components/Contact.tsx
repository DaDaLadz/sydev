import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  brandName: string;
  services: string[];
  budget: string;
  timeline: string;
  goals: string;
  additionalInfo: string;
};

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    brandName: '',
    services: [],
    budget: '',
    timeline: '',
    goals: '',
    additionalInfo: '',
  });

  // const roles = ['Brand Owner', 'CMO/Marketing Lead', 'Agency Partner', 'E-Commerce Manager', 'Investor', 'Other'];
  const services = ['Store Design & Setup', 'Development & Technical', 'Optimization & Growth', 'Strategic Consulting'];
  const budgets = ['Under $10K/mo', '$10K-$25K/mo', '$25K-$50K/mo', '$50K-$100K/mo', '$100K+/mo', 'One-Time Project'];
  const timelines = ['ASAP', '2-4 Weeks', '1-2 Months', '3+ Months', 'Flexible'];

  const totalSteps = 3;

  const canProceed = () => {
    if (currentStep === 0) {
      return formData.name && formData.email && formData.services.length > 0;
    }
    if (currentStep === 1) {
      return formData.budget && formData.timeline;
    }
    if (currentStep === 2) {
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (canProceed() && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleRoleSelect = (role: string) => {
  //   setFormData({ ...formData, role });
  // };

  const handleServiceToggle = (service: string) => {
    const services = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  const handleTimelineSelect = (timeline: string) => {
    setFormData({ ...formData, timeline });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will be in touch soon to discuss your project.');
  };

  return (
    <section id="contact" className="scroll-section section-padding bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green/10 via-green/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green/8 blur-[80px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wider mb-4 text-white">
              Ready to Build a Store That Can Handle{' '}
              <span className="text-green">Your Growth?</span>
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              Tell us where you are and where you're going. We'll show you exactly what's broken, what's missing, and what it takes to scale without the chaos.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-700 space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-white">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm text-white">A Comprehensive Audit</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="backdrop-blur-sm rounded-2xl border border-gray-600 p-4 sm:p-8 w-full max-w-full overflow-hidden shadow-lg" style={{ backgroundColor: '#d8d9da' }}>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-3xl font-sans uppercase mb-2 text-black">
                Start Your <span className="text-green">Project</span>
              </h3>
              <p className="text-black text-sm sm:text-base">Tell us what you're building.</p>
            </div>

            {/* Progress Indicator */}
            <div className="w-full max-w-full overflow-hidden">
              <div className="flex items-center justify-between mb-5 w-full">
                {[...Array(totalSteps)].map((_, index) => (
                  <div key={index} className="flex items-center flex-1">
                    <button
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all flex-shrink-0 ${
                        index <= currentStep ? 'bg-green text-white' : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                    {index < totalSteps - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 transition-all rounded ${
                          index < currentStep ? 'bg-green' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Steps */}
              <div className="min-h-[300px]">
                {/* Step 1: About You */}
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-black">About You</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="input-field text-base py-3"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          className="input-field text-base py-3"
                          placeholder="you@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">Phone (optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          className="input-field text-base py-3"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Desired Services *</label>
                        <p className="text-xs text-gray-600 mb-2">Select all that apply</p>
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all text-left ${
                                formData.services.includes(service)
                                  ? 'border-green bg-green/20 text-black'
                                  : 'border-gray-400 bg-gray-100 hover:border-gray-500 text-gray-700'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">
                          Brand/Company Name (optional)
                        </label>
                        <input
                          type="text"
                          name="brandName"
                          className="input-field text-base py-3"
                          placeholder="Your brand name"
                          value={formData.brandName}
                          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Budget & Timeline */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-black">Budget & Timeline</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">Budget *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgets.map((budget) => (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => handleBudgetSelect(budget)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.budget === budget
                                  ? 'border-green bg-green/20 text-black'
                                  : 'border-gray-400 bg-gray-100 hover:border-gray-500 text-gray-700'
                              }`}
                            >
                              {budget}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">When do you want to start? *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelines.map((timeline) => (
                            <button
                              key={timeline}
                              type="button"
                              onClick={() => handleTimelineSelect(timeline)}
                              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                formData.timeline === timeline
                                  ? 'border-green bg-green/20 text-black'
                                  : 'border-gray-400 bg-gray-100 hover:border-gray-500 text-gray-700'
                              }`}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Final Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold text-black">Tell Us More</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">
                          What are your main goals?
                        </label>
                        <textarea
                          name="goals"
                          rows={3}
                          className="input-field text-base py-3"
                          placeholder="E.g., increase conversion rate, scale profitably, launch new store..."
                          value={formData.goals}
                          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1.5">
                          Anything else we should know?
                        </label>
                        <textarea
                          name="additionalInfo"
                          rows={3}
                          className="input-field text-base py-3"
                          placeholder="Current platform, revenue, team size, challenges, etc."
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">
                <div>
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="text-gray-600 hover:text-black transition-colors text-sm py-2.5 px-5 flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={currentStep === totalSteps - 1 ? handleSubmit : handleNext}
                  disabled={!canProceed()}
                  className="bg-green text-white font-display rounded-xl px-5 py-2.5 text-sm flex items-center gap-1.5 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {currentStep === totalSteps - 1 ? 'Submit' : 'Continue'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
