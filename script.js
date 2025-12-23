// ==== MAGIC GATE ====
function enterSite() {
    const input = document.getElementById('magic-word').value.trim().toLowerCase();
    const gateError = document.getElementById('gate-error');
    const gate = document.getElementById('gate');
    const main = document.getElementById('main-content');

    const MAGIC_WORD = "love"; // set your magic word

    if (input === MAGIC_WORD) {
        gateError.style.display = 'none';
        gate.style.opacity = '0';
        setTimeout(() => {
            gate.style.display = 'none';
            main.classList.remove('hidden');
            main.classList.add('revealed');
            document.body.style.overflow = 'auto'; // allow scrolling
        }, 500);
    } else {
        gateError.style.display = 'block';
    }
}

// ==== CARDS ====
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

function openSection(id) {
    document.getElementById(id).classList.remove('hidden');
}

function goBack(event) {
    event.stopPropagation();
    const section = event.target.closest('section');
    if (section) section.classList.add('hidden');

    // Hide yes message and kiss if open
    document.getElementById('yes-message').classList.add('hidden');
    const kiss = document.getElementById('kiss');
    kiss.classList.add('hidden');
    kiss.classList.remove('show');
}

// ==== YES / KISS ====
function sayYes(event) {
    event.stopPropagation();
    const msg = document.getElementById('yes-message');
    const kiss = document.getElementById('kiss');

    msg.classList.remove('hidden');

    setTimeout(() => {
        kiss.classList.remove('hidden');
        kiss.classList.add('show');
    }, 1000); // 1 second delay for kiss
}

// ==== NO RUNAWAY BUTTON ====
fun
