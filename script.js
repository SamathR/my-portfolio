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

    // 7. Interactive Contact Form Submission Handler (Connected to FormSubmit)
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('contact-number');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Contact';
            const message = messageInput ? messageInput.value.trim() : '';

            // Disable submit button & show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <span>Sending...</span>
                    <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                `;
            }

            try {
                const response = await fetch('https://formsubmit.co/ajax/lakshanravihara03@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        Name: name,
                        Email: email,
                        'Contact Number': phone,
                        Subject: subject,
                        Message: message,
                        _subject: `Portfolio Message from ${name}: ${subject}`,
                        _template: 'table',
                        _captcha: 'false'
                    })
                });

                const data = await response.json();

                if (response.ok || data.success === 'true' || data.success === true) {
                    if (feedbackDiv) {
                        feedbackDiv.className = 'form-feedback success';
                        feedbackDiv.textContent = `Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`;
                        feedbackDiv.classList.remove('hidden');

                        contactForm.reset();

                        setTimeout(() => {
                            feedbackDiv.classList.add('hidden');
                        }, 7000);
                    }
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            } catch (error) {
                console.error('Contact form submission error:', error);
                if (feedbackDiv) {
                    feedbackDiv.className = 'form-feedback error';
                    feedbackDiv.textContent = 'Oops! Failed to send message. Please email directly at lakshanravihara03@gmail.com.';
                    feedbackDiv.classList.remove('hidden');

                    setTimeout(() => {
                        feedbackDiv.classList.add('hidden');
                    }, 7000);
                }
            } finally {
                // Restore submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    `;
                }
            }
        });
    }

    console.log('%c🚀 W S L Ravihara Portfolio loaded successfully!', 'color: #00adb5; font-size: 14px; font-weight: bold;');
});

