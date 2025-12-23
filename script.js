// ===== GATE =====
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const error = document.getElementById('gate-error');
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');

  if (input === 'love') {
    error.classList.add('hidden');
    gate.style.display = 'none';
    main.classList.remove('hidden');
  } else {
    error.classList.remove('hidden');
  }
}

// ===== OPEN SECTION =====
function openSection(id) {
  // Close all sections
  document.querySelectorAll('.content').forEach(sec => {
    sec.classList.remove('show');
    sec.classList.add('hidden');
  });

  // Open this one
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove('hidden');
    section.classList.add('show');
  }
}

// ===== GO BACK =====
function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (!section) return;

  section.classList.remove('show');
  section.classList.add('hidden');

  // Reset proposal stuff
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  if (msg) msg.classList.add('hidden');
  if (kiss) kiss.classList.add('hidden');
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
    music.play();
  }
}

// ===== PROPOSAL NO =====
function runAway(btn) {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  btn.style.position = 'absolute';
  btn.style.left = x + '%';
  btn.style.top = y + '%';
}

// ===== AUTOMATIC CARD CLICK HANDLER =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      // Ignore clicks on buttons
      if (e.target.tagName === 'BUTTON') return;
      // Ignore clicks inside .content
      if (e.target.closest('.content')) return;

      const section = card.querySelector('.content');
      if (!section) return;

      const isOpen = section.classList.contains('show');

      // Close all other cards
      document.querySelectorAll('.card').forEach(c => {
        c.classList.remove('active');
        const s = c.querySelector('.content');
        if (s) {
          s.classList.remove('show');
          s.classList.add('hidden');
        }
      });

      // Open clicked card if it was closed
      if (!isOpen) {
        section.classList.remove('hidden');
        section.classList.add('show');
        card.classList.add('active');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
