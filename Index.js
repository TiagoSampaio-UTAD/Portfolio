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