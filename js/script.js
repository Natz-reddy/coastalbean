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
});
//about us
document.addEventListener("DOMContentLoaded", function () {
 
  const heroImage = document.querySelector(".hero-image");
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.style.transition = "opacity 2s";
    heroImage.style.opacity = 1;
  }, 100);


  const teamMembers = document.querySelectorAll(".team .member");
  teamMembers.forEach(member => {
    member.addEventListener("mouseover", () => {
      member.style.transform = "scale(1.05)";
      member.style.transition = "transform 0.3s";
      member.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    });
    member.addEventListener("mouseout", () => {
      member.style.transform = "scale(1)";
      member.style.boxShadow = "none";
    });
  });
});
//events
document.addEventListener("DOMContentLoaded", function () {
 
  const sections = document.querySelectorAll(".meal-section, .eventfunction, .menu-section, .music-section-container");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.8s ease-out";
    observer.observe(sec);
  });
});
//contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

 
