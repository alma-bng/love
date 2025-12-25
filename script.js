const MAGIC_WORD = "love";

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement("span");
    heart.className = "love-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = 18 + Math.random() * 22 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

/* ================= GATE ================= */
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
  openScrollLetter();
  startSecretTimer();
}

/* ================= SCROLL LETTER ================= */
function openScrollLetter() {
  document.getElementById("love-letter-SCROLL")
    .classList.add("show");
}

function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL")
    .classList.remove("show");
}

/* ================= CARDS ================= */
function openSection(id) {
  document.querySelectorAll(".content")
    .forEach(c => c.classList.add("hidden"));

  document.getElementById(id)
    .classList.remove("hidden");
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content")
    .classList.add("hidden");
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

  // ONLY NOW show the surprise
  setTimeout(() => {
    document.getElementById("unlock-overlay")
      .classList.add("show");
  }, 700);
}

function unlockProposal() {
  document.getElementById("unlock-overlay")
    .classList.remove("show");

  setTimeout(() => {
    document.getElementById("love-letter-PROPOSAL")
      .classList.add("show");
  }, 300);
}

function closeLetter() {
  document.getElementById("love-letter-PROPOSAL")
    .classList.remove("show");
}

function runAway(btn) {
  btn.style.transform =
    `translate(${Math.random()*160}px, ${Math.random()*160}px)`;
}

/* ================= TIME COUNTER ================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if (daysEl) {
  daysEl.innerText =
    Math.floor((new Date() - startDate) / 86400000);
}

/* ================= SECRET MESSAGE ================= */
function startSecretTimer() {
  setTimeout(() => {
    const secret = document.createElement("div");
    secret.className = "letter-overlay show";
    secret.innerHTML = `
      <div class="scroll">
        <div class="scroll-content">
          <h2>🤍 Still here?</h2>
          <p>
            If you stayed this long, it means something.
            I love how gently you exist in my life.
          </p>
          <button onclick="this.closest('.letter-overlay').remove()">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(secret);
  }, 90000); // 1.5 minutes
}
