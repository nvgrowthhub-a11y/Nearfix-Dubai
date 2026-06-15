/* ==========================================
   NEAR FIX DUBAI - JavaScript
   ========================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
    
    // Make toggleMenu available globally
    window.toggleMenu = toggleMenu;
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks && menuToggle) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
    
    // ==========================================
    // Contact Form - Send to WhatsApp
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate
            if (!name || !phone || !service) {
                alert('Please fill all required fields!');
                return;
            }
            
            // Phone validation
            if (phone.length < 10) {
                alert('Please enter a valid phone number!');
                return;
            }
            
            // WhatsApp number
            const whatsappNumber = '918796493504';
            
            // Create message for WhatsApp
            let whatsappMessage = `*New Service Request - Near Fix Dubai*%0A%0A`;
            whatsappMessage += `*Name:* ${name}%0A`;
            whatsappMessage += `*Phone:* ${phone}%0A`;
            whatsappMessage += `*Service:* ${service}%0A`;
            if (message) {
                whatsappMessage += `*Message:* ${message}%0A`;
            }
            whatsappMessage += `%0A*Sent from website*`;
            
            // WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            const formSuccess = document.getElementById('formSuccess');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 8 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 8000);
            }
        });
    }
    
    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#home' && href !== '#contact') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu after click
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // ==========================================
    // Header Scroll Effect
    // ==========================================
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // ==========================================
    // Service Card Click - Scroll to Contact
    // ==========================================
    document.querySelectorAll('.service-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // Phone Number Formatting
    // ==========================================
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Allow only numbers, plus, and spaces
            this.value = this.value.replace(/[^0-9+\s]/g, '');
        });
        
        input.addEventListener('keypress', function(e) {
            // Allow only numbers, plus
            if (!/[0-9+]/.test(e.key)) {
                e.preventDefault();
            }
        });
    });
    
    // ==========================================
    // Form Validation - Real-time
    // ==========================================
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#e5e5e5';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#0066CC';
        });
    });
    
    // ==========================================
    // Animation on Scroll (Intersection Observer)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-card, .feature-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        el.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(el);
    });
    
    // Trigger initial animation
    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
    
    // ==========================================
    // Smooth Scroll - All Internal Links
    // ==========================================
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // WhatsApp Float Click Tracking
    // ==========================================
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function() {
            console.log('WhatsApp button clicked');
        });
    }
    
    // ==========================================
    // Console Welcome Message
    // ==========================================
    console.log('%c🎉 Welcome to Near Fix Dubai!', 'font-size: 20px; font-weight: bold; color: #0066CC;');
    console.log('%c📱 WhatsApp: +91 8796493504', 'font-size: 14px; color: #00A651;');
    console.log('%c✉️ Email: nvgrowthhub@gmail.com', 'font-size: 14px; color: #0066CC;');
    console.log('%c🌐 Website: https://nearfixdubai.com', 'font-size: 14px; color: #004499;');
    
});
