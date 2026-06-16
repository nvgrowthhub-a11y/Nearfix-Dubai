// ==================== WHATSAPP NUMBER SETTING START ====================
const whatsappNumber = "918796493504";
// Note: Aapka number 8796493504 hai. WhatsApp link ke liye country code ke saath 918796493504 use kiya gaya hai.
// ==================== WHATSAPP NUMBER SETTING END ====================

// ==================== MOBILE MENU SCRIPT START ====================
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}
// ==================== MOBILE MENU SCRIPT END ====================

// ==================== SCROLL ANIMATION SCRIPT START ====================
const animatedItems = document.querySelectorAll(".animate-up");

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        animationObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

animatedItems.forEach((item) => {
  animationObserver.observe(item);
});
// ==================== SCROLL ANIMATION SCRIPT END ====================

// ==================== BOOKING FORM TO WHATSAPP SCRIPT START ====================
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name").trim();
    const mobile = formData.get("mobile").trim();
    const city = formData.get("city").trim();
    const service = formData.get("service").trim();
    const message = formData.get("message").trim() || "No extra message";

    const whatsappMessage = [
      "Hi HomeFix Pro, I want to book a service.",
      "",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `City / Area: ${city}`,
      `Service Required: ${service}`,
      `Message: ${message}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    bookingForm.reset();
  });
}
// ==================== BOOKING FORM TO WHATSAPP SCRIPT END ====================

// ==================== FAQ ACCORDION SCRIPT START ====================
document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll(".faq-list details").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});
// ==================== FAQ ACCORDION SCRIPT END ====================
