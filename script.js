// === GATE ===
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const error = document.getElementById('gate-error');
  const correctWord = 'love'; // your magic word
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');

  if (input === correctWord) {
    gate.style.display = 'none';
    main.classList.remove('hidden');
  } else {
    error.style.display = 'block';
  }
}

// === OPEN & CLOSE SECTIONS ===
function openSection(id) {
  document.querySelectorAll('.content').forEach(s => s.classList.add('hidden'));
  const section = document.getElementById(id);
  if (section) section.classList.remove('hidden');
}

function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (section) section.classList.add('hidden');

  // Hide yes message & kiss
  document.getElementById('yes-message').classList.add('hidden');
  const kiss = document.getElementById('kiss');
  kiss.classList.add('hidden');
  kiss.classList.remove('show');

  // Pause music
  const music = document.getElementById('love-music');
  music.pause();
  music.currentTime = 0;
}

// === YES BUTTON ===
function sayYes() {
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  msg.classList.remove('hidden');

  setTimeout(() => {
    kiss.classList.remove('hidden');
    kiss.classList.add('show');
  }, 1000);

  music.currentTime = 0;
  music.play().catch(err => console.log("Audio blocked:", err));
}

// === NO BUTTON ===
function runAway(btn) {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = 'absolute';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

// === OPTIONAL: CARD HEADER CLICK ===
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const header = card.querySelector('h2, h3, h4, h5');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      if (!isActive) card.classList.add('active');
    });
  });
});
