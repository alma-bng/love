// ===== GATE =====
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const error = document.getElementById('gate-error');
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');
  const MAGIC_WORD = 'love';

  if (input === MAGIC_WORD) {
    error.style.display = 'none';
    gate.style.opacity = 0;
    setTimeout(() => {
      gate.style.display = 'none';
      main.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  } else {
    error.style.display = 'block';
  }
}

// ===== OPEN/CLOSE SECTION =====
function openSection(sectionId) {
  document.querySelectorAll('.content').forEach(s => s.classList.remove('show'));
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('show');
    const parentCard = section.closest('.card');
    if (parentCard) parentCard.classList.add('active');
    setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (!section) return;

  section.classList.remove('show');
  const parentCard = section.closest('.card');
  if (parentCard) parentCard.classList.remove('active');

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

// ===== UNIVERSAL CARD CLICK =====
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      // Ignore clicks inside content or buttons
      if (e.target.closest('.content') || e.target.tagName === 'BUTTON') return;

      const section = card.querySelector('.content');
      if (!section) return;

      const isOpen = section.classList.contains('show');

      // Close all other cards
      cards.forEach(c => {
        c.classList.remove('active');
        const s = c.querySelector('.content');
        if (s) s.classList.remove('show');
      });

      // Toggle clicked card
      if (!isOpen) {
        section.classList.add('show');
        card.classList.add('active');
        setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    });
  });
});
