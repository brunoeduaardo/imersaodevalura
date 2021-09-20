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

calculaPontos(rafa);

function calculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    console.log(pontos);
}

