
// ==========================================
// HOMEFIX PRO - COMPLETE JAVASCRIPT
// ==========================================

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================
// FAQ ACCORDION FUNCTIONALITY
// ==========================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ==========================================
// BOOKING FORM SUBMISSION - WhatsApp Integration
// ==========================================

const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !phone || !city || !service) {
        alert('Please fill all required fields');
        return;
    }
    
    // Format WhatsApp message
    const whatsappMessage = `
*HomeFix Pro - Service Booking*

*Name:* ${name}
*Phone:* ${phone}
*Area:* ${city}
*Service Needed:* ${service}
*Additional Details:* ${message || 'None'}

Please confirm my booking.
    `.trim();
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Your WhatsApp number (replace with actual number)
    const whatsappNumber = '971879649350'; // Format: Country Code + Number without +
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    bookingForm.reset();
    
    // Show success message
    showNotification('Form submitted! Opening WhatsApp...', 'success');
});

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .why-card, .review-card, .process-step, .area-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// NAVBAR STICKY SHADOW
// ==========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// PHONE NUMBER FORMATTING
// ==========================================

const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        
        e.target.value = value;
    });
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// COUNTER ANIMATION FOR STATS
// ==========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==========================================
// QUICK CALL BUTTON
// ==========================================

const callButtons = document.querySelectorAll('a[href^="tel:"]');

callButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Allow default behavior on mobile
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            e.preventDefault();
            showNotification('Please use a mobile device to make calls', 'info');
        }
    });
});

// ==========================================
// WHATSAPP FLOATING BUTTON ANIMATION
// ==========================================

const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('mouseenter', () => {
    whatsappBtn.style.animation = 'pulse 0.6s ease';
});

// ==========================================
// PERFORMANCE: PRELOAD CRITICAL RESOURCES
// ==========================================

window.addEventListener('load', () => {
    // Preload images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
});

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

// ==========================================
// CUSTOM FORM VALIDATION
// ==========================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\-\+\s]{10,}$/;
    return phoneRegex.test(phone);
}

// ==========================================
// DOCUMENT READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('HomeFix Pro Website Loaded Successfully');
    
    // Initialize tooltips if needed
    // Initialize popovers if needed
    // Add any startup scripts here
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-AE', {
        style: 'currency',
        currency: 'AED'
    }).format(amount);
}

// Get URL parameters
function getUrlParameter(name) {
    const url = new URL(window.location);
    return url.searchParams.get(name);
}

console.log('%cHomeFix Pro - Professional Appliance Repair', 'color: #4FC3F7; font-size: 16px; font-weight: bold;');
console.log('%cCall: +971-8796493504 | WhatsApp: +971-8796493504', 'color: #25D366; font-size: 12px;');
