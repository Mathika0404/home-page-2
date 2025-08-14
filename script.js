// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    navMenu.classList.toggle('show');
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('show');
    }
  });
},{threshold:.12});

document.querySelectorAll('.service, .step, .doctor-card, .pill-card, .hero .stat').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Doctors carousel basic control
const track = document.getElementById('docTrack');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

const cardWidth = 252; // card + gap
prev.addEventListener('click', ()=> track.scrollBy({left: -cardWidth, behavior:'smooth'}));
next.addEventListener('click', ()=> track.scrollBy({left: cardWidth, behavior:'smooth'}));
