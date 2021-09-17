let listaFilmes = [
    'De volta para o futuro', 
    'Escola de Rock', 
    'Mortal Kombat'
];

listaFilmes.push('Harry Potter');
// comando para adicionar um item no final do array

// document.write('<p>' + listaFilmes[0] + '</p>');
// no lugar do p, poderia ser usado também strong, b, h1, h2, etc

for (let indice = 0; indice < listaFilmes.length; indice = indice + 1) {
    document.write('<p>' + listaFilmes[indice] + '</p>');
}