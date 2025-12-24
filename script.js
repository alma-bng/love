/* =====================
   MAGIC WORD GATE
===================== */

const MAGIC_WORD = "love"; // 🔐 change if needed

function enterSite() {
  const input = document.getElementById("magic-word").value.trim().toLowerCase();
  const error = document.getElementById("gate-error");

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
  music.play().catch(() => {
    console.log("Autoplay blocked — user interaction required");
  });
}

function runAway(button) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  button.style.transform = `translate(${x}px, ${y}px)`;
}
