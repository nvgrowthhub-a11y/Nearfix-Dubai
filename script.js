// ===========================
// WHATSAPP FORM SUBMISSION
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value;

            const whatsappMessage = `
🔧 New Service Booking

👤 Name: ${name}

📞 Phone: ${phone}

🛠 Service: ${service}

📝 Issue:
${message}
            `;

            const whatsappURL =
                `https://wa.me/918796493504?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, "_blank");

        });

    }

});


// ===========================
// ANIMATED COUNTERS
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        current += increment;

        if (current < target) {

            if (Number.isInteger(target)) {
                counter.innerText = Math.floor(current);
            } else {
                counter.innerText = current.toFixed(1);
            }

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements = document.querySelectorAll(
    ".card, .review, .faq-item, .service-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===========================
// STICKY HEADER SHADOW
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ===========================
// CURRENT YEAR AUTO UPDATE
// ===========================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}
