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

function sortearCarta()