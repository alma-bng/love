// ===== ENTER SITE =====
function enterSite() {
    const input = document.getElementById('magic-word').value.trim().toLowerCase();
    const gate = document.getElementById('gate');
    const main = document.getElementById('main-content');
    const error = document.getElementById('gate-error');

    if(input === 'love'){
        error.style.display = 'none';
        gate.style.display = 'none';
        main.style.display = 'block';
    } else {
        error.style.display = 'block';
    }
}

// ===== OPEN CARD =====
function openSection(sectionId) {
    // Close all sections first
    document.querySelectorAll('.content').forEach(s => {
        s.classList.remove('show');
        s.classList.add('hidden');
    });

    // Open clicked section
    const section = document.getElementById(sectionId);
    if(section){
        section.classList.remove('hidden');
        section.classList.add('show');
    }
}

// ===== GO BACK =====
function goBack(event){
    event.stopPropagation();
    const section = event.target.closest('.content');
    if(!section) return;

    section.classList.remove('show');
    section.classList.add('hidden');

    // Reset proposal
    const msg = document.getElementById('yes-message');
    const kiss = document.getElementById('kiss');
    const music = document.getElementById('love-music');

    if(msg) msg.style.display = 'none';
    if(kiss) kiss.style.display = 'none';
    if(music){
        music.pause();
        music.currentTime = 0;
    }
}

// ===== PROPOSAL YES =====
function sayYes(){
    const msg = document.getElementById('yes-message');
    const kiss = document.getElementById('kiss');
    const music = document.getElementById('love-music');

    if(msg) msg.style.display = 'block';
    if(kiss){
        kiss.style.display = 'block';
        setTimeout(()=> kiss.classList.add('show'), 100);
    }
    if(music){
        music.currentTime = 0;
        music.play();
    }
}

// ===== PROPOSAL NO =====
function runAway(btn){
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// ===== CARD CLICK HANDLER =====
document.addEventListener('DOMContentLoaded', ()=>{
    const cards = document.querySelectorAll('.card');

    cards.forEach(card=>{
        card.addEventListener('click', e=>{
            // Ignore clicks on buttons inside card
            if(e.target.tagName === 'BUTTON') return;

            const section = card.querySelector('.content');
            if(!section) return;

            const isOpen = section.classList.contains('show');

            // Close all other cards
            document.querySelectorAll('.card').forEach(c=>{
                c.classList.remove('active');
                const s = c.querySelector('.content');
                if(s){
                    s.classList.remove('show');
                    s.classList.add('hidden');
                }
            });

            // Open clicked card if it was closed
            if(!isOpen){
                section.classList.remove('hidden');
                section.classList.add('show');
                card.classList.add('active');
                section.scrollIntoView({behavior:'smooth', block:'start'});
            }
        
    });

});

