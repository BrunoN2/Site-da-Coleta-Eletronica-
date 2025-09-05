// Scroll suave para o botão "Quero fazer a diferença"
document.getElementById('ctaSaibaMais')?.addEventListener('click', () => {
    const alvo = document.getElementById('educacao');
    alvo?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Efeito reveal ao rolar
const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
        }
    });
},{ threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));