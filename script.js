// ===== GATE =====
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');
  const error = document.getElementById('gate-error');
  const MAGIC_WORD = 'love'; // set your magic word

  if (input === MAGIC_WORD) {
    error.style.display = 'none';
    gate.style.display = 'none';
    main.style.display = 'block';
  } else {
    error.style.display = 'block';
  }
}

// ===== OPEN/CLOSE CARDS =====
function openSection(sectionId) {
  // Close all other sections
  document.querySelectorAll('.content').forEach(s => s.classList.remove('show'));
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

  // Open the selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('show');
    const parentCard = section.closest('.card');
    if (parentCard) parentCard.classList.add('active');

    // Scroll smoothly
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== GO BACK BUTTON =====
function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (!section) return;

  section.classList.remove('show');
  const parentCard = section.closest('.card');
  if (parentCard) parentCard.classList.remove('active');

  // Reset proposal elements
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

// ===== UNIVERSAL CARD CLICK =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      // Ignore clicks inside buttons or already opened content
      if (e.target.closest('button')) return;
      if (e.target.closest('.content')) return;

      const section = card.querySelector('.content');
      if (!section) return;

      const isOpen = section.classList.contains('show');

      // Close all other cards
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
    });
  });
});
