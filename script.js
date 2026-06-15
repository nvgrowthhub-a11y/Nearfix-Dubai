/* ==========================================
   NEAR FIX DUBAI - JavaScript
   ========================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
   /* ==========================================
   1. MOBILE MENU TOGGLE
========================================== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ==========================================
   2. SMOOTH SCROLL NAV LINKS
========================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

            navLinks.classList.remove("active");
        }
    });
});

/* ==========================================
   3. NAVBAR SCROLL EFFECT
========================================== */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 23, 42, 0.85)";
        header.style.backdropFilter = "blur(15px)";
    } else {
        header.style.background = "transparent";
    }
});

/* ==========================================
   4. COUNTER ANIMATION (STATS)
========================================== */
const counters = document.querySelectorAll(".stat-box h2");

const startCounter = (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");

    const update = () => {
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => startCounter(counter));
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}

/* ==========================================
   5. SCROLL REVEAL EFFECT
========================================== */
const revealElements = document.querySelectorAll(
    ".service-card, .feature-card, .testimonial-card, .about-grid"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.6s ease";
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    revealObserver.observe(el);
});

/* ==========================================
   6. CONTACT FORM VALIDATION
========================================== */
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("input[name='name']");
        const email = form.querySelector("input[name='email']");
        const message = form.querySelector("textarea");

        if (!name.value || !email.value || !message.value) {
            alert("Please fill all fields!");
            return;
        }

        alert("Message sent successfully 🚀");

        form.reset();
    });
}

/* ==========================================
   7. ACTIVE NAV LINK ON SCROLL
========================================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   8. WHATSAPP FLOAT BUTTON
========================================== */
const whatsappBtn = document.querySelector(".whatsapp-float");

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/919999999999", "_blank");
    });
}
