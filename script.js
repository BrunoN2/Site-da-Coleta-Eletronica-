// Scroll suave do CTA (nativo via CSS, isto é só fallback)
document.getElementById('ctaSaibaMais')?.addEventListener('click', (e) => {
    e.preventDefault?.();
    document.getElementById('educacao')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Reveal ao rolar (IntersectionObserver é leve)
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Menu hambúrguer (com acessibilidade)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    const toggleMenu = (open) => {
        const willOpen = open ?? !navLinks.classList.contains('open');
        navLinks.classList.toggle('open', willOpen);
        menuBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        navLinks.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
    };

    menuBtn.addEventListener('click', (e) => {
        toggleMenu();
        e.stopPropagation();
    }, { passive: true });

    // fecha ao clicar num link
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => toggleMenu(false), { passive: true });
    });

    // fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) toggleMenu(false);
    }, { passive: true });

    // fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
    });
}