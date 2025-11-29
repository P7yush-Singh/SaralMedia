// Animate each section content
function animateSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });
}
function animateAboutImage() {
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about-image img",
      start: "top 90%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "power2.out",
  });
}
function animateCTA() {
  gsap.from(".cta .form", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "back.out(1.7)",
  });
}
animateSections();
animateAboutImage();
animateCTA();
