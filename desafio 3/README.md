# 🔍 Desafio 3: Controle Financeiro

## 📋 Sobre o Projeto
Você assumiu a missão de debugar o sistema de **Controle Financeiro**. Esta aplicação permite gerenciar receitas e despesas pessoais, visualizando o histórico de transações e um painel com o resumo financeiro atualizado em tempo real.

---

## 🎯 Comportamento Esperado
- O usuário deve conseguir cadastrar uma nova movimentação informando:
  - Descrição da transação;
  - Valor em reais;
  - Tipo da transação (**Receita** ou **Despesa**).
- As movimentações cadastradas devem aparecer na lista logo abaixo do formulário.
- Cada movimentação da lista possui um botão **Excluir** que, ao ser clicado, deve remover aquela transação específica.
- O painel superior deve exibir:
  - **Receitas:** a soma de todas as entradas cadastradas;
  - **Despesas:** a soma de todas as saídas cadastradas;
  - **Saldo:** o valor líquido restante (`Receitas - Despesas`).

---

## ⚠️ Problemas Relatados
Durante a fase de homologação, os usuários relataram vários bugs no sistema:

1. **Botão de Excluir não responde:** Clicar no botão **Excluir** de uma movimentação não surte efeito; o item permanece na tela e continua afetando os totais.
2. **Dados trocados no painel:** Os valores apresentados nos cartões de resumo parecem estar trocados de lugar.
3. **Cálculo de saldo incorreto:** O cálculo do saldo final exibe um resultado financeiro oposto ao esperado (por exemplo, quando há mais receitas que despesas, o saldo é apresentado de forma incoerente).
4. **Cálculos imprecisos:** Ao lançar valores com centavos ou tentar adicionar valores vazios, o sistema apresenta erros de soma ou números estranhos (`NaN`).

---

## 🕵️‍♂️ Sua Missão
Explore o código-fonte de `index.html`, `style.css` e `script.js`. Identifique a causa de cada comportamento incorreto e ajuste o código para que o fluxo financeiro funcione perfeitamente!

### 💡 Dicas de Investigação:
- Teste a aplicação na prática: adicione uma receita e uma despesa e observe com atenção para onde vai cada valor.
- Verifique como as listas e arrays do JavaScript funcionam ao remover elementos. O método utilizado está recebendo o parâmetro correto?
- Analise a fórmula matemática utilizada para calcular o saldo final.
- Observe como os valores numéricos inseridos pelo usuário estão sendo tratados e convertidos no código.
- Valide se o formulário impede cadastros incompletos ou valores sem sentido.
