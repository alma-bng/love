const MAGIC_WORD = "love";

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

  explodeLove();       // 💥 LOVE EXPLOSION
  openScrollLetter();  // 📜 SCROLL OPENS
}

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.className = "love-heart";

    heart.style.left = window.innerWidth / 2 + "px";
    heart.style.top = window.innerHeight / 2 + "px";

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 500}px`);
    heart.style.setProperty("--y", `${(Math.random() - 1) * 600}px`);

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* ================= NAV ================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c => c.classList.add("hidden"));
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
  }, 600);
}

function closeLetter() {
  document.getElementById("love-letter-PROPOSAL").classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random() * 160}px, ${Math.random() * 160}px)`;
}

/* ================= TIME ================= */
const startDate = new Date("2023-12-19");
document.getElementById("days").innerText =
  Math.floor((new Date() - startDate) / 86400000);
