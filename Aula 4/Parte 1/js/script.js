let listaFilmes = [
    'De volta para o futuro', 
    'Escola de Rock', 
    'Mortal Kombat'
];

listaFilmes.push('Harry Potter');
listaFilmes.push('Yesterday')
// comando para adicionar um item no final do array

// document.write('<p>' + listaFilmes[0] + '</p>');
// no lugar do p, poderia ser usado também strong, b, h1, h2, etc

for (let indice = 0; indice < listaFilmes.length; indice++) {
    document.write('<p>' + indice + '<br>' + listaFilmes[indice] + '</p>');
}