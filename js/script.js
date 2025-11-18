document.addEventListener("DOMContentLoaded", function () {

  const heroImage = document.querySelector(".hero-image1");
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.style.transition = "opacity 2s";
    heroImage.style.opacity = 1;
  }, 100);

 
  const buttons = document.querySelectorAll(".indexbutton1, .indexbutton2, .button2");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.transition = "transform 0.3s";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });
document.addEventListener("DOMContentLoaded", function () {
 
  const heroImage = document.querySelector(".hero-image");
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.style.transition = "opacity 2s";
    heroImage.style.opacity = 1;
  }, 100);
