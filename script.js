// ===== GATE =====
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const error = document.getElementById('gate-error');
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');
  const MAGIC_WORD = 'love';

  if (input === MAGIC_WORD) {
    gate.style.opacity = 0;
    setTimeout(() => {
      gate.style.display = 'none';
      main.style.display = 'block';
    }, 800);
  } else {
    error.style.display = 'block';
  }
}

// ===== OPEN/CLOSE CARDS =====
function openSection(sectionId) {
  document.querySelectorAll('.content').forEach(s => s.classList.remove('show'));
  const section = document.getElementById(sectionId);
  if (section) section.classList.add('show');
}

function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (section) section.classList.remove('show');

  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  if (msg) msg.style.display = 'none';
  if (kiss) kiss.style.display = 'none';
  if (music) {
    music.pause();
    music.currentTime = 0;
  }
}

// ===== PROPOSAL YES =====
function sayYes() {
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  if (msg) msg.style.display = 'block';
  if (kiss) {
    kiss.style.display = 'block';
    kiss.classList.remove('show');
    setTimeout(() => kiss.classList.add('show'), 100);
  }

  if (music) {
    music.currentTime = 0;
    music.play().catch(err => console.log("Audio blocked:", err));
  }
}

// ===== PROPOSAL NO =====
function runAway(btn) {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = 'absolute';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

// ===== FAVORITE PICTURES CAROUSEL =====
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
