const MAGIC_WORD = "love";

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  const hearts = ["💖", "💘", "💝", "💗", "💓", "❤️"];

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement("span");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = "love-heart";

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    heart.style.left = cx + "px";
    heart.style.top = cy + "px";

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 900}px`);
    heart.style.setProperty("--y", `${(Math.random() - 0.8) * 900}px`);

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2600);
  }
}

/* ================= GATE ================= */
function enterSite() {
  const value = document.getElementById("magic-word").value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  explodeLove();
  setTimeout(openScrollLetter, 200);
}

/* ================= NAV / CARDS ================= */
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

/* ================= SCROLL LETTER ================= */
function openScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.remove("hidden");
}

function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.add("hidden");
}

/* ================= GALLERY ================= */
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

/* ================= PROPOSAL ================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  explodeLove();

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

/* ================= TIME ================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText = Math.floor(
    (new Date() - startDate) / 86400000
  );
}
