// --- TRADUÇÃO ---
$(function () {
    $(".lang-btn").click(function () {
        $(".lang-btn").removeClass("active");
        $(this).addClass("active");
        const selectedLang = $(this).data("lang");
        $(".lang").each(function () {
            const translation = $(this).data("lang-" + selectedLang);
            if (translation) $(this).text(translation);
        });
    });
});

const albumData = {
    'ren': {
        title: "Ren - Sick Boi",
        tracks: [
            { name: "Sevens Sins", artist: "Ren", id: "6ibycc4RWGnccrIn9tHuSB?si=c424b149cb2c4fd2" },
            { name: "Sick Boi", artist: "Ren", id: "0G1Mkk8xbgtBwXwVkTfTzS?si=bd0e48da567f4df3" },
            { name: "Animal Flow", artist: "Ren", id: "0vTSQubJ1PWIBidFQHNytP?si=54cb95fcc5dc42de" },
            { name: "Money Game, Pt.3", artist: "Ren", id: "4XfqnMWS1jAkegAgcoItTb?si=5661d03bfd8f4796" },
            { name: "Lost All Faith", artist: "Ren", id: "2B0UPzzB9zeayRKBHO7NEV?si=4febd3a7f1b74f3d" },
            { name: "Genesis", artist: "Ren", id: "47GhLK1VPqL5yKjdjV2Qmm?si=1e79b280616d480c" },
            { name: "Murderer", artist: "Ren", id: "2piZXb5NrTEE0mD2DQSdHU?si=56e72d9df0c2462b" },
            { name: "Suic*de", artist: "Ren", id: "1jPkECdLBm326I3uGOQfqZ?si=0da53f9834724c4a" },
            { name: "Illest of Our Time", artist: "Ren", id: "3SOzmgcJ8S4oNvY7rQfqKO?si=f954c3e8824d4877" },
            { name: "Love Music, Pt.4", artist: "Ren", id: "1433SFYX6Y7lFSSGGWKxux?si=ed8fb0e180724107" },
            { name: "Uninvited", artist: "Ren", id: "2nLFY6sGZ0k2WvpqhmVhqu?si=563a1f4f046542d3" },
            { name: "What You Want", artist: "Ren", id: "7kt0ZnUbLCbt7y4DmWgGVq?si=cbb533b618604cb7" },
            { name: "The Hunger", artist: "Ren", id: "5PxAAJQ9JeeQ41isefAxd4?si=658dc6423a0642c2" },
            { name: "Down on the Beat", artist: "Ren", id: "66tCvoYK6KVYSLNiRvo74f?si=b55f8936cdee4f7a" },
            { name: "Masochist", artist: "Ren", id: "4KX8E0ljPiaMgz9MP9TdwY?si=a41123b4d1c34622" },
            { name: "Loco", artist: "Ren", id: "2rymjFoOsghUEiWkR5cGoq?si=3edbe3fa3c604a54" },
            { name: "Wicked Ways", artist: "Ren", id: "0meyZoH6vIqb0x7pwRN6yj?si=d1908f1bb71f454d" },
            { name: "Sick Boi, Pt.2", artist: "Ren", id: "4vC9SAO2nrYqojgeb2qS6T?si=f8c565cd1c294bf8" }
        ]
    },
    'top': {
        title: "Twenty One Pilots - Blurryface",
        tracks: [
            { name: "Heavydirtysoul", artist: "Twenty One Pilots", id: "7i9763l5SSfOnqZ35VOcfy?si=4f46d6e492de4f3b" },
            { name: "Stressed Out", artist: "Twenty One Pilots", id: "3CRDbSIZ4r5MsZ0YwxuEkn?si=77ff04fc7f10447f" },
            { name: "Ride", artist: "Twenty One Pilots", id: "2Z8WuEywRWYTKe1NybPQEW?si=2aa36ce36ec74b27" },
            { name: "Fairy Local", artist: "Twenty One Pilots", id: "1s9xuJxhYM0LdVqksjegcg?si=aff3f6698daf421d" },
            { name: "Tear in My Hearth", artist: "Twenty One Pilots", id: "3bnVBN67NBEzedqQuWrpP4?si=b95d1b263d034855" },
            { name: "Lane Boy", artist: "Twenty One Pilots", id: "2P61EK6DMGyVyssLWS4fKy?si=e9e9c14a931c47d6" },
            { name: "The Judge", artist: "Twenty One Pilots", id: "1lguQJjlNrIOoOylYVZN3M?si=e36ebd5276dc4a92" },
            { name: "Doubt", artist: "Twenty One Pilots", id: "57yL3161hUMuw06zzzUCHi?si=2f01c5b6404d4f66" },
            { name: "Polarize", artist: "Twenty One Pilots", id: "6GmkJJMe9U1tEcrJ3Hq3A1?si=b6dcf7e4cbc6407f" },
            { name: "We Don't Believe What's on TV", artist: "Twenty One Pilots", id: "22OqansuvEMQu9W0EfiGTI?si=1b6d2d0bcb524557" },
            { name: "Message Man", artist: "Twenty One Pilots", id: "4Oyl6oYSNeeZZP0OAxPVaU?si=d32e179ade7d468a" },
            { name: "Hometwon", artist: "Twenty One Pilots", id: "40sRwFjfrRnaTdYPJIg4CP?si=0e79fdaa2a1b4248" },
            { name: "Not Today", artist: "Twenty One Pilots", id: "7qxjGHW485TL8ciwkHD5MK?si=1e20f616ad774476" },
            { name: "Goner", artist: "Twenty One Pilots", id: "5P3yUXUC9rZPJPNmYGKEAz?si=3073a8fb09d44297" }
        ]
    },
    'papillon': {
        title: "Papillon - Wonder",
        tracks: [
            { name: "¡ +1 !", artist: "Papillon", id: "4Jw4RruBWb2LcyZSb53q5X?si=572763e78bd642d1" },
            { name: "¡ WOW !", artist: "Papillon", id: "5hUg7aAyzQexEfPKFr7NXE?si=3367157cbffe4680" },
            { name: "¡ AIBOFOBIA !", artist: "Papillon", id: "6U3Wd76YJoYbuZlgFBBLIb?si=ee060f57d5e34f79" },
            { name: "¡ SÓ NÓS !", artist: "Papillon", id: "6gJF4kTu4cQDklJMnd0ZkQ?si=eb0c13fe96ce42ff" },
            { name: "¡ E.T.J.E !", artist: "Papillon", id: "7w4dgCGpkixpWKZ1pxVQQb?si=94999161f6f44c3d" },
            { name: "¡ OI RIO !", artist: "Papillon", id: "3ePAAsSqnUJ3OAdFpd1xnS?si=e287fff569044cea" },
            { name: "¡ E SE !", artist: "Papillon", id: "2EpcjvH2Rp8xbNSy3modiM?si=bcd3ac074b354f1a" },
            { name: "¡ AYOYA !", artist: "Papillon", id: "2PAp5pIhLTlijZmjLUfuMo?si=e2423e39d51f4781" },
            { name: "¡ A MÃE TE AMA !", artist: "Papillon", id: "6MdBE4yuuHDVILv3nPhJp1?si=e2bba0d914984859" },
            { name: "¡ N.M.N !", artist: "Papillon", id: "0Z0hc6C04UROHASQ7yC38B?si=4ecb057fe5f74780" },
            { name: "¡ MIM !", artist: "Papillon", id: "6ut5BKjh7xXqQs7AFFSZV2?si=09feb66eb72f4511" },
            { name: "¡ SOMOS !", artist: "Papillon", id: "6Yk2qc22BZudFFwPFG9iD9?si=479b26698c234df6" },
            { name: "¡ REVIVER !", artist: "Papillon", id: "4JejDx2toflH1rnUb1D1fn?si=1f09c137683e4668" }
        ]
    },
    'random': {
        title: "Random Music - Vibe",
        tracks: [
            { name: "Big Stunna", artist: "Khantrast", id: "1DQ6LKCxLznQyjMv0jb90J?si=ef98f64ba0114a8d" },
            { name: "BitterSweet", artist: "Tokyo Project, Brad Arthur", id: "3Sf0lfSipHUBlso2wmyfg5?si=1c0a8bdfdf654802" },
            { name: "Bleach (Hueco Mundo) - UK Drill", artist: "Pureojuice", id: "2PbC8MmMFnel7JC9eQtXRm?si=127eeac22cbb4cbe" },
            { name: "CALA BOCA PXTA", artist: "2KE", id: "6f1quGoa3yMxvvhBWg5LF3?si=ad49d8a64a034b5f" },
            { name: "Can't Stop", artist: "Red Hot Chili Peppers", id: "3ZOEytgrvLwQaqXreDs2Jx?si=a3ac819c095444e2" },
            { name: "CloudWalker", artist: "Sxin", id: "2ZqYMtlQzVyz8RkRHIrynM?si=50a6e7bd5a66407a" },
            { name: "Come Through", artist: "Dutty Moonshine Big Band", id: "7hcCYMF71AX8bofmZYUWwI?si=3e1c31501d874059" },
            { name: "Dare U", artist: "NLE Choppa, Imagine Dragons", id: "02FqPcKOjgOBbZRYdpAIhS?si=12f2b8a77b4c4ac2" },
            { name: "El malo(versión reggae)", artist: "Santax", id: "4Fff5ShB1XhZqbdQ5brSGF?si=4c2b2e0df3694314" },
            { name: "Feel Good Inc.", artist: "Gorillaz", id: "0d28khcov6AiegSCpG5TuT?si=7c3082e56cd64b24" },
            { name: "Flow de Trem #4: Segunda-Feira", artist: "Mano Hick", id: "1k60YDKjPULNUIiZIV1zxT?si=49b56dd6323a4ded" },
            { name: "High on my Lows", artist: "Sawyer Hill", id: "3TCADnvaBftMuVZMxMNJV3?si=cf1c04542cb94fa6" },
            { name: "INDIFFERENT", artist: "Le Grand", id: "6fH7mPjZvaiWmY16zDtanq?si=54fac554dc454a76" },
            { name: "Je te dis okay", artist: "Aestus", id: "3x5XKYKMYOoCH1HP4E9ROa?si=cef346ac76c84810" },
            { name: "Lumiére", artist: "Lorien Testard, Alice Duport-Percier", id: "1A1XuDIYZxSKrQ6mzkWwAT?si=724aab084fda4901" },
            { name: "Real As Ever", artist: "Jack Harris", id: "42WXfL2XJ5rHPC1q5puHDY?si=1478deb9b30b4ac7" },
            { name: "Rock & Roll", artist: "Oliver Malcolm", id: "3QBbAUawQOZ2EHrb3EiP6z?si=342b6c7d9f8e4c61" },
            { name: "RUTABAGA PIE!", artist: "MT. MERVILLE", id: "10KCr3YbLlaVjYMpjMDbbL?si=b4417e5708184e72" },
            { name: "Season of Pride", artist: "Yxng Davi", id: "0ZuCqL2j0UvyfP1gtudYEc?si=e55ced73bcd54a88" },
            { name: "Thrillin", artist: "Connor Price, Lex Bratcher", id: "5kjy2q66G8V1iRaO8sMK11?si=fbe21ec7404e48f6" },
            { name: "VEM NO PIQUE", artist: "MGD, Hwungii, Itamar Mc", id: "3GbduPQThq9KIJ9Ql3JEaR?si=fe661bdbc03440eb" },
            { name: "Vidro", artist: "Chippie", id: "11VTA26EkdDRKczZdtZpzD?si=f91bbdc11fea421a" },
            { name: "WISH BAD THINGS", artist: "WHO SHOT SCOTT", id: "4KX8E0ljPiaMgz9MP9TdwY?si=a41123b4d1c34622" }
        ]
    }
};

function showTracks(albumKey) {
    const layout = document.querySelector('.music-layout');
    const container = document.getElementById('tracklist-container');
    const ul = document.getElementById('tracks-ul');
    const data = albumData[albumKey];

    // 1. Reorganiza a grid
    layout.classList.add('panel-open');

    // 2. Prepara e mostra o painel
    container.style.display = 'flex';
    setTimeout(() => {
        container.classList.add('active');
    }, 10);

    document.getElementById('album-title').innerText = data.title;

    // 3. Renderiza a lista (Ordenada de A-Z como pediste)
    const sortedTracks = data.tracks.sort((a, b) => a.name.localeCompare(b.name));

    ul.innerHTML = sortedTracks.map(t => `
        <li onclick="playSpotify('${t.id}')" style="cursor:pointer">
            <div class="track-info">
                <span style="color:#fff; font-size:14px">▶ ${t.name}</span>
                <span style="color:rgba(255,255,255,0.4); font-size:11px; margin-left:18px">${t.artist || ''}</span>
            </div>
        </li>
    `).join('');
}

function playSpotify(id) {
    const playerContainer = document.getElementById('spotify-player-container');
    playerContainer.innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
        width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    playerContainer.classList.add('active');
}
function closeTracks() {
    const layout = document.querySelector('.music-layout');
    const container = document.getElementById('tracklist-container');

    container.classList.remove('active');
    layout.classList.remove('panel-open');

    // Espera a animação de fade acabar (300ms) para remover o espaço de vez
    setTimeout(() => {
        container.style.display = 'none';
    }, 300);

    document.getElementById('spotify-player-container').innerHTML = '';
}


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>> KAGUNE RINKAKU BACKGROUND (TOKYO GHOUL) >>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let segments = [];
const numSegments = 45; // Mais segmentos para parecer mais fluida
const segmentDist = 8;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < numSegments; i++) {
    segments.push({ x: mouse.x, y: mouse.y, angle: 0, pulse: i * 0.2 });
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function updateSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adiciona um leve rasto (opcional, para look cinemático)
    // ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    let targetX = mouse.x;
    let targetY = mouse.y;

    segments.forEach((seg, i) => {
        // Movimento com "atraso" orgânico
        const dx = targetX - seg.x;
        const dy = targetY - seg.y;
        seg.angle = Math.atan2(dy, dx);

        // Efeito de pulsação biológica
        seg.pulse += 0.05;
        const wave = Math.sin(seg.pulse) * 2;

        seg.x = targetX - Math.cos(seg.angle) * segmentDist;
        seg.y = targetY - Math.sin(seg.angle) * segmentDist;

        drawKaguneSegment(seg.x, seg.y, seg.angle, i, wave);

        targetX = seg.x;
        targetY = seg.y;
    });
    requestAnimationFrame(updateSnake);
}

function drawKaguneSegment(x, y, angle, index, wave) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    const alpha = 1 - (index / numSegments);
    const size = (22 - (index * 0.4)) + wave; // Engrossa perto da cabeça

    // --- Brilho Externo (Glow) ---
    ctx.shadowBlur = 20;
    ctx.shadowColor = `rgba(255, 0, 0, ${alpha * 0.7})`;

    // --- Desenho das "Patas/Espinhos" (Kagune spikes) ---
    if (index % 3 === 0 && index > 4) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 0, 0, ${alpha})`;
        ctx.lineWidth = 3;
        // Espinhos curvos para trás
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-15, -size * 2, -40, -size);
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-15, size * 2, -40, size);
        ctx.stroke();
    }

    // --- Corpo Principal (Vértebras de Carne) ---
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    grad.addColorStop(0, `rgba(0, 0, 0, ${alpha})`);       // PRETO ABSOLUTO no centro
    grad.addColorStop(0.5, `rgba(20, 0, 0, ${alpha})`);    // Transição muito escura
    grad.addColorStop(1, `rgba(150, 0, 0, ${alpha})`);     // Bordas vermelhas para dar volume
    ctx.beginPath();
    ctx.fillStyle = grad;
    // Forma de losango arredondado para parecer vértebras
    ctx.moveTo(-size, 0);
    ctx.lineTo(0, -size / 1.5);
    ctx.lineTo(size, 0);
    ctx.lineTo(0, size / 1.5);
    ctx.closePath();
    ctx.fill();

    // Detalhe de "veias" ou brilho interno
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.2})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(-size / 4, -size / 4, size / 2, size / 2);

    ctx.restore();
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

updateSnake();

function revealArsenal() {
    const btn = document.getElementById('arsenal-trigger');
    const grid = document.getElementById('languages-grid');

    // Esconde o botão com um efeito de fade/scale
    btn.style.opacity = '0';
    btn.style.transform = 'scale(0.8)';

    setTimeout(() => {
        btn.style.display = 'none';
        // Mostra os quadrados
        grid.classList.add('active');
    }, 400);
}
/* ==========================================================================
   HAMBURGER MENU (mobile)
   ========================================================================== */
(function () {
    const btn = document.getElementById('hamburger');
    const nav = document.querySelector('.nav-menu');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
        btn.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer when a link is tapped
    nav.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            btn.classList.remove('open');
        });
    });

    // Close on outside tap
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !btn.contains(e.target)) {
            nav.classList.remove('open');
            btn.classList.remove('open');
        }
    });
})();

/* ==========================================================================
   TILT CARDS — single shared tooltip appended to <body> to avoid transform offsets
   ========================================================================== */
const _tooltip = document.createElement('div');
_tooltip.className = 'tilted-card-caption';
_tooltip.style.display = 'none';
document.body.appendChild(_tooltip);

function handleTilt(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;
    el.querySelector('.tilted-card-inner').style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    _tooltip.textContent = el.dataset.caption || '';
    _tooltip.style.display = 'block';

    // Keep tooltip inside viewport
    const tx = Math.min(e.clientX + 14, window.innerWidth - _tooltip.offsetWidth - 10);
    const ty = Math.min(e.clientY + 14, window.innerHeight - _tooltip.offsetHeight - 10);
    _tooltip.style.left = tx + 'px';
    _tooltip.style.top  = ty + 'px';
}

function resetTilt(el) {
    el.querySelector('.tilted-card-inner').style.transform = '';
    _tooltip.style.display = 'none';
}