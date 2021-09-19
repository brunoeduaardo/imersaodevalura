function Converter(){
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorNumericoEmDolar = parseFloat(valor);

    var valorEmReal = valorNumericoEmDolar * 5;
    var valorEmBitcoin = valorNumericoEmDolar * 0.000021;
    console.log(valorEmReal)

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertidoEmReal = 'O resultado em Real é R$ ' + valorEmReal;
    var valorConvertidoEmBTC = 'O resultado em BTC é: ' + valorEmBitcoin + ' BTC';

    elementoValorConvertido.innerHTML = valorConvertidoEmReal + '<br>' + valorConvertidoEmBTC;
}

function ConverterAnos(){
    var valorElementoAnos = document.getElementById('valorAnos');
    var valorAnos = valorElementoAnos.value;
    var valorEmKM = valorAnos * 9460536068.016;

    var elementoValorAnosConvertido = document.getElementById('valorConvertidoAnos');
    var valorConvertidoEmKM = 'O resultado é igual a: ' + valorEmKM +'Km';

    elementoValorAnosConvertido.innerHTML = valorConvertidoEmKM;

}

