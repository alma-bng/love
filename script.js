// =====================
// GATE FUNCTIONALITY
// =====================
function enterSite() {
  const input = document.getElementById('magic-word').value.trim().toLowerCase();
  const gateError = document.getElementById('gate-error');
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');

  const MAGIC_WORD = 'love'; // set your magic word here

  if (input === MAGIC_WORD) {
    gate.style.display = 'none';
    main.classList.remove('hidden');
  } else {
    gateError.style.display = 'block';
  }
}

// =====================
// CARD SECTION FUNCTIONALITY
// =====================
function openSection(sectionId) {
  // Close all other sections
  document.querySelectorAll('.content').forEach(sec => {
    sec.classList.add('hidden');
  });

  const section = document.getElementById(sectionId);
  if (section) section.classList.remove('hidden');
}

function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (section) section.classList.add('hidden');

  // Hide proposal YES message and kiss
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  if (msg) msg.classList.add('hidden');
  if (kiss) {
    kiss.classList.add('hidden');
    kiss.classList.remove('show');
  }

  // Pause audio
  const music = document.getElementById('love-music');
  if (music) {
    music.pause();
    music.currentTime = 0;
  }
}

// =====================
// PROPOSAL YES/NO
// =====================
function sayYes() {
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  if (msg) msg.classList.remove('hidden');

  if (kiss) {
    setTimeout(() => {
      kiss.classList.remove('hidden');
      kiss.classList.add('show');
    }, 1000);
  }

  if (music) {
    music.currentTime = 0;
    music.play().catch(err => console.log("Audio blocked:", err));
  }
}

function runAway(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}

// =====================
// OPTIONAL: CARD HEADER CLICK (for visual active card)
// =====================
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
