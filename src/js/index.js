//- passo 1 - dar um jeito de pegar o elemento html da seta avancar

const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

//- passo 2 dar um jeito de identificar o clique do usuario na seta avancar

btnAvancar.addEventListener("click", function () {


    if (cartaoAtual === cartoes.length - 1) return;



    //- passo 4- buscar o cartao que esta selecionado e esconder

    esconderCartaoSelecionado();

    //- passo 3- fazer aparecer o proximo cartao da lista, colocando a classe selecionado nele

    cartaoAtual++;

    mostrarCartao();

    //- passo 4- buscar o cartao que esta selecionado e esconder



});








//- passo 2 dar um jeito de identificar o clique do usuario na seta voltarr

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) return;


    esconderCartaoSelecionado();





    cartaoAtual--;

    cartoes[cartaoAtual].classList.add("selecionado");

});











function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

