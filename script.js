const MAGIC_WORD = "love";

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
  openScrollLetter();
}

/* ================= LOVE EXPLOSION ================= */
function explodeLove() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "love-heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

/* ================= SCROLL LETTER ================= */
function openScrollLetter() {
  document.getElementById("love-letter-SCROLL")?.classList.add("show");
}

function closeScrollLetter() {
  document.getElementById("love-letter-SCROLL")?.classList.remove("show");
}

/* ================= PROPOSAL ================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  if (music) {
    music.volume = 0.8;
    music.play();
  }

  explodeLove();

  // unlock + show proposal letter
  setTimeout(() => {
    document.getElementById("proposal-letter").classList.add("show");
  }, 600);
}

function closeProposal() {
  document.getElementById("proposal-letter").classList.remove("show");
}

function runAway(btn) {
  btn.style.transform =
    `translate(${Math.random()*150}px, ${Math.random()*150}px)`;
}
