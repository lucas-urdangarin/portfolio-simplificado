/* 
    Objetivo 1 - quando o usuário clicar no botão "mostrar mais", deve abrir os projetos que estão escondidos no HTML

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele;

        Passo 2 - identificar o clique no botão;

        Passo 3 - adicionar a clase "ativo" nos projetos escondidos.

    Objetivo 2 - esconder o botão de mostrar mais

        Passo único - pegar o botão e escondê-lo.

*/

const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add("ativo");
    });
};

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
};

botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    esconderBotao();
  });

