//Select element function
const selectElement = (element) => {
  return document.querySelector(element);
};

let menuToggle = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

window.animate = ScrollReveal();

animate.reveal(".animate-right", {
  duration: 1000,
  origin: "right",
  distance: "25rem",
  delay: 400,
});

animate.reveal(".animate-left", {
  duration: 1000,
  origin: "left",
  distance: "25rem",
  delay: 800,
});
animate.reveal(".animate-top", {
  duration: 1000,
  origin: "top",
  distance: "25rem",
  delay: 400,
});
animate.reveal(".animate-bottom", {
  duration: 1000,
  origin: "bottom",
  distance: "25rem",
  delay: 400,
});


