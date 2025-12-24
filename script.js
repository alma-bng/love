const MAGIC_WORD = "love";

/* ---------------- GATE ---------------- */
function enterSite() {
  const value = document.getElementById("magic-word").value.toLowerCase();
  const error = document.getElementById("gate-error");

  if (value !== MAGIC_WORD) {
    error.classList.remove("hidden");
    return;
  }

  document.getElementById("gate").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");

  // wait for DOM paint
  setTimeout(openScrollLetter, 300);
}

/* ---------------- NAV ---------------- */
function openSection(id) {
  document.querySelectorAll(".content").forEach(c => c.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goBack(e) {
  e.stopPropagation();
  e.target.closest(".content").classList.add("hidden");
}

/* ---------------- SCROLL LETTER ---------------- */
function openScrollLetter() {
  const overlay = document.getElementById("scroll-letter");
  const scroll = overlay.querySelector(".scroll");

  overlay.classList.remove("hidden");

  scroll.style.animation = "none";
  scroll.offsetHeight; // force repaint
  scroll.style.animation = "openScroll 1s ease forwards";
}

function closeScrollLetter() {
  const overlay = document.getElementById("scroll-letter");
  const scroll = overlay.querySelector(".scroll");

  scroll.style.animation = "closeScroll 0.8s ease forwards";

  scroll.addEventListener(
    "animationend",
    () => overlay.classList.add("hidden"),
    { once: true }
  );
}

/* ---------------- PROPOSAL ---------------- */
function sayYes() {
  document.getElementById("yes-message").classList.remove("hidden");

  const music = document.getElementById("love-music");
  music.volume = 0.8;
  music.play();

  setTimeout(() => {
    document.getElementById("proposal-letter").classList.remove("hidden");
  }, 700);
}

function closeProposalLetter() {
  document.getElementById("proposal-letter").classList.add("hidden");
}

function runAway(btn) {
  btn.style.transform = `translate(${Math.random()*120}px, ${Math.random()*120}px)`;
}

/* ---------------- TIME ---------------- */
const startDate = new Date("2023-12-19");
document.getElementById("days").innerText =
  Math.floor((new Date() - startDate) / 86400000);
