
const game = document.querySelector('.jogo')
const palpite = document.querySelector('#number')
const button = document.querySelector('.btn')
const resultDiv = document.querySelector('#result')

let numero = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
const maxTentativas = 3;


function adivinhar(){
    const tentaiva = parseInt(palpite.velue, 10)

    if(isNaN(tentaiva) || tentaiva < 1 tentaiva > 10){

        resultDiv.textContent = "insira um numero valido";
        return;
    }

    tentaivas++;

    if(tentaiva === numero){
         resultDiv.textContent = "parabéns vc aceretou"
    }
    else if(tentaivas >= maxTentativas){
        resultDiv.textContent =  `voçe perdeu! ${numero}.`
        resetgame()
    }
    else{
        resultDiv.textContent = `errado! voçe tem ${maxTentativas - tentaivas}.`
    }


}

tfunction resetGame() {
    numero = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
}

button.addEventListener('click', adivinhar);

