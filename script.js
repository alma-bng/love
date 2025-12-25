const MAGIC_WORD = "love";

/* =========================
   LOVE EXPLOSION (all around)
========================= */
function explodeLove() {
  const hearts = ["💖","💘","💝","💗","💓","❤️"];
  
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("span");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = "love-heart";

    // Random start position anywhere on the screen
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Random size
    heart.style.fontSize = 15 + Math.random() * 25 + "px";

    // Random movement offsets
    const xMove = (Math.random() - 0.5) * 400;
    const yMove = -100 - Math.random() * 400;

    heart.style.setProperty("--x", xMove + "px");
    heart.style.setProperty("--y", yMove + "px");
    heart.style.animationDelay = (Math.random() * 0.5) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

/* =========================
   GATE
========================= */
function enterSite() {
  const input = document.getElementById("magic-word");
  const value = input.value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== MAGIC_WORD) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  // Explode love everywhere
  explodeLove();

  // Show the scroll letter immediately, centered
  const scroll = document.getElementById("love-letter-SCROLL");
  if (scroll) scroll.classList.remove("hidden");
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
  const yesMessage = document.getElementById("yes-message");
  if(yesMessage) yesMessage.classList.remove("hidden");

  const music = document.getElementById("love-music");
  if(music) {
    music.volume = 0.8;
    music.play();
  }

  explodeLove();

  setTimeout(() => {
    const proposalLetter = document.getElementById("love-letter-PROPOSAL");
    if(proposalLetter) proposalLetter.classList.remove("hidden");
  }, 500);
}

function closeLetter() {
  const proposalLetter = document.getElementById("love-letter-PROPOSAL");
  if(proposalLetter) proposalLetter.classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*200}px, ${Math.random()*200}px)`;
}

/* =========================
   CARDS
========================= */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c => c.style.display = "none");
  const section = document.getElementById(id);
  if(section) section.style.display = "block";
}

function goBack(e) {
  e.stopPropagation();
  const section = e.target.closest(".content");
  if(section) section.style.display = "none";
}

/* =========================
   IMAGE GALLERY
========================= */
document.addEventListener("click", e => {
  if(e.target.tagName === "IMG" && e.target.closest("#pictures")) {
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
  const overlay = document.getElementById("gallery-overlay");
  if(overlay) overlay.remove();
}

/* =========================
   TIME COUNTER
========================= */
const startDate = new Date("2023-12-19");
const daysEl = document.getElementById("days");
if(daysEl) {
  daysEl.innerText = Math.floor((new Date() - startDate) / 86400000);
}// after gate is opened:
explodeLove();
setTimeout(() => {
  const scroll = document.getElementById("love-letter-SCROLL");
  if(scroll) scroll.classList.remove("hidden");
}, 300);

function openScrollLetter() {
  const scroll = document.getElementById("love-letter-SCROLL");
  if(scroll) {
    scroll.classList.add("show");
  }
}

function closeScrollLetter() {
  const scroll = document.getElementById("love-letter-SCROLL");
  if(scroll) {
    scroll.classList.remove("show");
  }
}

// Call this only after correct magic word
// Example:
function enterSite() {
  const input = document.getElementById("magic-word");
  const value = input.value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== "love") {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  explodeLove();      // hearts all around
  openScrollLetter();  // show scroll properly centered
}


