// ===== GATE =====
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');
  const error = document.getElementById('gate-error');
  const MAGIC_WORD = 'love';

  if (input === MAGIC_WORD) {
    error.style.display = 'none';
    gate.style.display = 'none';
    main.style.display = 'block';
  } else {
    error.style.display = 'block';
  }
}

// ===== OPEN/CLOSE CARD =====
function toggleCard(card) {
  const section = card.querySelector('.content');
  if (!section) return;

  const isOpen = section.classList.contains('show');

  // Close all cards
  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('active');
    const s = c.querySelector('.content');
    if (s) s.classList.remove('show');
  });

  // Open clicked card if it was closed
  if (!isOpen) {
    section.classList.add('show');
    card.classList.add('active');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== GO BACK BUTTON =====
function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (!section) return;

  section.classList.remove('show');
  const card = section.closest('.card');
  if (card) card.classList.remove('active');

  // Reset proposal stuff
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
    setTimeout(() => kiss.classList.add('show'), 100);
  }
  if (music) {
    music.currentTime = 0;
    music.play().catch(err => console.log("Audio blocked", err));
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

// ===== ATTACH CARD CLICK =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      // Ignore clicks on buttons
      if (e.target.tagName === 'BUTTON') return;
      toggleCard(card);
    });
  });
});
