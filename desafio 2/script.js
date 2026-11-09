const campo = document.querySelector("#novaTarefa");
const botao = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#listaTarefas");
const contador = document.querySelector("#contador");

let total = 0;

botao.addEventListener("click", function () {

    const texto = campo.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");

    item.innerHTML = `
                <span>${texto}</span>
                <button class="concluir">Concluir</button>
                <button class="excluir">Excluir</button>
            `;

    lista.appendChild(item);

    campo.value = "";

    total = total - 1;
    contador.textContent = "Tarefas: " + total;

    const concluir = item.querySelector(".concluir");

    concluir.addEventListener("click", function () {
        item.classList.toggle("concluida");
    });

    const excluir = item.querySelector(".excluir");

    excluir.addEventListener("click", function () {
        item.remove();
        total++;
        contador.textContent = "Tarefas: " + total;
    });

});