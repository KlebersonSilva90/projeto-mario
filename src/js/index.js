const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function aternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",() =>{
    aternarModal();
    video.setAttribute("src",linkDoVideo);
});

botaoFecharModal.addEventListener ("click", () => {
    aternarModal();
    video.setAttribute("src","");
});