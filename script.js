

// Efeito de números binários caindo
const matrix = document.getElementById('matrix');
const columns = Math.floor(window.innerWidth / 10);

function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrix.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let drops = Array(columns).fill(0);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = '18px monospace';

        for (let i = 0; i < columns; i++) {
            const text = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(text, i * 10, drops[i] * 10);

            if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

createMatrixEffect();

// Função para rolar até a seção e aplicar o efeito de digitação
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.classList.remove('hidden'); // Torna a seção visível
    section.innerHTML = section.innerHTML; // Força a reinicialização do efeito de digitação

    window.scrollTo({
        top: section.offsetTop - 50, // Subtrai o valor da altura da barra de navegação
        behavior: 'smooth'
    });

    // Aplica o efeito de digitação
    setTimeout(() => {
        section.classList.add('typing');
    }, 100); // Atraso para o efeito
}

// Efeito de digitação nas seções
document.querySelectorAll('section').forEach(section => {
    section.innerHTML = section.innerHTML; // Inicializa o efeito ao carregar
});