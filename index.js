// Import GSAP and ScrollTrigger
const gsap = window.gsap;
const ScrollTrigger = window.gsap.ScrollTrigger;

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initServiceCards();
});

function initAnimations() {
  // Hero section animations
  const tl = gsap.timeline();

  tl.from(".badge", {
    duration: 0.5,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  })
    .from(
      ".hero-title .line-1",
      {
        duration: 0.7,
        y: 50,
        opacity: 0,
        ease: "ease.inOut",
      },
      "-=0.5"
    )
    .from(
      ".hero-title .line-2",
      {
        duration: 0.9,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .from(
      ".hero-title .line-3",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .from(
      ".hero-title .line-4",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .from(
      ".hero-description",
      {
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.4"
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
      "-=0.4"
    )
    .from(
      ".hero-buttons .btn",
      {
        duration: 0.6,
        y: 20,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".hero-image",
      {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out",
      },
      "-=1"
    );

  // Floating elements animation
  gsap.to(".floating-element", {
    y: -20,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5,
  });

  // Service cards animation
  ScrollTrigger.batch(".service-card", {
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.6,
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
  });

  // Stats animation
  gsap.from(".stat-item", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  // CTA section animation
  gsap.from(".cta-content > *", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

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
  });

  // WhatsApp button animation
  gsap.from(".whatsapp-float", {
    duration: 1,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 2,
  });

  // Continuous pulse animation for WhatsApp button
  gsap.to(".whatsapp-btn", {
    scale: 1.1,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });
}

function showBtnAction() {
  // make same animation for insta-float button
gsap.from(".insta-float", {
  duration: 1,
  scale: 0,
  ease: "back.out(1.7)",
  delay: 2,
});

// Continuous pulse animation for insta button
gsap.to(".insta-btn", {
  scale: 1.1,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
});
// make same animation for whaatsapp-float button
gsap.from(".whatsapp-float", {
  duration: 1,
  scale: 0,
  ease: "back.out(1.7)",
  delay: 2,
});

// Continuous pulse animation for WhatsApp button
gsap.to(".whatsapp-btn", {
  scale: 1.1,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
});
}
showBtnAction();


// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "none";
  }
});

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      ease: "power2.out",
    });

    gsap.to(this.querySelector(".service-icon"), {
      duration: 0.3,
      scale: 1.1,
      rotation: 5,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      ease: "power2.out",
    });

    gsap.to(this.querySelector(".service-icon"), {
      duration: 0.3,
      scale: 1,
      rotation: 0,
      ease: "power2.out",
    });
  });
});

// Button hover effects
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -2,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      ease: "power2.out",
    });
  });
});

function typeWriteAnimation() {
  // Typewriter Effect for About Section
  document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Imagine", "Execute", "Amplify"];
    let currentPhrase = 0;
    let currentChar = 0;
    const typeTarget = document.getElementById("typewriter");

    function typeWriter() {
      const phrase = phrases[currentPhrase];
      if (currentChar < phrase.length) {
        typeTarget.textContent += phrase.charAt(currentChar);
        currentChar++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          eraseText();
        }, 1500);
      }
    }

    function eraseText() {
      const phrase = phrases[currentPhrase];
      if (currentChar > 0) {
        typeTarget.textContent = phrase.substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseText, 50);
      } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeWriter, 300);
      }
    }

    typeWriter(); // Start the typewriter effect
  });
}
typeWriteAnimation();


// Mobile menu toggle logic
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const mobileMenuIcon = mobileMenuBtn.querySelector("i");

mobileMenuBtn.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");

  // Toggle icon class
  if (mobileNavMenu.classList.contains("active")) {
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-times");
  } else {
    mobileMenuIcon.classList.remove("fa-times");
    mobileMenuIcon.classList.add("fa-bars");
  }
});


function animateSuccessCount() {
  const count = { val: 0 };
  const target = document.getElementById("success-count");

  target.style.fontWeight = "bold";

  gsap.to(count, {
    val: 3000,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      target.textContent = Math.floor(count.val);
    },
  });
}

animateSuccessCount()

function openChat() {
    const win = document.getElementById("chatWindow");
    const btn = document.getElementById("chatbotBtn");
    const label = document.getElementById("chatbotLabel");
    win.style.display = "flex";
    
    // Hide button and label only on mobile (≤768px)
    if (window.innerWidth <= 768) {
        btn.style.display = "none";
        if (label) label.style.display = "none";
    }
}

function closeChat() {
    const win = document.getElementById("chatWindow");
    const btn = document.getElementById("chatbotBtn");
    const label = document.getElementById("chatbotLabel");
    win.style.display = "none";
    
    // Show button and label only on mobile
    if (window.innerWidth <= 768) {
        btn.style.display = "flex";
        if (label) label.style.display = "inline-block";
    }
}

document.getElementById("chatbotBtn").onclick = () => {
    openChat();
};

// -------------------------------
// Keyword Replies (SARAL MEDIA)
// -------------------------------
const saralKeywords = [
    {
        keywords: ["service", "services", "what you do", "offer"],
        reply: "Saral Media provides two major services:\n🔥 Live Broadcasting\n🎨 Creative Visuals"
    },
    {
        keywords: ["live", "broadcast", "broadcasting"],
        reply: "Our Live Broadcasting includes multi-camera setup, event streaming, and high-quality production."
    },
    {
        keywords: ["creative", "visual", "graphics"],
        reply: "Our Creative Visuals include promo videos, reels, posters, brand visuals, and motion graphics."
    },
    {
        keywords: ["contact", "hire", "book"],
        reply: "You can contact us on Instagram or via our website form. We're excited to work with you!"
    },
    {
        keywords: ["price", "cost", "charges"],
        reply: "Pricing depends on project type. Share your requirement and we'll give you the best budget!"
    },
    {
        keywords: ["hello", "hi", "hey"],
        reply: "Hello! Welcome to Saral Media 👋 How can we help you today?"
    },
    {
        keywords: ["location", "where"],
        reply: "Saral Media provides services PAN India. Tell us your city!"
    }
];

// -------------------------------
// Chat Functions
// -------------------------------
function addMessage(text, sender) {
    const msgBox = document.getElementById("messages");
    const div = document.createElement("div");
    div.classList.add("msg", sender);
    div.textContent = text;
    msgBox.appendChild(div);
    msgBox.scrollTop = msgBox.scrollHeight;
}

function showTyping() {
    const msgBox = document.getElementById("messages");
    const type = document.createElement("div");
    type.id = "typing";
    type.classList.add("msg", "bot", "typing");
    type.textContent = "Saral Media is typing...";
    msgBox.appendChild(type);
    msgBox.scrollTop = msgBox.scrollHeight;
}

function hideTyping() {
    const type = document.getElementById("typing");
    if (type) type.remove();
}

function getReply(text) {
    const lower = text.toLowerCase();
    for (const item of saralKeywords) {
        for (const kw of item.keywords) {
            if (lower.includes(kw)) return item.reply;
        }
    }
    return "Sorry! I didn't get that. Try asking about Services, Pricing, Broadcasting, Creative Visuals, or Contact.";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    showTyping();

    setTimeout(() => {
        hideTyping();
        const reply = getReply(text);
        addMessage(reply, "bot");
    }, 900);
}