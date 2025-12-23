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

// ===== OPEN/CLOSE CARD SECTIONS =====
function openSection(sectionId) {
  // Close all sections first
  document.querySelectorAll('.content').forEach(section => section.classList.remove('show'));

  // Remove "active" class from all cards
  document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));

  // Open selected section
  const section = document.getElementById(sectionId);
  const parentCard = section ? section.closest('.card') : null;
  if (section) {
    section.classList.add('show');
    if (parentCard) parentCard.classList.add('active');
  }

  // Scroll smoothly to section
  setTimeout(() => {
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// Close section
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

  const parentCard = section ? section.closest('.card') : null;
  if (parentCard) parentCard.classList.remove('active');
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

// ===== CARDS INTERACTIONS =====
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const header = card.querySelector('h2, h3, h4, h5');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Close all cards and sections
      cards.forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.content').forEach(s => s.classList.remove('show'));

      // Open clicked card if it was not active
      if (!isActive) {
        card.classList.add('active');
        const section = card.querySelector('.content');
        if (section) section.classList.add('show');

        // Scroll smoothly to section
        setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    });
  });
});
