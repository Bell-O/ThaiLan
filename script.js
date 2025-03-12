document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animate menu toggle
            if (menuToggle.classList.contains('active')) {
                menuToggle.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                menuToggle.children[1].style.opacity = '0';
                menuToggle.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                menuToggle.children[0].style.transform = 'none';
                menuToggle.children[1].style.opacity = '1';
                menuToggle.children[2].style.transform = 'none';
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            
            // Reset menu toggle animation
            menuToggle.children[0].style.transform = 'none';
            menuToggle.children[1].style.opacity = '1';
            menuToggle.children[2].style.transform = 'none';
        }
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');
    
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;

        // Function to show a specific slide
        function showSlide(index) {
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.display = 'none';
            });
            
            // Handle index bounds
            if (index < 0) index = testimonialSlides.length - 1;
            if (index >= testimonialSlides.length) index = 0;
            
            testimonialSlides[index].classList.add('active');
            testimonialSlides[index].style.display = 'block';
            currentSlide = index;
        }

        // Event listeners for controls
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }

        // Auto slide every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // Scroll Animations
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                // Add delay if specified
                const delay = element.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    element.classList.add('active');
                }, delay);
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            if (!name || !email || !phone || !service || !date || !time) {
                formMessage.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
                formMessage.style.color = '#9d4e3c';
                formMessage.style.backgroundColor = 'rgba(157, 78, 60, 0.1)';
                formMessage.style.padding = '10px';
                formMessage.style.borderRadius = '5px';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
                formMessage.style.color = '#9d4e3c';
                formMessage.style.backgroundColor = 'rgba(157, 78, 60, 0.1)';
                formMessage.style.padding = '10px';
                formMessage.style.borderRadius = '5px';
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this demo, we'll just show a success message
            formMessage.textContent = 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.';
            formMessage.style.color = '#4a7c59';
            formMessage.style.backgroundColor = 'rgba(74, 124, 89, 0.1)';
            formMessage.style.padding = '10px';
            formMessage.style.borderRadius = '5px';
            
            // Add success animation
            formMessage.classList.add('animate__animated', 'animate__fadeIn');
            
            // Reset form
            contactForm.reset();
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    
                    // Reset menu toggle animation
                    menuToggle.children[0].style.transform = 'none';
                    menuToggle.children[1].style.opacity = '1';
                    menuToggle.children[2].style.transform = 'none';
                }
            }
        });
    });

    // Image hover effects
    const serviceImages = document.querySelectorAll('.service-image img');
    serviceImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Current year for copyright
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});