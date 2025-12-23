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

// ===== OPEN CARD =====
function openSection(id) {
  // close all sections
  document.querySelectorAll('.content').forEach(sec => {
    sec.classList.remove('show');
    sec.classList.add('hidden');
  });

  // open selected
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove('hidden');
    section.classList.add('show');
  }
}

// ===== CLOSE CARD =====
function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('.content');
  if (!section) return;

  section.classList.remove('show');
  section.classList.add('hidden');

  // reset proposal extras
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

// ===== YES BUTTON =====
function sayYes() {
  const msg = document.getElementById('yes-message');
  const kiss = document.getElementById('kiss');
  const music = document.getElementById('love-music');

  msg.classList.remove('hidden');
  kiss.classList.remove('hidden');

  music.currentTime = 0;
  music.play();
}

// ===== NO BUTTON =====
function runAway(btn) {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  btn.style.position = 'absolute';
  btn.style.left = x + '%';
  btn.style.top = y + '%';
}
