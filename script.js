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

  explodeLove();

  setTimeout(() => {
    document.getElementById("love-letter-SCROLL").classList.remove("hidden");
  }, 400);
}

/* =========================
   SCROLL LETTER
========================= */
function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.add("hidden");
}

/* =========================
   SECTIONS
========================= */
function openSection(id) {
  // LOCK proposal until memories opened
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
  // YAY MESSAGE
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  // MUSIC
  const music = document.getElementById("love-music");
  music.currentTime = 0;
  music.volume = 0.8;
  music.play();

  explodeLove();

  // LOCKED SURPRISE
  setTimeout(() => {
    document.getElementById("unlock-overlay").style.display = "flex";
  }, 1600);
}

function unlockProposal() {
  document.getElementById("unlock-overlay").style.display = "none";
  explodeLove();

  setTimeout(() => {
    document.getElementById("love-letter-PROPOSAL").style.display = "flex";
  }, 300);
}

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
}function sayYes() {
  // Show YAY message & hearts
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");
  explodeLove();

  // Play music
  const music = document.getElementById("love-music");
  if (music) {
    music.volume = 0.8;
    music.currentTime = 0;
    music.play();
  }

  // Show "Tap to unlock your surprise" overlay after YES
  setTimeout(() => {
    document.getElementById("unlock-overlay").classList.remove("hidden");
  }, 800); // slight delay for drama
}

// Unlock the proposal letter
function unlockProposal() {
  document.getElementById("unlock-overlay").classList.add("hidden"); // hide overlay
  explodeLove();

  // Show the actual proposal letter
  setTimeout(() => {
    document.getElementById("love-letter-PROPOSAL").classList.remove("hidden");
  }, 300);
}

// Close proposal letter
function closeLetter() {
  document.getElementById("love-letter-PROPOSAL").classList.add("hidden");
}


