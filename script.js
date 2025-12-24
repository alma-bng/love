/* =====================
   MAGIC WORD GATE
===================== */

const MAGIC_WORD = "love"; // 🔐 change if needed

function enterSite() {
  const input = document.getElementById("magic-word").value.trim().toLowerCase();
  const error = document.getElementById("gate-error");document.getElementById("magic-word").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    enterSite();
  }
});


  if (input === MAGIC_WORD.toLowerCase()) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.classList.remove("hidden");
  }
}

/* =====================
   CARD NAVIGATION
===================== */

function openSection(id) {
  // close all open sections first
  document.querySelectorAll(".content").forEach(section => {
    section.classList.add("hidden");
  });

  // open selected section
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove("hidden");
  }
}

function goBack(event) {
  event.stopPropagation();
  event.target.closest(".content").classList.add("hidden");
}

/* =====================
   PROPOSAL LOGIC
===================== */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");
  document.getElementById("kiss").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  loveExplosion();

  setTimeout(() => {
    openLetter();
  }, 1500);
}


function runAway(button) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  button.style.transform = `translate(${x}px, ${y}px)`;
}
function releaseHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 4s ease-in forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}function enterSite() {
  const input = document.getElementById("magic-word");
  const value = input.value.trim().toLowerCase();
  const error = document.getElementById("gate-error");

  if (value === MAGIC_WORD) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    releaseHearts(); // 💕
  } else {
    error.classList.remove("hidden");

    input.style.animation = "shake 0.4s";
    setTimeout(() => (input.style.animation = ""), 400);
  }
}
function releaseHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 4s ease-in forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
function loveExplosion() {
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("span");
    emoji.innerText = ["💖", "💍", "🥹", "💋"][Math.floor(Math.random() * 4)];
    emoji.style.position = "fixed";
    emoji.style.left = "50%";
    emoji.style.top = "50%";
    emoji.style.fontSize = "24px";
    emoji.style.animation = "explode 1.2s ease-out forwards";
    document.body.appendChild(emoji);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200 + 50;

    emoji.animate(
      [
        { transform: "translate(0, 0)", opacity: 1 },
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
function openLetter() {
  document.getElementById("love-letter").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("love-letter").classList.add("hidden");
}
let memoriesOpened = false;

function openSection(id) {
  if (id === "proposal" && !memoriesOpened) {
    alert("You have to unlock our memories first 💕");
    return;
  }

  document.querySelectorAll(".content").forEach(sec => {
    sec.classList.add("hidden");
  });

  const section = document.getElementById(id);
  section.classList.remove("hidden");

  if (id === "memories") {
    memoriesOpened = true;
  }
}
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation();

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "300";

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



