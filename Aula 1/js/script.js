var nome = 'Bruno';
var primeiraNota = 9;
var segundaNota = 8;
var terceiraNota = 9;
var quartaNota = 5;
var notaFinal = (primeiraNota + segundaNota + terceiraNota
+ quartaNota)/4;

var notaArredondada = notaFinal.toFixed(1)

console.log('Bem vindo ' + nome);
console.log(notaArredondada);