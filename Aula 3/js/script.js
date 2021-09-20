
function Refresh(){
    window.location.reload()
}

var numeroSecreto = parseInt(Math.random() * 11);
var numeroDeTentativas = 4;
console.log(numeroSecreto)


function Chutar() {
    var elementoResultado = document.getElementById('resultado');
    var chute = parseInt(document.getElementById('valor').value);
    var numeroDeTentativasDecrementado = numeroDeTentativas--;
    console.log(numeroDeTentativasDecrementado);
    
    if (numeroDeTentativasDecrementado == -1){
        Refresh(); 

    } else if (numeroSecreto == chute) {
        elementoResultado.innerHTML = 'Você acertou!';

    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = 'Escreva um número de 0 a 10';

    } else if (numeroDeTentativasDecrementado == 0){
        elementoResultado.innerHTML = 'Você errou, o número secreto era: ' + numeroSecreto;

    } else if (numeroDeTentativasDecrementado == 1 && numeroSecreto > chute){
        elementoResultado.innerHTML = 'Tente novamente, você tem mais ' + numeroDeTentativasDecrementado + ' chance' + '<br>O número secreto é maior que seu chute';

    } else if (numeroDeTentativasDecrementado == 1 && numeroSecreto < chute){
        elementoResultado.innerHTML = 'Tente novamente, você tem mais ' + numeroDeTentativasDecrementado + ' chance' + '<br>O número secreto é menor que seu chute';

    } else if (numeroDeTentativasDecrementado <= 4 && numeroSecreto < chute){
        elementoResultado.innerHTML = 'Tente novamente, você tem mais ' + numeroDeTentativasDecrementado + ' chances' + '<br>O número secreto é menor que seu chute';

    } else if (numeroDeTentativasDecrementado <= 4 && numeroSecreto > chute){
        elementoResultado.innerHTML = 'Tente novamente, você tem mais ' + numeroDeTentativasDecrementado + ' chances' + '<br>O número secreto é maior que seu chute';
        
    } 
}