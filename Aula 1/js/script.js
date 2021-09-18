var nome = 'Bruno';
var primeiraNota = 8;
var segundaNota = 9;
var terceiraNota = 9;
var quartaNota = 9;
var notaFinal = (primeiraNota + segundaNota + terceiraNota
+ quartaNota)/4;

function converterTemperatura(){
    let temperatura = document.getElementById('temp').value;
    let qualTemperaturaF = document.getElementById('fahrenheit').value;
    let qualTemperaturaC = document.getElementById('celsius').value;
        if(fahrenheit.checked){
            console.log(qualTemperaturaF);
        }
        if(celsius.checked){
            console.log(qualTemperaturaC);
        }
    let temperaturaConvertida = document.getElementById('temperaturaConvertida');
    if (document.getElementById('temp').value.length == 0)
        temperaturaConvertida.innerHTML = 'Digite um valor de temperatura válido';
        
}

var notaArredondada = notaFinal.toFixed(1)

const nota = document.getElementById('nota');

if(notaArredondada >= 6){
    nota.innerHTML = 'Aluno aprovado, com nota: ' + notaArredondada;
} else {
    nota.innerHTML = 'Aluno reprovado, com nota: ' + notaArredondada;
}

console.log('Bem vindo ' + nome);
console.log(notaArredondada);

