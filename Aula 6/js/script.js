let rafa = {
    nome: 'Rafa',
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
};

let paulo = {
    nome: 'Paulo',
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
};

function calculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
};

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

let jogadores = [rafa, paulo];

function exibeJogadores(jogadores){
    let elemento = '';
    for(let i = 0; i < jogadores.length; i++){
        elemento += '<tr><td>' + jogadores[i].nome + '</td>'
        elemento += '<td>' + jogadores[i].vitorias +'</td>'
        elemento += '<td>' + jogadores[i].empates + '</td>'
        elemento += '<td>' + jogadores[i].derrotas + '</td>'
        elemento += '<td>' + jogadores[i].pontos + '</td>'
        elemento += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>"
        elemento += '</tr>'
    }
    
}