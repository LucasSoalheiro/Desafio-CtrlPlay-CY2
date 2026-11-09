let transacoes = [];

const formulario = document.querySelector("#formulario");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const tipo = document.querySelector("#tipo");
const lista = document.querySelector("#movimentacoes");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const novaTransacao = {
        id: Date.now(),
        descricao: descricao.value,
        valor: valor.value,
        tipo: tipo.value
    };

    if (descricao.value === "" || valor.value < 0) {
        alert("Preencha os dados corretamente!");
        return;
    }

    transacoes.push(novaTransacao);

    atualizarTela();

    formulario.reset();

});

function atualizarTela() {

    let receitas = 0;
    let despesas = 0;

    lista.innerHTML = "";

    transacoes.forEach(function (transacao) {

        if (transacao.tipo === "receita") {
            receitas += parseInt(transacao.valor);
        } else {
            despesas += parseInt(transacao.valor);
        }

        const item = document.createElement("li");

        item.innerHTML = `
                <span>
                    ${transacao.descricao} -
                    R$ ${transacao.valor}
                </span>

                <button class="excluir">
                    Excluir
                </button>
            `;

        lista.appendChild(item);

        item.querySelector(".excluir").addEventListener("click", function () {
            transacoes.splice(transacao.id, 1);
            atualizarTela();
        });

    });

    const saldo = despesas - receitas;

    document.querySelector("#totalReceitas").textContent =
        "R$ " + despesas.toFixed(2);

    document.querySelector("#totalDespesas").textContent =
        "R$ " + receitas.toFixed(2);

    document.querySelector("#saldo").textContent =
        "R$ " + saldo.toFixed(2);
}