// Magic gate
function enterSite() {
    const input = document.getElementById('magic-word').value.trim().toLowerCase();
    const gateError = document.getElementById('gate-error');
    const gate = document.getElementById('gate');
    const main = document.getElementById('main-content');

    const MAGIC_WORD = "love"; // set your magic word here

    if (input === MAGIC_WORD) {
        // hide error if any
        gateError.style.display = 'none';
        
        // fade out gate
        gate.style.opacity = '0';
        setTimeout(() => {
            gate.style.display = 'none';
            main.classList.remove('hidden');
            main.classList.add('revealed');
            document.body.style.overflow = 'auto'; // allow scrolling
        }, 500); // match CSS transition if needed
    } else {
        gateError.style.display = 'block';
    }
}

// Other functions (only one copy each)
function openSection(id) {
    document.getElementById(id).classList.remove('hidden');
}

function goBack(event) {
    event.stopPropagation();
    const section = event.target.closest('section');
    if(section) section.classList.add('hidden');
}

function sayYes(event) {
    event.stopPropagation();
    const msg = document.getElementById('yes-message');
    const kiss = document.getElementById('kiss');

    msg.classList.remove('hidden');

    setTimeout(() => {
        kiss.classList.remove('hidden');
        kiss.classList.add('show');
    }, 1000);
}

function runAway(button) {
    const x = Math.floor(Math.random() * 80);
    const y = Math.floor(Math.random() * 80);
    button.style.position = 'absolute';
    button.style.left = x + '%';
    button.style.top = y + '%';
}

// Music toggle
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
});
