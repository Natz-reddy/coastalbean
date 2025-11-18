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

