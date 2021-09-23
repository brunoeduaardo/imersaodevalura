let cartas = [ // array com cartas criadas

    carta1 = {
        nome: 'Harry Potter',
        imagem: 'https://ogimg.infoglobo.com.br/in/24440303-24f-31c/FT1086A/87996533_SCAtor-Daniel-Redcliff-como-Harry-Potter.-Foto-Divulgacao.jpg',
        atributos: {
            ataque: 8,
            defesa: 9,
            magia: 8.5
        }
    },

    carta2 = {
        nome: 'Draco Malfoy',
        imagem: 'https://pbs.twimg.com/media/D8Fb0NqWsAEe4fH.jpg',
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 9
        }
    },

    carta3 = {
        nome: 'Neville Longbottom',
        imagem: 'http://1.bp.blogspot.com/-QDEJ8x_iRg8/Tun-42maLzI/AAAAAAAAAF0/K0SdBeAqXUI/s1600/Nevile+2.jpg',
        atributos: {
            ataque: 6,
            defesa: 3,
            magia: 5
        }
    },

    carta4 = {
        nome: 'Hermione Granger',
        imagem: 'https://i.pinimg.com/736x/b8/7c/07/b87c074cb059f9bb278286f7a7501d4d.jpg',
        atributos: {
            ataque: 6,
            defesa: 9,
            magia: 10
        }
    },

    carta5 = {
        nome: 'Ronald Weasley',
        imagem: 'https://febreteen.com.br/wp-content/uploads/2020/12/Rupert-Grint.jpg',
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 6
        }
    },

    carta6 = {
        nome: 'Alvo Dumbledore',
        imagem: 'https://imagilendo.files.wordpress.com/2014/06/albus-dumbledore-hogwarts-professors.jpg',
        atributos: {
            ataque: 9,
            defesa: 10,
            magia: 10
        }
    },

    carta7 = {
        nome: 'Lord Voldemort',
        imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/08/voldemort-harry-potter.jpg',
        atributos: {
            ataque: 9,
            defesa: 10,
            magia: 10
        }
    },

    carta8 = {
        nome: 'Gina Weasley',
        imagem: 'https://lh3.googleusercontent.com/-9jWOjUnEpIM/YRMhQ39omGI/AAAAAAAA9qo/DZNfSqVUXjw5pe0vsdwZ1Z1weFijqof2gCLcBGAsYHQ/w640/1628643648806116-0.png',
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 8
        }
    }

];

let cartaMaquina; // definindo duas variáveis vazias para podermos sortear as cartas
let cartaJogador; // de cada jogador

function sortearCarta(){
    let indiceCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[indiceCartaMaquina];

    let indiceCartaJogador = parseInt(Math.random() * 8);
    while (indiceCartaJogador == indiceCartaMaquina){
        indiceCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = cartas[indiceCartaJogador];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirCartaJogador();
}

function exibirOpcoes(){
    let opcoes = document.getElementById('opcoes');
    let opcoesTexto = ''

    for (let atributo in cartaJogador.atributos){
        opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function exibirCartaJogador(){
    let divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; // o cifrão define que será um código JS detnro de um CSS
    // outro jeito de escrever: divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")";
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">'

    let opcoesTexto = '';
    for (let atributo in cartaJogador.atributos){
        opcoesTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo + ': ' + cartaJogador.atributos[atributo] + '<br>';
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';


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
    let divResultado = document.getElementById('resultado');
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado = '<p class="resultado-final">Você venceu!</p>';
    } else if (valorCartaJogador < valorCartaMaquina){
        elementoResultado = '<p class="resultado-final">Você perdeu</p>'
    } else {
        elementoResultado = '<p class="resultado-final">Empate</p>'
    }
    divResultado.innerHTML = elementoResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();

}

function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; // o cifrão define que será um código JS detnro de um CSS

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">'

    let opcoesTexto = '';
    for (let atributo in cartaMaquina.atributos){
        opcoesTexto += '<p name="atributo" value="' + atributo + '">' + atributo + ': ' + cartaMaquina.atributos[atributo] + '</p>';
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}