/* ==========================================
   NEAR FIX DUBAI - JavaScript
   ========================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
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
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Validate
            if (!name || !phone || !service) {
                alert('Please fill all required fields!');
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
            
            // WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            const formSuccess = document.querySelector('.form-success');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // ==========================================
    // Quick Quote Form - Send to WhatsApp
    // ==========================================
    const quickQuoteForm = document.getElementById('quickQuoteForm');
    
    if (quickQuoteForm) {
        quickQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('quickName').value;
            const phone = document.getElementById('quickPhone').value;
            const appliance = document.getElementById('quickAppliance').value;
            const issue = document.getElementById('quickIssue').value;
            
            if (!name || !phone || !appliance) {
                alert('Please fill all required fields!');
                return;
            }
            
            const whatsappNumber = '918796493504';
            
            let whatsappMessage = `*Quick Quote Request - Near Fix Dubai*%0A%0A`;
            whatsappMessage += `*Name:* ${name}%0A`;
            whatsappMessage += `*Phone:* ${phone}%0A`;
            whatsappMessage += `*Appliance:* ${appliance}%0A`;
            if (issue) {
                whatsappMessage += `*Issue:* ${issue}%0A`;
            }
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // ==========================================
    // Service Booking Form
    // ==========================================
    const serviceBookingForm = document.getElementById('serviceBookingForm');
    
    if (serviceBookingForm) {
        serviceBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('bookingName').value;
            const phone = document.getElementById('bookingPhone').value;
            const serviceType = document.getElementById('bookingServiceType').value;
            const brand = document.getElementById('bookingBrand').value;
            const address = document.getElementById('bookingAddress').value;
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            
            if (!name || !phone || !serviceType || !address || !date || !time) {
                alert('Please fill all required fields!');
                return;
            }
            
            const whatsappNumber = '918796493504';
            
            let whatsappMessage = `*Service Booking - Near Fix Dubai*%0A%0A`;
            whatsappMessage += `*Name:* ${name}%0A`;
            whatsappMessage += `*Phone:* ${phone}%0A`;
            whatsappMessage += `*Service:* ${serviceType}%0A`;
            whatsappMessage += `*Brand:* ${brand || 'Not specified'}%0A`;
            whatsappMessage += `*Address:* ${address}%0A`;
            whatsappMessage += `*Date:* ${date}%0A`;
            whatsappMessage += `*Time:* ${time}%0A`;
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // Header Scroll Effect
    // ==========================================
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }
    });
    
    // ==========================================
