$(function () {
    $(".lang-btn").click(function () {
        // 1. Muda a aparência visual
        $(".lang-btn").removeClass("active");
        $(this).addClass("active");

        // 2. Pega no idioma clicado (pt ou en)
        const selectedLang = $(this).data("lang");

        // 3. Traduz todos os elementos com a classe .lang
        $(".lang").each(function () {
            const translation = $(this).data("lang-" + selectedLang);
            if (translation) {
                $(this).text(translation);
            }
        });
    });
});

const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let segments = [];
const numSegments = 30; // Mais segmentos para parecer mais longa
const segmentDist = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < numSegments; i++) {
    segments.push({ x: mouse.x, y: mouse.y, angle: 0 });
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let targetX = mouse.x;
    let targetY = mouse.y;

    segments.forEach((seg, i) => {
        // Lógica de perseguição cinemática
        const dx = targetX - seg.x;
        const dy = targetY - seg.y;
        seg.angle = Math.atan2(dy, dx);

        seg.x = targetX - Math.cos(seg.angle) * segmentDist;
        seg.y = targetY - Math.sin(seg.angle) * segmentDist;

        drawGhoulCentipede(seg.x, seg.y, seg.angle, i);

        targetX = seg.x;
        targetY = seg.y;
    });

    requestAnimationFrame(update);
}

function drawGhoulCentipede(x, y, angle, index) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    const alpha = 1 - (index / numSegments);
    // Cores: Cinza osso e detalhes em vermelho escuro
    ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
    ctx.fillStyle = `rgba(20, 20, 20, ${alpha})`;
    ctx.lineWidth = 2;

    // 1. DESENHAR AS PATAS/GARRAS (Estilo Inseto)
    if (index % 2 === 0 && index > 2 && index < numSegments - 2) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(150, 0, 0, ${alpha * 0.8})`; // Tom avermelhado nas patas
        // Pata Esquerda (longa e fina)
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-10, -35, -30, -25);
        // Pata Direita (longa e fina)
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-10, 35, -30, 25);
        ctx.stroke();
    }

    // 2. DESENHAR A VÉRTEBRA (Corpo irregular)
    ctx.beginPath();
    ctx.fillStyle = `rgba(40, 40, 40, ${alpha})`;
    ctx.strokeStyle = `rgba(120, 120, 120, ${alpha})`;

    // Desenha um formato de osso/vértebra
    const size = 12 - (index * 0.3);
    ctx.moveTo(size, 0);
    ctx.lineTo(size / 2, size / 2);
    ctx.lineTo(-size / 2, size / 2);
    ctx.lineTo(-size, 0);
    ctx.lineTo(-size / 2, -size / 2);
    ctx.lineTo(size / 2, -size / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 3. CABEÇA COM MANDÍBULAS (Apenas no primeiro segmento)
    if (index === 0) {
        ctx.strokeStyle = "rgba(200, 0, 0, 1)";
        ctx.lineWidth = 3;
        // Mandíbula Superior
        ctx.beginPath();
        ctx.arc(15, -8, 15, 0, Math.PI / 1.5);
        ctx.stroke();
        // Mandíbula Inferior
        ctx.beginPath();
        ctx.arc(15, 8, 15, 0, -Math.PI / 1.5, true);
        ctx.stroke();
    }

    ctx.restore();
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

update();