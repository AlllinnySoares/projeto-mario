/* 
Objetivo 1 - quando o usuario clicar no modal de veja o trailer, devemos abrir a modal vom o video trailer.
- passo 1 dar um jeto de pegar o elemento que representa o botão na tela usando js

- passo 2 - dar um jeito de identificar quando o usuario clicar no botão
passo 3 - dar um jeito de pegar o elemento da moda no js
passo 4 - abrir a modala na tela

obejetivo 2  - quando o uruario clicar no x devemos fechar a modal
*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal  = document.querySelector(".fechar-modal");
const video  = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener('click',() => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");

});






