// Open a specific section inside a card
function openSection(sectionId) {
  // Close all other sections first
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('show');
    section.classList.add('hidden');
  });

  const section = document.getElementById(sectionId);

  if (section) {
    section.classList.remove('hidden');
    section.classList.add('show');

    // Smooth scroll to the opened section
    setTimeout(() => {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  }
}

// Go back (close section)
function goBack(event) {
  event.stopPropagation(); // prevent reopening card
  const section = event.target.closest('.content');

  if (section) {
    section.classList.remove('show');

    setTimeout(() => {
      section.classList.add('hidden');
    }, 300);

    // Scroll back up to cards
    document.querySelector('.nav-cards').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Proposal YES button
function sayYes() {
  const msg = document.getElementById('yes-message');
  msg.classList.remove('hidden');

  // Optional cute effect
  msg.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// Proposal NO button runs away 😈
function runAway(btn) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}
function enterSite() {
  const input = document.getElementById('magic-word').value.toLowerCase().trim();
  const error = document.getElementById('gate-error');
  const gate = document.getElementById('gate');
  const main = document.getElementById('main-content');

  // 🔐 SET YOUR MAGIC WORD HERE
const MAGIC_WORD = "december19";
function enterSite() {
    const magicWordInput = document.getElementById('magic-word').value.trim().toLowerCase();
    const gateError = document.getElementById('gate-error');

    const correctWord = 'love'; // set your magic word

    if (magicWordInput === correctWord) {
        document.getElementById('gate').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        gateError.style.display = 'block';
    }
}

function openSection(id) {
    document.getElementById(id).classList.remove('hidden');
}

function goBack(event) {
    event.stopPropagation();
    event.target.parentElement.classList.add('hidden');
}

function sayYes() {
    document.getElementById('yes-message').classList.remove('hidden');
}

function runAway(button) {
    const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

  if (input !== MAGIC_WORD) {
    error.classList.remove('hidden');
    return;
  }

  error.classList.add('hidden');
  gate.style.opacity = '0';

  setTimeout(() => {
    gate.style.display = 'none';
    main.classList.remove('hidden');
    main.classList.add('revealed');
  }, 800);
}
function enterSite() {
    const magicWordInput = document.getElementById('magic-word').value.trim().toLowerCase();
    const gateError = document.getElementById('gate-error');
    const correctWord = 'love';

    if (magicWordInput === correctWord) {
        // hide gate
        document.getElementById('gate').style.display = 'none';
        // enable scrolling now that gate is gone
        document.body.style.overflow = 'auto';
        // show main content
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        gateError.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const header = card.querySelector('.card-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('active');

      // Close all cards
      cards.forEach(c => c.classList.remove('active'));

      // Only open clicked card
      if (!isOpen) card.classList.add('active');
    });
  });
});
function sayYes(event) {
  event.stopPropagation();

  document.getElementById('yes-message').classList.remove('hidden');
  document.getElementById('kiss').classList.remove('hidden');
}
function sayYes(event) {
  event.stopPropagation();

  // Show " YAYYYYY 🥹💚 I LOVE YOU FOREVER 💍💖"
  const message = document.getElementById('yes-message');
  message.classList.remove('hidden');

  // After 1 second, show the kiss
  setTimeout(() => {
    const kiss = document.getElementById('kiss');
    kiss.classList.remove('hidden');
    kiss.classList.add('show');
  }, 1000); // 1000ms = 1s
}

function goBack(event) {
  event.stopPropagation();
  const section = event.target.closest('section');
  section.classList.add('hidden');

  document.getElementById('yes-message').classList.add('hidden');
  const kiss = document.getElementById('kiss');
  kiss.classList.add('hidden');
  kiss.classList.remove('show');
}

function openSection(id) {
  document.getElementById(id).classList.remove('hidden');
}

function runAway(button) {
  const x = Math.floor(Math.random() * 80);
  const y = Math.floor(Math.random() * 80);
  button.style.position = 'absolute';
  button.style.left = x + '%';
  button.style.top = y + '%';
}
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸ Pause Music";
    } else {
      music.pause();
      btn.textContent = "🎵 Play Music";
    }
  }

