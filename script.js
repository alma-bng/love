const MAGIC_WORD = "love";
let memoriesOpened = false;

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

  // Hearts
  explodeLove();

  // SHOW SCROLL LETTER
  const scrollLetter = document.getElementById("love-letter-SCROLL");
  scrollLetter.classList.add("show"); // use .show, not hidden
}

/* =========================
   SCROLL LETTER
========================= */
function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL").classList.remove("show");
}

/* =========================
   SECTIONS
========================= */
function openSection(id) {
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
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.currentTime = 0;
  music.volume = 0.8;
  music.play();

  explodeLove();

  // show unlock surprise after yes
  setTimeout(() => {
    document.getElementById("unlock-overlay").classList.add("show");
  }, 700);
}

function unlockProposal() {
  document.getElementById("unlock-overlay").classList.remove("show");
  document.getElementById("love-letter-PROPOSAL").classList.add("show");
  explodeLove();
}

function closeLetter() {
  document.getElementById("love-letter-PROPOSAL").classList.remove("show");
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
