
const botaoMensagem = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

const botaoEnviar = document.getElementById("botaoEnviar");
const campoNome = document.getElementById("nome");
const resultado = document.getElementById("resultado");


botaoMensagem.addEventListener("click", function() {

    mensagem.textContent =
        "Parabéns! Você acabou de realizar sua primeira interação com JavaScript!";

});


botaoEnviar.addEventListener("click", function() {

    const nome = campoNome.value.trim();

    if (nome === "") {

        resultado.textContent =
            "Por favor, digite seu nome!";

        resultado.style.color = "red";

    } else {

        resultado.textContent =
            "Olá, " + nome + "! Seja bem-vindo ao meu site!";

        resultado.style.color = "green";

    }

});