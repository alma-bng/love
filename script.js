const MAGIC_WORD = "love";

/* =========================
   LOVE EXPLOSION
========================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("span");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = "love-heart";

    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.8) * 800;
    const size = 20 + Math.random() * 30;

    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";
    heart.style.fontSize = size + "px";

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");
    heart.style.animationDelay = (Math.random() * 0.5) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

/* =========================
   GATE
========================= */
function enterSite() {
  const value = document.getElementById("magic-word").value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== MAGIC_WORD) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  // Only show scroll letter after gate is opened
  explodeLove();
  setTimeout(() => {
    const scroll = document.getElementById("love-letter-SCROLL");
    if (scroll) scroll.classList.remove("hidden");
  }, 300);
}

/* =========================
   NAV / CARDS
========================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c => c.style.display="none");
  const section = document.getElementById(id);
  if(section) section.style.display="block";
}

function goBack(e) {
  e.stopPropagation();
  const section = e.target.closest(".content");
  if(section) section.style.display="none";
}

/* =========================
   SCROLL LETTER
========================= */
function closeScrollLetter() {
  const scroll = document.getElementById("love-letter-SCROLL");
  if(scroll) scroll.classList.add("hidden");
}

/* =========================
   PROPOSAL
========================= */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");
  const music = document.getElementById("love-music");
  if(music) music.play();
  explodeLove();
  setTimeout(()=>{ 
    const proposalLetter = document.getElementById("love-letter-PROPOSAL");
    if(proposalLetter) proposalLetter.classList.remove("hidden");
  },500);
}

function closeLetter() { 
  const proposalLetter = document.getElementById("love-letter-PROPOSAL");
  if(proposalLetter) proposalLetter.classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*200}px,${Math.random()*200}px)`;
}
