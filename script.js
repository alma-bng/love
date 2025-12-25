const MAGIC_WORD = "love";

/* =========================
   STATE CONTROL
========================= */
let memoriesOpened = false;

/* =========================
   LOVE EXPLOSION (ALL AROUND)
========================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("span");
    heart.className = "love-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = 16 + Math.random() * 24 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

/* =========================
   GATE
========================= */
function enterSite() {
  const input = document.getElementById("magic-word");
  const error = document.getElementById("gate-error");

  if (input.value.toLowerCase() !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  // Hearts explode
  explodeLove();

  // Show scroll letter immediately
  const scroll = document.getElementById("love-letter-SCROLL");
  if (scroll) scroll.classList.remove("hidden");
}

/* =========================
   SCROLL LETTER
========================= */
function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.add("hidden");

  // Optional: secret message after staying 5+ seconds
  setTimeout(() => {
    alert("💌 Secret message: I’ll always be here for you 💖");
  }, 5000);
}

/* =========================
   SECTIONS
========================= */
function openSection(id) {
  // Lock proposal until memories opened
  if (id === "proposal" && !memoriesOpened) {
    alert("Open Favorite Days first 💌");
    return;
  }

  document.querySelectorAll(".content").forEach(c => c.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === "memories") memoriesOpened = true;
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content").classList.add("hidden");
}

/* =========================
   PROPOSAL FLOW
========================= */
function sayYes() {
  // Show YAY message
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  // Play music
  const music = document.getElementById("love-music");
  music.currentTime = 0;
  music.volume = 0.8;
  music.play();

  explodeLove();

  // Show "Unlock Surprise" button after a delay
  setTimeout(() => {
    const overlay = document.getElementById("unlock-overlay");
    overlay.style.display = "flex";
  }, 800);
}

function unlockProposal() {
  const overlay = document.getElementById("unlock-overlay");
  const letter = document.getElementById("love-letter-PROPOSAL");

  overlay.style.display = "none"; // hide the unlock overlay
  explodeLove();

  // Show proposal letter dramatically
  letter.style.display = "flex";
}

/* =========================
   CLOSE PROPOSAL LETTER
========================= */
function closeLetter() {
  document.getElementById("love-letter-PROPOSAL").style.display = "none";
}

/* =========================
   RUNAWAY NO BUTTON
========================= */
function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*200}px, ${Math.random()*200}px)`;
}

/* =========================
   IMAGE GALLERY
========================= */
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.closest("#pictures")) {
    openGallery(e.target.src);
  }
});

function openGallery(src) {
  const g = document.createElement("div");
  g.id = "gallery-overlay";
  g.innerHTML = `
    <div class="gallery-box">
      <img src="${src}">
      <button onclick="closeGallery()">✕</button>
    </div>`;
  document.body.appendChild(g);
}

function closeGallery() {
  const g = document.getElementById("gallery-overlay");
  if (g) g.remove();
}

/* =========================
   TIME COUNTER
========================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText = Math.floor((new Date() - startDate) / 86400000);
}
