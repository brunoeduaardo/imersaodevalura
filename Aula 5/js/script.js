function adicionarFilme() { // função adicionarFilme() está atrelada ao HTML por meio do 'onClick' no HTML
    let filmeFavorito = document.getElementById('filme').value; // responsável por pegar o valor do input "filme" do HTML
    if (filmeFavorito.endsWith('.jpg' || '.jpeg' || '.png')) { // verifica se o link adicionado no imput é realmente uma imagem
        listarFilmesNaTela(filmeFavorito); // executa a função listarFilmesNaTela(), passando a variável filmeFavorito como parâmetro
    } else { // mostrar um aviso caso a pessoa tente adicionar algo que não seja o endereço de uma imagem
        console.error('Endereço de imagem inválido');
    }
    document.getElementById('filme').value = ''; // deixa um espaço em branco ao terminar de adicionar uma imagem
}

function listarFilmesNaTela(filme) {
    let elementoFilmeFavorito = '<img src=' + filme + '>'; // responsável por colocar o valor do elemento input do HTML dentro da váriavel elementoFilmeFavorito
    let elementoListaFilmes = document.getElementById('listaFilmes'); // responsável por importar para o JS a div 'listaFIlmes' do HTML para podermos manioulá-lo
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito; // responsável por colocar as imagens dos filmes dentro da página HTML
}