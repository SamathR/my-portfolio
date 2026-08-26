/**
 * W S L Ravihara - Portfolio Scripts
 * Pure Vanilla JavaScript (ES6+), No External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Typewriter Effect (Hero Section)
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const words = [
            'Software Developer',
            'Full Stack Enthusiast',
            'Creative Problem Solver',
            'Tech Innovator'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 90;
        const deletingSpeed = 45;
        const pauseTime = 1900;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 300);
            } else {
                setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
            }
        }

        type();
    }

    // 3. Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile drawer when clicking a navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 4. ScrollSpy Active Section Highlighting (Only on home page with local section anchors)
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNav() {
        if (!sections.length) return;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 130;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    if (sections.length > 0) {
        window.addEventListener('scroll', highlightNav);
        highlightNav();
    }

    // 5. Dark / Light Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

            if (targetTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }

            localStorage.setItem('portfolio-theme', targetTheme);
        });
    }

    // 6. Back To Top Floating Button
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 7. Interactive Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Disable submit button & show loading indicator
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending...</span>`;
            }

            // Simulate quick network transmission (550ms)
            setTimeout(() => {
                const nameInput = document.getElementById('name');
                const name = nameInput ? nameInput.value.trim() : 'there';

                // Display success banner
                if (feedbackDiv) {
                    feedbackDiv.className = 'form-feedback success';
                    feedbackDiv.textContent = `Thank you, ${name}! Your message and contact details have been sent successfully.`;
                    feedbackDiv.classList.remove('hidden');

                    // Reset all form fields
                    contactForm.reset();

                    // Auto-hide feedback after 5 seconds
                    setTimeout(() => {
                        feedbackDiv.classList.add('hidden');
                    }, 5000);
                }

                // Restore submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    `;
                }
            }, 550);
        });
    }

    console.log('%c🚀 W S L Ravihara Portfolio loaded successfully!', 'color: #00adb5; font-size: 14px; font-weight: bold;');
});