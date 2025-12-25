/* =========================
   CONFIG
========================= */
const MAGIC_WORD = "love";
let memoriesOpened = false;

/* =========================
   LOVE EXPLOSION
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
   GATE FUNCTION
========================= */
function enterSite() {
  const input = document.getElementById("magic-word");
  const error = document.getElementById("gate-error");

  if (!input || !error) return;

  if (input.value.toLowerCase() !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");

  const gate = document.getElementById("gate");
  const mainContent = document.getElementById("main-content");
  const scrollLetter = document.getElementById("love-letter-SCROLL");

  if (gate) gate.style.display = "none";
  if (mainContent) mainContent.classList.remove("hidden");

  // Hearts and show scroll letter
  explodeLove();

  if (scrollLetter) {
    scrollLetter.classList.add("show"); // must match CSS: .show
  }
}

/* =========================
   SCROLL LETTER CLOSE
========================= */
function closeScrollLetter() {
  const scrollLetter = document.getElementById("love-letter-SCROLL");
  if (scrollLetter) scrollLetter.classList.remove("show");
}

/* =========================
   PROPOSAL & SECTIONS
========================= */
function openSection(id) {
  if (id === "proposal" && !memoriesOpened) {
    alert("Open Favorite Days first 💌");
    return;
  }

  document.querySelectorAll(".content").forEach(c => c.classList.add("hidden"));
  const section = document.getElementById(id);
  if (section) section.classList.remove("hidden");

  if (id === "memories") memoriesOpened = true;
}

function goBack(e) {
  e.stopPropagation();
  const section = e.target.closest(".content");
  if (section) section.classList.add("hidden");
}

/* =========================
   PROPOSAL FLOW
========================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  const music = document.getElementById("love-music");
  if (music) {
    music.currentTime = 0;
    music.volume = 0.8;
    music.play();
  }

  explodeLove();

  setTimeout(() => {
    const unlockOverlay = document.getElementById("unlock-overlay");
    if (unlockOverlay) unlockOverlay.classList.add("show");
  }, 700);
}

function unlockProposal() {
  const overlay = document.getElementById("unlock-overlay");
  const letter = document.getElementById("love-letter-PROPOSAL");

  if (overlay) overlay.classList.remove("show");
  if (letter) letter.classList.add("show");
  explodeLove();
}

function closeLetter() {
  const letter = document.getElementById("love-letter-PROPOSAL");
  if (letter) letter.classList.remove("show");
}

/* =========================
   RUNAWAY NO BUTTON
========================= */
function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*200}px, ${Math.random()*200}px)`;
}

/* =========================
   TIME COUNTER
========================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText = Math.floor((new Date() - startDate) / 86400000);
}
