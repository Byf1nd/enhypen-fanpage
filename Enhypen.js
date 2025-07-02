document.getElementById("enterBtn").addEventListener("click", function () {
  document.getElementById("members").scrollIntoView({ behavior: "smooth" });
});

const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const galleryImgs = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "-") {
    document.body.classList.toggle("bloodmoon-mode");
    alert("🌕 Blood Moon mode toggled!");
    
    const bloodmoonQuotes = [
      "If you're reading this, it means you hear even in silence.",
      "Not all shadows are empty. Some carry memories.",
      "The night reveals what the light hides.",
      "You're not lost—you’re just walking through your next era.",
      "You were chosen to remember what others forgot."
    ];

    const quoteEl = document.getElementById("bloodmoon-quote");
    if (quoteEl) {
      const randomIndex = Math.floor(Math.random() * bloodmoonQuotes.length);
      quoteEl.textContent = bloodmoonQuotes[randomIndex];
    }

    const bloodmoonAudio = document.getElementById("bloodmoon-audio");
    if (bloodmoonAudio) {
      bloodmoonAudio.currentTime = 0;
      bloodmoonAudio.play();
    }

    const glitch = document.getElementById("glitch-overlay");
    if (glitch) {
      glitch.style.opacity = "1";
      setTimeout(() => {
        glitch.style.opacity = "0";
      }, 300);
    }
  }
});

document.getElementById("bloodmoon-button").addEventListener("click", () => {
  document.body.classList.toggle("bloodmoon-mode");

  // Repetimos sonido y glitch si se activa por botón
  if (bloodmoonAudio) {
    bloodmoonAudio.currentTime = 0;
    bloodmoonAudio.play();
  }
  if (glitch) {
    glitch.style.opacity = "1";
    setTimeout(() => {
      glitch.style.opacity = "0";
    }, 300);
  }

  // Frase aleatoria
  if (quoteEl) {
    const randomIndex = Math.floor(Math.random() * bloodmoonQuotes.length);
    quoteEl.textContent = bloodmoonQuotes[randomIndex];
  }
});

