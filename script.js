// Scroll suave para seções
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Validação simples do formulário
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado por entrar em contato! 🌱");
    form.reset();
});
