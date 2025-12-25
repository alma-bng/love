const MAGIC_WORD = "love";

/* =========================
   LOVE EXPLOSION
========================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("span");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = "love-heart";

    const x = (Math.random() - 0.5) * 800; // horizontal offset
    const y = (Math.random() - 0.8) * 800; // vertical offset
    const size = 20 + Math.random() * 30;

    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";
    heart.style.fontSize = size + "px";

    // Assign random transform offsets as CSS variables
    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    // Random animation delay so hearts don’t move exactly together
    heart.style.animationDelay = (Math.random() * 0.5) + "s";

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 3000);
  }
}

/* =========================
   GATE
========================= */
function enterSite() {
  const value = document.getElementById("magic-word").value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  explodeLove();          // 💥 LOVE EXPLOSION
  setTimeout(openScrollLetter, 200);
}

/* =========================
   NAV / CARDS
========================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c =>
    c.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content").classList.add("hidden");
}

/* =========================
   SCROLL LETTER
========================= */
function openScrollLetter() {
  const overlay = document.getElementById("love-letter-SCROLL");
  overlay.classList.remove("hidden");
}

function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.add("hidden");
}

/* =========================
   GALLERY
========================= */
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.closest("#pictures")) {
    const overlay = document.createElement("div");
    overlay.id = "gallery-overlay";
    overlay.innerHTML = `
      <div class="gallery-box">
        <img src="${e.target.src}">
        <button onclick="this.closest('#gallery-overlay').remove()">✕</button>
      </div>
    `;
    document.body.appendChild(overlay);
  }
});

/* =========================
   PROPOSAL
========================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  explodeLove();  // Extra love when YES

  setTimeout(() => {
    document.getElementById("love-letter-PROPOSAL").classList.remove("hidden");
  }, 500);
}

function closeLetter() {
  document.getElementById("love-letter-PROPOSAL").classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random() * 200}px, ${Math.random() * 200}px)`;
}

/* =========================
   TIME COUNTER
========================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText = Math.floor(
    (new Date() - startDate) / 86400000
  );
}
