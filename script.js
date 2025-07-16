// Import GSAP and ScrollTrigger
const gsap = window.gsap
const ScrollTrigger = window.gsap.ScrollTrigger

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAnimations()
  initCounters()
  initSmoothScroll()
  initMobileMenu()
  initFormHandling()
})

function initAnimations() {
  // Hero section animations
  const tl = gsap.timeline()

  tl.from(".badge", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  })
    .from(
      ".hero-title .line-1",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".hero-title .line-2",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".hero-title .line-3",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".hero-title .line-4",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6",
    )
    .from(
      ".hero-description",
      {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".feature-item",
      {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-buttons .btn",
      {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".hero-image",
      {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=1",
    )

  // Floating elements animation
  gsap.to(".floating-element", {
    y: -20,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5,
  })

  // Service cards animation
  ScrollTrigger.batch(".service-card", {
  onEnter: (batch) => {
    gsap.from(batch, {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  },
  onLeaveBack: (batch) => {
    gsap.set(batch, { opacity: 0, y: 60 });
  },
  start: "top 85%",
});


  // Section headers animation
  gsap.from(".section-header", {
    scrollTrigger: {
      trigger: ".section-header",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  })

  // Stats animation
  gsap.from(".stat-item", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  })

  // CTA section animation
  gsap.from(".cta-content > *", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  })

  // Footer animation
  gsap.from(".footer-section", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
  })

  // WhatsApp button animation
  gsap.from(".whatsapp-float", {
    duration: 1,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 2,
  })

  // Continuous pulse animation for WhatsApp button
  gsap.to(".whatsapp-btn", {
    scale: 1.1,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  })
}

// make same animation for insta-float button
// WhatsApp button animation
  gsap.from(".insta-float", {
    duration: 1,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 2,
  })

  // Continuous pulse animation for WhatsApp button
  gsap.to(".insta-btn", {
    scale: 1.1,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  })



function initCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))

    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          duration: 2,
          innerHTML: target,
          snap: { innerHTML: 1 },
          ease: "power2.out",
          onUpdate: () => {
            counter.innerHTML = Math.ceil(counter.innerHTML)
          },
        })
      },
    })
  })
}

function initSmoothScroll() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: "power2.inOut",
        })
      }
    })
  })
}

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      if (navMenu.classList.contains("active")) {
        gsap.to(navMenu, {
          duration: 0.3,
          opacity: 1,
          y: 0,
          display: "flex",
        })
      } else {
        gsap.to(navMenu, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          onComplete: () => {
            navMenu.style.display = "none"
          },
        })
      }
    })
  }
}

function initFormHandling() {
  const form = document.querySelector(".form")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Animate submit button
      const submitBtn = form.querySelector(".form-submit")
      const originalText = submitBtn.textContent

      gsap.to(submitBtn, {
        duration: 0.3,
        scale: 0.95,
        onComplete: () => {
          submitBtn.textContent = "Sending..."
          submitBtn.disabled = true

          // Simulate form submission
          setTimeout(() => {
            submitBtn.textContent = "Sent!"
            gsap.to(submitBtn, {
              duration: 0.3,
              scale: 1,
              backgroundColor: "#16a34a",
            })

            setTimeout(() => {
              submitBtn.textContent = originalText
              submitBtn.disabled = false
              gsap.to(submitBtn, {
                duration: 0.3,
                backgroundColor: "#f59e0b",
              })
              form.reset()
            }, 2000)
          }, 1000)
        },
      })
    })
  }
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      ease: "power2.out",
    })

    gsap.to(this.querySelector(".service-icon"), {
      duration: 0.3,
      scale: 1.1,
      rotation: 5,
      ease: "power2.out",
    })
  })

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      ease: "power2.out",
    })

    gsap.to(this.querySelector(".service-icon"), {
      duration: 0.3,
      scale: 1,
      rotation: 0,
      ease: "power2.out",
    })
  })
})

// Button hover effects
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -2,
      ease: "power2.out",
    })
  })

  btn.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      ease: "power2.out",
    })
  })
})

// Parallax effect for hero section
gsap.to(".hero-bg", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: -100,
  ease: "none",
})

// Loading animation
window.addEventListener("load", () => {
  gsap.to("body", {
    duration: 0.5,
    opacity: 1,
    ease: "power2.out",
  })
})
