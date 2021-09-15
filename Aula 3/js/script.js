var numeroSecreto = 3;

function Chutar() {
    var chute = parseInt(document.getElementById('valor').value);
    console.log(chute);
    if (numeroSecreto == chute) {
        console.log('Você acertou!');
    } else if (chute > 10 || chute < 0) {
        console.log('Você deve digitar um número de 0 a 10');
    } else {
        console.log('Você errou');
    }
}