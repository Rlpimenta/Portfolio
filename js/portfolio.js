function configurarCarrossel() {
    const faixa = document.querySelector(".projetos-grid");
    const botaoAnterior = document.querySelector(".projeto-anterior");
    const botaoProximo = document.querySelector(".projeto-proximo");
    const carrossel = faixa?.closest(".projetos-carrossel");
    if (!faixa || !botaoAnterior || !botaoProximo || !carrossel) return;

    carrossel.classList.add("carrossel-ativo");
    const originais = [...faixa.querySelectorAll(".projeto-card")];
    if (originais.length < 2) return;

    const clone = document.createDocumentFragment();
    originais.forEach((cartao) => {
        const copia = cartao.cloneNode(true);
        copia.setAttribute("aria-hidden", "true");
        copia.querySelectorAll("a, button, input, [tabindex]").forEach((item) => item.setAttribute("tabindex", "-1"));
        clone.appendChild(copia);
    });
    faixa.appendChild(clone);

    let pausado = false;
    let direcao = 1;
    let ultimoTempo = 0;
    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");

    function larguraOriginal() {
        const primeiroClone = faixa.children[originais.length];
        return primeiroClone ? primeiroClone.offsetLeft - faixa.children[0].offsetLeft : 0;
    }

    function atualizarBotoes() {
        const limite = larguraOriginal();
        botaoAnterior.hidden = limite <= faixa.clientWidth;
        botaoProximo.hidden = limite <= faixa.clientWidth;
    }

    function animar(tempo) {
        if (!ultimoTempo) ultimoTempo = tempo;
        const delta = Math.min(tempo - ultimoTempo, 40);
        ultimoTempo = tempo;
        const limite = larguraOriginal();
        if (!pausado && !document.hidden && !movimentoReduzido.matches && limite > 0) {
            faixa.scrollLeft += delta * 0.045 * direcao;
            if (faixa.scrollLeft >= limite) faixa.scrollLeft -= limite;
            if (faixa.scrollLeft < 0) faixa.scrollLeft += limite;
        }
        atualizarBotoes();
        window.requestAnimationFrame(animar);
    }

    carrossel.addEventListener("pointerenter", () => { pausado = true; });
    carrossel.addEventListener("pointerleave", () => { pausado = false; });
    carrossel.addEventListener("pointerdown", () => { pausado = true; });
    carrossel.addEventListener("pointerup", () => {
        window.setTimeout(() => { if (!carrossel.matches(":hover")) pausado = false; }, 900);
    });
    carrossel.addEventListener("focusin", () => { pausado = true; });
    carrossel.addEventListener("focusout", (evento) => {
        if (!carrossel.contains(evento.relatedTarget)) pausado = false;
    });
    botaoAnterior.addEventListener("click", () => faixa.scrollBy({ left: -faixa.clientWidth * 0.8, behavior: "smooth" }));
    botaoProximo.addEventListener("click", () => faixa.scrollBy({ left: faixa.clientWidth * 0.8, behavior: "smooth" }));
    faixa.addEventListener("scroll", atualizarBotoes, { passive: true });
    window.addEventListener("resize", atualizarBotoes);
    movimentoReduzido.addEventListener?.("change", atualizarBotoes);
    atualizarBotoes();
    window.requestAnimationFrame(animar);
}

function configurarTransicoes() {
    const mensagem = document.querySelector(".nav-toast");
    if (!mensagem) return;
    const nomes = { sobre: "Sobre mim", experiencia: "Experiência profissional", projetos: "Projetos", competencias: "Competências", contactos: "Contactos" };
    let temporizador;

    function mostrar(id) {
        const secao = document.getElementById(id);
        if (!secao || !nomes[id]) return;
        mensagem.textContent = `A abrir ${nomes[id]}…`;
        mensagem.classList.add("is-visible");
        secao.classList.remove("section-arrive");
        void secao.offsetWidth;
        secao.classList.add("section-arrive");
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(() => mensagem.classList.remove("is-visible"), 1100);
    }

    document.querySelectorAll('.site-header nav a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => mostrar(link.hash.slice(1)));
    });
    const hash = window.location.hash.slice(1);
    if (hash) window.setTimeout(() => mostrar(hash), 120);
}

configurarCarrossel();
configurarTransicoes();

function configurarExperiencias() {
    document.querySelectorAll(".experience-toggle").forEach((botao) => {
        botao.addEventListener("click", () => {
            const resumo = document.getElementById(botao.getAttribute("aria-controls"));
            const cartao = botao.closest(".timeline article");
            if (!resumo || !cartao) return;

            const expandido = botao.getAttribute("aria-expanded") === "true";
            botao.setAttribute("aria-expanded", String(!expandido));
            resumo.hidden = expandido;
            cartao.classList.toggle("is-expanded", !expandido);
            botao.querySelector("span").textContent = expandido ? "Ver resumo" : "Fechar resumo";
        });
    });
}

configurarExperiencias();
