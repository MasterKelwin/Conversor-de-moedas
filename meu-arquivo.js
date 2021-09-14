//conversão para Dólar
function ConverterDolar() {
    var valorElementoDolar = document.getElementById("valor");
    var valor = valorElementoDolar.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmDolar = valorEmDolarNumerico / 5;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoDolar = "$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertidoDolar;
  
    //conversão para Bitcoin
    var valorElementoBitcoin = parseFloat(document.getElementById("valor").value);
    var valorEmBitcoin = valorElementoBitcoin / 244000;
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "BTC " + valorEmBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  //conversão para Euro
  function ConverterEuro() {
    //conversão para Euro
    var valorElementoEuro = parseFloat(document.getElementById("valor").value);
    var valorEmEuro = valorElementoEuro / 6;
    var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
    var valorConvertidoEuro = "€ " + valorEmEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  
    //conversão para Bitcoin
    var valorElementoBitcoin = parseFloat(document.getElementById("valor").value);
    var valorEmBitcoin = valorElementoBitcoin / 244000;
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "BTC " + valorEmBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  