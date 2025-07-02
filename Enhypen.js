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

let secretCombo = [];
const secretKey = ['e', 'n', 'g'];

window.addEventListener("keydown", (e) => {
  secretCombo.push(e.key.toLowerCase());

  if (secretCombo.length > secretKey.length) {
    secretCombo.shift();
  }

  if (secretCombo,join('') === secretKey.join('')) {
    document.body.classList.toggle("bloodmoon-mode");
    alert("🌕 Modo Blood Moon activado!");
  }
});
