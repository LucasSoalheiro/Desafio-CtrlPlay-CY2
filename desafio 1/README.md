# 🔍 Desafio 1: Cadastro de Alunos

## 📋 Sobre o Projeto
Você recebeu a tarefa de inspecionar e consertar a página de **Cadastro de Alunos**. O objetivo desta página é permitir que o usuário informe seu nome completo e e-mail para se cadastrar, recebendo uma mensagem de validação ou de sucesso na tela.

---

## 🎯 Comportamento Esperado
- A página deve ser apresentada com um visual estilizado, limpo e centralizado.
- Ao clicar no botão **Cadastrar**:
  - Se algum campo estiver em branco, deve exibir um aviso solicitando o preenchimento.
  - Se os campos estiverem preenchidos, deve exibir uma mensagem confirmando o cadastro do aluno.

---

## ⚠️ Problemas Relatados
Ao testar a página, foram identificados os seguintes comportamentos inesperados:

1. **Falha visual:** O layout planejado não está sendo carregado. A página aparece totalmente sem formatação visual e desconfigurada.
2. **Formulário travado:** Ao preencher os campos e clicar no botão para cadastrar, nada acontece e nenhuma mensagem é exibida na tela.
3. **Erro no Console:** Ao abrir as ferramentas de desenvolvedor do navegador (`F12` > aba **Console**), há um erro crítico sendo acusado logo no carregamento da página.

---

## 🕵️‍♂️ Sua Missão
Investigue os arquivos do projeto (`index.html`, `style.css` e `script.js`), descubra a causa dos problemas relatados e faça a aplicação funcionar perfeitamente!

### 💡 Dicas de Investigação:
- Comece abrindo o **Console do Navegador (F12)** para ver qual erro está interrompendo o JavaScript.
- Verifique se a página HTML está conseguindo conversar corretamente com os arquivos externos.
- Analise com atenção a digitação dos seletores, classes e identificadores entre o HTML, o CSS e o JavaScript.
- Observe como os botões e formulários se comunicam entre si na web.
