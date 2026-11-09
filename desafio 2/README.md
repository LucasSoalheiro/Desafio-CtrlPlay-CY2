# 🔍 Desafio 2: Minhas Tarefas (To-Do List)

## 📋 Sobre o Projeto
Você foi escalado para dar manutenção no aplicativo **Minhas Tarefas**. Trata-se de uma lista interativa onde o usuário pode organizar seus afazeres do dia a dia, marcar itens como feitos, remover tarefas e acompanhar a contagem total de itens pendentes.

---

## 🎯 Comportamento Esperado
- Ao digitar uma tarefa e clicar no botão **Adicionar**, o novo item deve surgir na lista.
- Cada item na lista possui opções para:
  - **Concluir:** alternar o estado da tarefa (marcando-a visualmente como feita).
  - **Excluir:** remover a tarefa da lista.
- O texto do contador (`Tarefas: X`) deve exibir em tempo real a quantidade exata de tarefas cadastradas.

---

## ⚠️ Problemas Relatados
Ao colocar o aplicativo em teste, os seguintes problemas foram observados:

1. **Botão inoperante:** Ao digitar um texto no campo e clicar no botão **Adicionar**, nada acontece na tela e nenhuma tarefa é incluída na lista.
2. **Erro no Console:** O navegador está registrando um erro vermelho na aba **Console (F12)** que impede o funcionamento do script.
3. **Contador incoerente:** Usuários que tentaram utilizar o aplicativo relataram que a contagem de tarefas está com um comportamento matemático estranho e invertido (números negativos ou resultados sem sentido).

---

## 🕵️‍♂️ Sua Missão
Analise os arquivos do projeto (`index.html`, `style.css` e `script.js`), localize os bugs responsáveis pelas falhas e deixe a lista de tarefas 100% funcional!

### 💡 Dicas de Investigação:
- Dê uma olhada no **Console do Navegador (F12)** para descobrir onde o código está travando.
- Verifique se os elementos que o JavaScript tenta capturar realmente existem no HTML com a mesma grafia.
- Acompanhe o fluxo da variável do contador: o que acontece com esse número quando uma tarefa é criada? E o que acontece quando uma tarefa é removida?
- Teste adicionar uma tarefa vazia ou com apenas espaços em branco para garantir uma boa experiência ao usuário.
