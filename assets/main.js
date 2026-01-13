/**
 * Shop Yard Landing Page - Main JavaScript
 * Minimal JS for navigation and smooth scroll behavior
 */

// ================================
// Mobile Navigation Toggle
// ================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

/**
 * Toggle mobile navigation menu
 */
function toggleMobileNav() {
    const isActive = navMenu.classList.contains('active');

    // Toggle active state
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Update ARIA attribute for accessibility
    navToggle.setAttribute('aria-expanded', !isActive);
}

// Add click event listener to hamburger button
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
}

// ================================
// Close Mobile Nav on Link Click
// ================================

const navLinks = document.querySelectorAll('.nav-link');

/**
 * Close mobile navigation when a link is clicked
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileNav();
        }
    });
});

// ================================
// Scroll-Based Nav Background
// ================================

const nav = document.getElementById('main-nav');

/**
 * Add solid background to nav when user scrolls down
 */
function handleNavScroll() {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Listen for scroll events with throttling for performance
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Check scroll position on page load
handleNavScroll();

// ================================
// Smooth Scroll for Anchor Links
// ================================

/**
 * Add smooth scroll behavior to all anchor links
 * Note: This enhances the native CSS scroll-behavior: smooth
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#" (no target)
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const targetElement = document.querySelector(href);

        // Scroll to target if it exists
        if (targetElement) {
            e.preventDefault();

            // Calculate offset for fixed nav
            const navHeight = nav.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navHeight - 20; // 20px extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Close Mobile Nav on Escape Key
// ================================

/**
 * Close mobile navigation when user presses Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileNav();
    }
});

// ================================
// Close Mobile Nav on Outside Click
// ================================

/**
 * Close mobile navigation when clicking outside the menu
 */
document.addEventListener('click', (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isMenuActive = navMenu.classList.contains('active');

    if (!isClickInsideNav && isMenuActive) {
        toggleMobileNav();
    }
});
