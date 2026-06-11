
/* =========================
   1. SMOOTH SCROLL NAV
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   2. SCROLL ANIMATION SYSTEM
========================= */

const animatedElements = document.querySelectorAll(".fade-in");

function revealOnScroll(){
  animatedElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   3. STICKY NAV EFFECT
========================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    nav.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
    nav.style.background = "#ffffff";
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});


/* =========================
   4. FAQ ACCORDION SYSTEM
========================= */

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


/* =========================
   5. MOBILE MENU SYSTEM (IF USED)
========================= */

function openMenu(){
  const menu = document.querySelector(".side-menu");
  if(menu){
    menu.style.right = "0";
  }
}

function closeMenu(){
  const menu = document.querySelector(".side-menu");
  if(menu){
    menu.style.right = "-260px";
  }
}


/* =========================
   6. WHATSAPP CLICK TRACKING (BASIC LEAD LOGIC)
========================= */

document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("WhatsApp Lead Generated");
    // yaha future me Google Analytics / Meta Pixel add kar sakte ho
  });
});
