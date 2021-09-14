var nome = 'Bruno';
var primeiraNota = 8;
var segundaNota = 9;
var terceiraNota = 9;
var quartaNota = 9;
var notaFinal = (primeiraNota + segundaNota + terceiraNota
+ quartaNota)/4;

var notaArredondada = notaFinal.toFixed(1)

const nota = document.getElementById('nota');

if(notaArredondada >= 6){
    alert('Aluno aprovado, com nota: ' + notaArredondada);
} else {
    alert('Aluno reprovado, com nota: ' + notaArredondada);
}

console.log('Bem vindo ' + nome);
console.log(notaArredondada);

