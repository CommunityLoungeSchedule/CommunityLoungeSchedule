// --- SCROLLING NAVIGATION BAR EFFECT & MOBILE MENU ---

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('#navigation-links');
    const hasHero = document.querySelector('.hero');

    // If the page does NOT have a hero section, make the nav solid immediately.
    if (!hasHero) {
        nav.classList.add("scrolled");
    }

    // Add the scroll listener which ONLY applies its logic if there IS a hero section.
    window.onscroll = function () {
        if (hasHero) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        }
    };

    // Mobile Navigation Menu Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-visible');
            const isVisible = navLinks.classList.contains('is-visible');
            navToggle.setAttribute('aria-expanded', isVisible);
        });
    }
});
