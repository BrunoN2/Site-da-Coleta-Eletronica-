// Scroll suave do CTA
document.getElementById('ctaSaibaMais')?.addEventListener('click', () => {
    document.getElementById('educacao')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Reveal ao rolar (suave)
const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
        }
    });
},{ threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== MENU HAMBÚRGUER (com animações fluidas) =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    const toggleMenu = (open) => {
        if (open === undefined) open = !navLinks.classList.contains('open');
        navLinks.classList.toggle('open', open);
        const expanded = open ? 'true' : 'false';
        menuBtn.setAttribute('aria-expanded', expanded);
        navLinks.setAttribute('aria-hidden', open ? 'false' : 'true');
    };

    menuBtn.addEventListener('click', (e) => {
        toggleMenu();
        e.stopPropagation();
    });

    // fecha ao clicar em link
    navLinks.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click', ()=> toggleMenu(false));
    });

    // fecha ao clicar fora
    document.addEventListener('click', (e)=>{
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // fecha com ESC
    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') toggleMenu(false);
    });
}