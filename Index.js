<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiago Sampaio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="Index.css">
</head>

<body>
    <canvas id="snakeCanvas"></canvas>

    <!-- Hamburger (mobile nav trigger) -->
    <button class="hamburger" id="hamburger" aria-label="Abrir menu">
        <span></span><span></span><span></span>
    </button>

    <header class="header">
        <div class="header-container container">
            <nav class="nav-top">
                <div class="language">
                    <div class="lang-switcher">
                        <button class="lang-btn pt" data-lang="pt">PT</button>
                        <span class="pipe">|</span>
                        <button class="lang-btn en active" data-lang="en">EN</button>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <nav class="nav-menu">
    <ul class="list">
        <li><a href="#s" class="link lang" data-lang-en="My Journey" data-lang-pt="Minha Jornada">My Journey</a></li>
        <li><a href="#music-section" class="link lang" data-lang-en="Soundscapes & Inspiration" data-lang-pt="Sonoridades & Inspiração">Soundscapes & Inspiration</a></li>
        <li><a href="CodeVibes.html" class="link lang" data-lang-en="Tech Stack & Skills" data-lang-pt="Tecnologias e habilidades">Tech Stack & Skills</a></li>
        <li><a href="Game.html" class="link lang" data-lang-en="Virtual Worlds" data-lang-pt="Mundos Virtuais">Virtual Worlds</a></li>
    </ul>
</nav>

    <section class="profile-section">
        <div class="center-top">
            <div class="center">
                <img src="./img/Me.png" alt="Tiago Sampaio">
            </div>
            <h1>Tiago Sampaio</h1>
            <h2 class="software-rank lang" data-lang-en="Computer Engineering" data-lang-pt="Engenharia Informática">Computer Engineering</h2>
        </div>
    </section>

    <main class="main-content">
        <section id="s">
            <h3 class="lang" data-lang-en="My Journey" data-lang-pt="Minha Jornada">My Journey</h3>
            <div class="text-block">
                <p class="lang"
                   data-lang-en="I'm a Software Engineering student at UTAD, passionate about building digital solutions and exploring new technologies. I'm driven by curiosity — whether it's debugging at 2am, crafting a mechanic in a game, or diving into a new language just to see how it thinks."
                   data-lang-pt="Sou estudante de Engenharia Informática na UTAD, apaixonado por criar soluções digitais e explorar novas tecnologias. Sou movido pela curiosidade — seja a depurar código às 2 da manhã, criar uma mecânica num jogo, ou mergulhar numa nova linguagem só para ver como ela pensa.">
                    I'm a Software Engineering student at UTAD, passionate about building digital solutions and exploring new technologies. I'm driven by curiosity — whether it's debugging at 2am, crafting a mechanic in a game, or diving into a new language just to see how it thinks.
                </p>
            </div>

            <!-- Stats rápidas -->
            <div class="journey-stats">
                <div class="journey-stat">
                    <span class="jstat-value">5+</span>
                    <span class="jstat-label lang" data-lang-en="Languages" data-lang-pt="Linguagens">Languages</span>
                </div>
                <div class="journey-stat">
                    <span class="jstat-value">6</span>
                    <span class="jstat-label lang" data-lang-en="Games 100%'d" data-lang-pt="Jogos 100%">Games 100%'d</span>
                </div>
                <div class="journey-stat">
                    <span class="jstat-value">∞</span>
                    <span class="jstat-label lang" data-lang-en="Hours in Minecraft" data-lang-pt="Horas no Minecraft">Hours in Minecraft</span>
                </div>
                <div class="journey-stat">
                    <span class="jstat-value">1</span>
                    <span class="jstat-label lang" data-lang-en="Kagune (active)" data-lang-pt="Kagune (ativo)">Kagune (active)</span>
                </div>
            </div>

            <!-- Mini timeline -->
            <div class="mini-timeline">
                <div class="mt-item">
                    <span class="mt-year">2014</span>
                    <div class="mt-dot"></div>
                    <span class="mt-text lang" data-lang-en="First lines of code" data-lang-pt="Primeiras linhas de código">First lines of code</span>
                </div>
                <div class="mt-item">
                    <span class="mt-year">2018</span>
                    <div class="mt-dot"></div>
                    <span class="mt-text lang" data-lang-en="Fell deep into Minecraft" data-lang-pt="Mergulhou fundo no Minecraft">Fell deep into Minecraft</span>
                </div>
                <div class="mt-item">
                    <span class="mt-year">2022</span>
                    <div class="mt-dot"></div>
                    <span class="mt-text lang" data-lang-en="Started Computer Engineering @ UTAD" data-lang-pt="Começou Eng. Informática na UTAD">Started Computer Engineering @ UTAD</span>
                </div>
                <div class="mt-item">
                    <span class="mt-year">Now</span>
                    <div class="mt-dot active"></div>
                    <span class="mt-text lang" data-lang-en="Building, exploring, levelling up" data-lang-pt="A construir, explorar e evoluir">Building, exploring, levelling up</span>
                </div>
            </div>
        </section>

        <section id="music-section">
            <h3 class="lang" data-lang-en="Soundscapes & Inspiration" data-lang-pt="Sonoridades & Inspiração">Soundscapes & Inspiration</h3>

            <div class="music-layout">
                <div class="music-grid">
                    <div class="tilted-card-figure" onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)" onclick="showTracks('ren')" data-caption="Ren - Sick Boi">
                        <div class="tilted-card-inner">
                            <img src="./img/Ren.jpg" class="tilted-card-img">
                        </div>
                    </div>

                    <div class="tilted-card-figure" onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)" onclick="showTracks('top')" data-caption="Twenty One Pilots - Blurryface">
                        <div class="tilted-card-inner">
                            <img src="./img/TOP.png" class="tilted-card-img">
                        </div>
                    </div>

                    <div class="tilted-card-figure" onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)" onclick="showTracks('papillon')" data-caption="Papillon - Wonder">
                        <div class="tilted-card-inner">
                            <img src="./img/Papi.jpg" class="tilted-card-img">
                        </div>
                    </div>

                    <div class="tilted-card-figure" onmousemove="handleTilt(event, this)" onmouseleave="resetTilt(this)" onclick="showTracks('random')" data-caption="Random Music - Vibe">
                        <div class="tilted-card-inner">
                            <img src="./img/RandomMusic.png" class="tilted-card-img">
                        </div>
                    </div>

                </div>

                <div id="tracklist-container" class="tracklist-panel">
                    <div class="tracklist-header">
                        <span id="album-title"></span>
                        <button onclick="closeTracks()" class="close-btn">&times;</button>
                    </div>

                    <ul id="tracks-ul"></ul>

                    <div id="spotify-player-container" class="spotify-mini-player">
                    </div>
                </div>
            </div>

        <section id="v">
            <h3 class="lang" data-lang-en="Tech Stack & Skills" data-lang-pt="Tecnologias e habilidades">Tech Stack & Skills</h3>
            <div class="arsenal-container">

                <div class="arsenal-wrapper">

                    <div class="skill-item left-far" data-lang="C">
                        <span>
                            <svg class="skill-logo" viewBox="0 0 128 128" width="36" height="36">
                                <path fill="#03599C" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
                                <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
                                <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
                            </svg>
                            C
                        </span>
                    </div>
                    <div class="skill-item left-near" data-lang="C++">
                        <span>
                            <svg class="skill-logo" viewBox="0 0 128 128" width="36" height="36">
                                <path fill="#004482" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
                                <path fill="#004482" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
                                <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2h2.8v-4.6H97v-2.8h-4.6v2.8h-2.8v4.6h2.8v2.8H97zm13.6 0h2.8v-4.6h-2.8v-2.8H106v2.8h-2.8v4.6H106v2.8h4.6z"/>
                            </svg>
                            C++
                        </span>
                    </div>

                    <div class="skill-item center-item" data-lang="Python">
                        <span>
                            <svg class="skill-logo" viewBox="0 0 128 128" width="36" height="36">
                                <path fill="#FFD43B" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
                                <path fill="#3572A5" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
                            </svg>
                            Python
                        </span>
                    </div>

                    <div class="skill-item right-near" data-lang="Java">
                        <span>
                            <svg class="skill-logo" viewBox="0 0 128 128" width="36" height="36">
                                <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/>
                                <path fill="#EA2D2E" d="M44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
                                <path fill="#EA2D2E" d="M74.072 50.435v24.569s4.548-4.762 2.854-9.948c-1.842-5.528-6.62-8.359-2.854-14.621z"/>
                                <path fill="#5382A1" d="M89.413 110.44s3.523 2.901-3.877 5.146c-14.071 4.259-58.557 5.543-70.898.169-4.441-1.931 3.885-4.607 6.503-5.169 2.728-.587 4.286-.479 4.286-.479-4.936-3.477-31.917 6.825-13.702 9.768 49.687 8.069 90.59-3.627 77.688-9.435z"/>
                                <path fill="#5382A1" d="M49.613 37.172s-22.558 5.357-7.998 7.3c6.151.808 18.384.624 29.807-.321 9.327-.772 18.694-2.418 18.694-2.418s-3.287 1.409-5.671 3.034c-22.883 6.014-67.064 3.215-54.337-2.942 10.791-5.24 19.505-4.653 19.505-4.653z"/>
                                <path fill="#5382A1" d="M81.118 94.515c23.275-12.099 12.523-23.73 5.005-22.168-1.745.362-2.52.676-2.52.676s.647-1.013 1.88-1.45c14.042-4.938 24.836 14.551-4.8 22.267-.001-.001.36-.32.435-.325z"/>
                                <path fill="#EA2D2E" d="M76.491 1.587s12.894 12.9-12.228 32.752c-20.168 15.926-4.6 25.003-.007 35.39-11.773-10.628-20.405-19.981-14.61-28.69 8.504-12.758 32.047-18.957 26.845-39.452z"/>
                                <path fill="#5382A1" d="M52.214 126.021c22.339 1.43 56.631-.794 57.439-11.382 0 0-1.562 4.007-18.463 7.179-19.076 3.579-42.604 3.163-56.565.87 0 0 2.854 2.353 17.589 3.333z"/>
                            </svg>
                            Java
                        </span>
                    </div>
                    <div class="skill-item right-far" data-lang="JS">
                        <span>
                            <svg class="skill-logo" viewBox="0 0 128 128" width="36" height="36">
                                <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/>
                                <path fill="#000" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.893h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.449-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.279z"/>
                            </svg>
                            JS
                        </span>
                    </div>

                    <div class="reveal-btn">
                        <span>ARSENAL</span>
                    </div>

                </div>
            </div>
         </section>

        <section id="a">
            <div class="section-header-row">
                <h3 class="lang" data-lang-en="Virtual Worlds" data-lang-pt="Mundos Virtuais">Virtual Worlds</h3>
                <a href="Game.html" class="section-more-btn lang" data-lang-en="Open Full Library →" data-lang-pt="Ver Todos →">Open Full Library →</a>
            </div>

            <!-- Teaser de jogos: cards com flip e info -->
            <div class="games-teaser-grid-v2">

                <div class="game-card-v2" data-genre="Sandbox">
                    <div class="gcv2-inner">
                        <div class="gcv2-front" style="background-image: url('./img/MineL.jpg')">
                            <div class="gcv2-gradient"></div>
                            <div class="gcv2-info">
                                <span class="gcv2-genre">Sandbox</span>
                                <span class="gcv2-title">Minecraft</span>
                            </div>
                        </div>
                        <div class="gcv2-back">
                            <span class="gcv2-studio">MOJANG STUDIOS</span>
                            <span class="gcv2-name">Minecraft</span>
                            <div class="gcv2-stat-row">
                                <span class="gcv2-badge platinum">🏆 Platinum</span>
                                <span class="gcv2-hours lang" data-lang-en="+10 Years" data-lang-pt="+10 Anos">+10 Years</span>
                            </div>
                            <p class="gcv2-desc lang"
                               data-lang-en="The sandbox that started everything."
                               data-lang-pt="O sandbox que começou tudo.">The sandbox that started everything.</p>
                        </div>
                    </div>
                </div>

                <div class="game-card-v2" data-genre="Horror">
                    <div class="gcv2-inner">
                        <div class="gcv2-front" style="background-image: url('./img/TOTLogo.jpg')">
                            <div class="gcv2-gradient"></div>
                            <div class="gcv2-info">
                                <span class="gcv2-genre">Horror</span>
                                <span class="gcv2-title">The Outlast Trials</span>
                            </div>
                        </div>
                        <div class="gcv2-back">
                            <span class="gcv2-studio">RED BARRELS</span>
                            <span class="gcv2-name">The Outlast Trials</span>
                            <div class="gcv2-stat-row">
                                <span class="gcv2-badge gold">🏆 27/27</span>
                                <span class="gcv2-hours">148 Trials</span>
                            </div>
                            <p class="gcv2-desc lang"
                               data-lang-en="Co-op horror. Program X. Grade A+."
                               data-lang-pt="Horror co-op. Programa X. Nota A+.">Co-op horror. Program X. Grade A+.</p>
                        </div>
                    </div>
                </div>

                <div class="game-card-v2" data-genre="Narrative">
                    <div class="gcv2-inner">
                        <div class="gcv2-front" style="background-image: url('./img/DLogo.jpg')">
                            <div class="gcv2-gradient"></div>
                            <div class="gcv2-info">
                                <span class="gcv2-genre">Narrative</span>
                                <span class="gcv2-title">Death's Door</span>
                            </div>
                        </div>
                        <div class="gcv2-back">
                            <span class="gcv2-studio">ACID NERVE</span>
                            <span class="gcv2-name">Death's Door</span>
                            <div class="gcv2-stat-row">
                                <span class="gcv2-badge gold">🏆 24/24</span>
                                <span class="gcv2-hours lang" data-lang-en="True Ending" data-lang-pt="Final Verdadeiro">True Ending</span>
                            </div>
                            <p class="gcv2-desc lang"
                               data-lang-en="A crow, a sword, and a dark surreal world."
                               data-lang-pt="Um corvo, uma espada e um mundo sombrio e surreal.">A crow, a sword, and a dark surreal world.</p>
                        </div>
                    </div>
                </div>

                <!-- Card "Ver Todos" -->
                <a href="Game.html" class="gcv2-view-all">
                    <div class="gcv2-all-inner">
                        <i class="fas fa-gamepad gcv2-icon"></i>
                        <span class="gcv2-all-count">+3 <span class="lang" data-lang-en="more" data-lang-pt="mais">more</span></span>
                        <span class="gcv2-all-label lang" data-lang-en="Full Library" data-lang-pt="Ver Todos">Full Library</span>
                    </div>
                </a>

            </div>
        </section>
    </main>

    <footer>
        <ul class="social-links">
            <li>
                <a href="https://www.facebook.com/profile.php?id=100024515922467" target="_blank">
                    <img src="img/Facebook.png" alt="Facebook">
                    <p>Facebook</p>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/tiago_sampaiot7/" target="_blank">
                    <img src="img/Instagram.png" alt="Instagram">
                    <p>Instagram</p>
                </a>
            </li>
            <li>
                <a href="https://steamcommunity.com/profiles/76561198993852286/" target="_blank">
                    <img src="img/Steam.png" alt="Steam">
                    <p>Steam</p>
                </a>
            </li>
            <li>
                <a href="https://github.com/TiagoSampaio-UTAD" target="_blank">
                    <img src="img/git.webp" alt="Github">
                    <p>Github</p>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/tiago-sampaiot7/" target="_blank">
                    <img src="img/linkedin.png" alt="LinkedIn">
                    <p>LinkedIn</p>
                </a>
            </li>
        </ul>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="Index.js"></script>
</body>
</html>﻿// --- TRADUÇÃO ---
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
