/* =====================
   MAGIC WORD GATE
===================== */

const MAGIC_WORD = "love";

document.getElementById("magic-word").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    enterSite();
  }
});

function enterSite() {
  const input = document.getElementById("magic-word");
  const value = input.value.trim().toLowerCase();
  const error = document.getElementById("gate-error");

  if (value === MAGIC_WORD) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    releaseHearts();
  } else {
    error.classList.remove("hidden");
    input.style.animation = "shake 0.4s";
    setTimeout(() => (input.style.animation = ""), 400);
  }
}

/* =====================
   HEARTS (FULL PAGE)
===================== */

function releaseHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerText = ["💖", "💗", "💕", "💞"][Math.floor(Math.random() * 4)];

    const xMove = Math.random() * 300 - 150;
    const yMove = Math.random() * 300 - 150;

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 18 + "px";

    heart.animate(
      [
        { transform: "translate(0,0)", opacity: 0 },
        { opacity: 1 },
        {
          transform: `translate(${xMove}px, ${yMove}px)`,
          opacity: 0
        }
      ],
      { duration: 6000, easing: "ease-in-out" }
    );

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}

/* =====================
   CARD NAVIGATION
===================== */

let memoriesOpened = false;

function openSection(id) {
  if (id === "proposal" && !memoriesOpened) {
    alert("Unlock our memories first 💕");
    return;
  }

  document.querySelectorAll(".content").forEach(sec =>
    sec.classList.add("hidden")
  );

  document.getElementById(id).classList.remove("hidden");

  if (id === "memories") memoriesOpened = true;
}

function goBack(event) {
  event.stopPropagation();
  event.target.closest(".content").classList.add("hidden");
}

/* =====================
   PROPOSAL
===================== */

function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  fadeInMusic(document.getElementById("love-music"));
  loveExplosion();

  setTimeout(openLetter, 1500);
}

function runAway(button) {
  const phrases = [
    "TRY AGAIN 😌",
    "NOT TODAY 🙄",
    "WRONG ANSWER",
    "BE SERIOUS 😭",
    "YOU MEAN YES"
  ];

  button.innerText = phrases[Math.floor(Math.random() * phrases.length)];

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  button.style.transform = `translate(${x}px, ${y}px)`;
}

/* =====================
   LOVE EXPLOSION
===================== */

function loveExplosion() {
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("span");
    emoji.innerText = ["💖", "💍", "🥹", "💋"][Math.floor(Math.random() * 4)];
    emoji.style.position = "fixed";
    emoji.style.left = "50%";
    emoji.style.top = "50%";
    emoji.style.fontSize = "24px";

    document.body.appendChild(emoji);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 200 + 50;

    emoji.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
          opacity: 0
        }
      ],
      { duration: 1200 }
    );

    setTimeout(() => emoji.remove(), 1200);
  }
}

/* =====================
   LOVE LETTER
===================== */

function openLetter() {
  document.getElementById("love-letter").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("love-letter").classList.add("hidden");
}

/* =====================
   IMAGE FULLSCREEN
===================== */

document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation();

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(0,0,0,0.8);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:999;
    `;

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "20px";

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);
    overlay.onclick = () => overlay.remove();
  });
});

/* =====================
   MUSIC FADE IN
===================== */

function fadeInMusic(audio) {
  audio.volume = 0;
  audio.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.8) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

/* =====================
   LOVE COUNTER
===================== */
const startDate = new Date("2023-12-19");

function updateCounter() {
  const now = new Date();

  // Days together
  const diffTime = now - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerText = days;

  // Years & months
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;

  // 🎉 Anniversary check
  const isAnniversary =
    now.getDate() === startDate.getDate() &&
    now.getMonth() === startDate.getMonth();

  const message = document.getElementById("anniversary-message");

  if (isAnniversary) {
    message.classList.remove("hidden");
    message.innerText =
      years === 1
        ? "Happy 1 Year Anniversary, my love 💍💖"
        : `Happy ${years} Year Anniversary, forever with you 💖💍`;
  }
}

updateCounter();


/* =====================
   SECRET MESSAGE
===================== */

setTimeout(() => {
  alert("Still here? Good. I’m never leaving 💖");
}, 60000);
function releaseHands() {
  for (let i = 0; i < 15; i++) {
    const hand = document.createElement("div");
    hand.innerText = "🤝"; // hand-holding emoji
    const xMove = Math.random() * 300 - 150;
    const yMove = Math.random() * 300 - 150;

    hand.style.position = "fixed";
    hand.style.left = Math.random() * 100 + "vw";
    hand.style.top = Math.random() * 100 + "vh";
    hand.style.fontSize = Math.random() * 20 + 24 + "px";

    hand.animate(
      [
        { transform: "translate(0,0)", opacity: 0 },
        { opacity: 1 },
        { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0 }
      ],
      { duration: 6000, easing: "ease-in-out" }
    );

    document.body.appendChild(hand);
    setTimeout(() => hand.remove(), 6000);
  }
}


