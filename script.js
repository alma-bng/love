const MAGIC_WORD = "love";

let memoriesViewed = false;
let proposalUnlocked = false;
let surpriseUnlocked = false;

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];
  for (let i = 0; i < 40; i++) {
    const h = document.createElement("span");
    h.className = "love-heart";
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = Math.random() * 100 + "vh";
    h.style.fontSize = 18 + Math.random() * 22 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
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

  error.classList.add("hidden");
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  explodeLove();
}

/* ================= MEMORIES ================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c =>
    c.classList.add("hidden")
  );

  const section = document.getElementById(id);
  section.classList.remove("hidden");

  if (id === "memories") {
    memoriesViewed = true;
  }
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content").classList.add("hidden");
}

/* ================= PROPOSAL (LOCKED) ================= */
function tryOpenProposal() {
  if (!memoriesViewed) {
    alert("Some memories are still waiting 💭");
    return;
  }
  proposalUnlocked = true;
  openSection("proposal");
}

/* ================= YES BUTTON ================= */
function sayYes() {
  if (!proposalUnlocked) return;

  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  explodeLove();

  setTimeout(() => {
    document.getElementById("unlock-overlay")
      .classList.add("show");
  }, 800);
}

/* ================= UNLOCK SURPRISE ================= */
function unlockProposal() {
  if (surpriseUnlocked) return;
  surpriseUnlocked = true;

  document.getElementById("unlock-overlay")
    .classList.remove("show");

  setTimeout(() => {
    const letter = document.getElementById("love-letter-PROPOSAL");
    letter.classList.remove("hidden");
    letter.classList.add("show");
  }, 300);
}

function closeLetter() {
  document.getElementById("love-letter-PROPOSAL")
    .classList.remove("show");
}

/* ================= NO BUTTON ================= */
function runAway(btn) {
  btn.style.transform =
    `translate(${Math.random()*150}px, ${Math.random()*150}px)`;
}
