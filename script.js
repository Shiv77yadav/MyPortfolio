

// Animate elements on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;
    if (sectionTop < trigger) {
      section.classList.add("visible");
    }
  });
});

// Toggle mobile nav menu
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navbar ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// Form submit alert (temporary)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    form.reset();
  });
}
