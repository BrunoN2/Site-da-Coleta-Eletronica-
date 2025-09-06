// Scroll suave do CTA
document.getElementById('ctaSaibaMais')?.addEventListener('click', () => {
    document.getElementById('educacao')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Reveal ao rolar
const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
        }
    });
},{ threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Menu hambúrguer
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    const toggleMenu = (open) => {
        if (open === undefined) open = !navLinks.classList.contains('open');
        navLinks.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        navLinks.setAttribute('aria-hidden', open ? 'false' : 'true');
    };

    menuBtn.addEventListener('click', (e) => {
        toggleMenu();
        e.stopPropagation();
    });

    navLinks.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click', ()=> toggleMenu(false));
    });

    document.addEventListener('click', (e)=>{
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') toggleMenu(false);
    });
}