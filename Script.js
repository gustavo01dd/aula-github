    // 1. Trocar o modo claro/escuro
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Modo Claro';
    } else {
        themeBtn.textContent = 'Modo Escuro';
    }
});

// 2. Efeito simples nos botões de curtir
const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#e10600';
        button.style.color = 'white';
        button.textContent = 'Curtiu!';
    });
});

// 3. Saudação baseada no horário
const title = document.getElementById('main-title');
const hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia, fã de F1!");
} else if (hora < 18) {
    console.log("Boa tarde, fã de F1!");
} else {
    console.log("Boa noite, fã de F1!");
}
