let cartas = [ // array com cartas criadas

    carta1 = {
        nome: 'Harry Potter',
        atributos: {
            ataque: 8,
            defesa: 9,
            magia: 8.5
        }
    },

    carta2 = {
        nome: 'Draco Malfoy',
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 9
        }
    },

    carta3 = {
        nome: 'Neville Longbottom',
        atributos: {
            ataque: 6,
            defesa: 3,
            magia: 5
        }
    }

];

let cartaMaquina; // definindo duas variáveis vazias para podermos sortear as cartas
let cartaJogador; // de cada jogador

function sortearCarta(){
    let indiceCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[indiceCartaMaquina];

    let indiceCartaJogador = parseInt(Math.random() * 3);
    while (indiceCartaJogador == indiceCartaMaquina){
        indiceCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[indiceCartaJogador];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirOpcoes();
}

function exibirOpcoes(){
    let opcoes = document.getElementById('opcoes');
    let opcoesTexto = ''

    for (let atributo in cartaJogador.atributos){
        opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    let radioAtributos = document.getElementsByName('atributo');

    for(let i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){  
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById('resultado');
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = 'Você ganhou';
    } else if (valorCartaJogador < valorCartaMaquina){
        elementoResultado.innerHTML = 'Você perdeu, a carta da máquina é maior';
    } else [
        elementoResultado.innerHTML = 'Empatou'
    ]
    
}