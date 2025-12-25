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

  explodeLove();           // 💥 LOVE EXPLOSION
  openScrollLetter();      // 📜 OPEN LETTER IMMEDIATELY
}

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "love-heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* ================= NAV / CARDS ================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(sec =>
    sec.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content").classList.add("hidden");
}

/* ================= SCROLL LETTER ================= */
function openScrollLetter() {
  const overlay = document.getElementById("love-letter-SCROLL");
  overlay.classList.remove("hidden");
}

function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.add("hidden");
}

/* ================= PICTURES GALLERY ================= */
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.closest("#pictures")) {
    openGallery(e.target.src);
  }
});

function openGallery(src) {
  const gallery = document.createElement("div");
  gallery.id = "gallery-overlay";
  gallery.innerHTML = `
    <div class="gallery-box">
      <img src="${src}">
      <button onclick="closeGallery()">✕</button>
    </div>
  `;
  document.body.appendChild(gallery);
}

function closeGallery() {
  document.getElementById("gallery-overlay")?.remove();
}

/* ================= PROPOSAL ================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  explodeLove(); // extra love 💖

  setTimeout(() => {
    document
      .getElementById("love-letter-PROPOSAL")
      .classList.remove("hidden");
  }, 600);
}

function closeLetter() {
  document
    .getElementById("love-letter-PROPOSAL")
    .classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*150}px, ${Math.random()*150}px)`;
}

/* ================= TIME ================= */
const startDate = new Date("2023-12-19");
document.getElementById("days").innerText =
  Math.floor((new Date() - startDate) / 86400000);
