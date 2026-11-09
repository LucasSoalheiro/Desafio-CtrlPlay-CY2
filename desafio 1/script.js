const formulario = document.querySelector("#cadastroForm");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nome.value === "" || email.value === "") {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    mensagem.textContent = "Aluno cadastrado com sucesso!";
});