// =========================
// CONFIG
// =========================
const MAGIC_WORD = "love";
let memoriesOpened = false;

// =========================
// LOVE HEART EXPLOSION
// =========================
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

// =========================
// GATE
// =========================
function enterSite() {
  const input = document.getElementById("magic-word");
  const error = document.getElementById("gate-error");

  if (!input) return;

  if (input.value.toLowerCase() !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  explodeLove();

  // Show scroll letter after 400ms
  setTimeout(() => {
    const scrollLetter = document.getElementById("love-letter-SCROLL");
    scrollLetter.classList.add("show");
  }, 400);
}

// =========================
// SCROLL LETTER
// =========================
function closeScrollLetter() {
  const scrollLetter = document.getElementById("love-letter-SCROLL");
  scrollLetter.classList.remove("show");
}

// =========================
// SECTIONS
// =========================
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

// =========================
// PROPOSAL FLOW
// =========================
function sayYes() {
  const yesMsg = document.getElementById("yes-message");
  const kiss = document.getElementById("kiss");
  const music = document.getElementById("love-music");

  yesMsg.classList.remove("hidden");
  kiss.classList.remove("hidden");

  if (music) {
    music.currentTime = 0;
    music.volume = 0.8;
    music.play();
  }

  explodeLove();

  // Show unlock surprise after YES
  setTimeout(() => {
    const unlock = document.getElementById("unlock-overlay");
    unlock.classList.add("show");
  }, 700);
}

// Unlock the surprise letter inside overlay
function unlockProposal() {
  const overlay = document.getElementById("unlock-overlay");
  const letter = document.getElementById("love-letter-PROPOSAL");

  overlay.classList.remove("show");
  letter.classList.add("show");
  explodeLove();
}

// Close proposal letter
function closeLetter() {
  const letter = document.getElementById("love-letter-PROPOSAL");
  letter.classList.remove("show");
}

// =========================
// RUNAWAY NO BUTTON
// =========================
function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*200}px, ${Math.random()*200}px)`;
}

// =========================
// IMAGE GALLERY
// =========================
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

// =========================
// TIME COUNTER
// =========================
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText = Math.floor((new Date() - startDate) / 86400000);
}
document.addEventListener("click", e => {
  if (e.target.closest(".gallery img")) {
    document.getElementById("viewer-img").src = e.target.src;
    document.getElementById("image-viewer").classList.remove("hidden");
  }
});

function closeImage() {
  document.getElementById("image-viewer").classList.add("hidden");
}document.addEventListener("click", e => {
  if (e.target.closest(".gallery img")) {
    document.getElementById("viewer-img").src = e.target.src;
    document.getElementById("image-viewer").classList.remove("hidden");
  }
});

function closeImage() {
  document.getElementById("image-viewer").classList.add("hidden");
}function openGallery(src) {
  // Remove old gallery if it exists
  const old = document.getElementById("gallery-overlay");
  if (old) old.remove();

  // Create overlay
  const g = document.createElement("div");
  g.id = "gallery-overlay";
  g.innerHTML = `
    <div class="gallery-box">
      <img src="${src}">
      <button onclick="closeGallery()">✕</button>
    </div>
  `;
  document.body.appendChild(g);
}

function closeGallery() {
  const g = document.getElementById("gallery-overlay");
  if (g) g.remove();
}

// Listen for clicks on pictures
document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.closest("#pictures")) {
    openGallery(e.target.src);
  }
});





