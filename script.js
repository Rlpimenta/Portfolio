function atualizarDataHora() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-PT");
    const hora = agora.toLocaleTimeString("pt-PT");

    document.getElementById("data").textContent = data;
    document.getElementById("hora").textContent = hora;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);


const atalhos = document.querySelectorAll(".atalho");

atalhos.forEach(function (atalho) {
    atalho.addEventListener("mouseenter", function () {
        const mensagem = atalho.querySelector("small");
        mensagem.classList.add("visivel");
    });

    atalho.addEventListener("mouseleave", function () {
        const mensagem = atalho.querySelector("small");
        mensagem.classList.remove("visivel");
    });
});

// Função para exibir o aviso de construção
const aviso = document.querySelector("#aviso-construcao");
document.querySelector("#aviso-construcao")
setTimeout(function () {
    aviso.classList.add("esconder");
}, 5000);