function atualizarDataHora() {
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-PT");
    const hora = agora.toLocaleTimeString("pt-PT");

    document.getElementById("data").textContent = data;
    document.getElementById("hora").textContent = hora;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);