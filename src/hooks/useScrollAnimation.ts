import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px', // Trigger when section is 20% from bottom of viewport
      threshold: 0.05, // Trigger as soon as 5% is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Add class when scrolling into view, remove when scrolling out
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-section-visible');
        } else {
          entry.target.classList.remove('scroll-section-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with scroll-section class
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};
