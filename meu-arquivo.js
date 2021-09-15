//conversão para Dólar
function ConverterDolar() {
    var valorElementoDolar = document.getElementById("valor");
    var valor = valorElementoDolar.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmDolar = valorEmDolarNumerico / 5;
    var valorFinalDolar = valorEmDolar.toFixed(2)
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoDolar = "$ " + valorFinalDolar;
    elementoValorConvertido.innerHTML = valorConvertidoDolar;
  
    //conversão para Bitcoin
    var valorElementoBitcoin = parseFloat(document.getElementById("valor").value);
    var valorEmBitcoin = valorElementoBitcoin / 244000;
    var valorFinalBTC = valorEmBitcoin.toFixed(6)
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "BTC " + valorFinalBTC;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  //conversão para Euro
  function ConverterEuro() {
    var valorElementoEuro = parseFloat(document.getElementById("valor").value);
    var valorEmEuro = (valorElementoEuro / 6).toFixed(2);
    var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
    var valorConvertidoEuro = "€ " + valorEmEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  
    //conversão para Bitcoin
    var valorElementoBitcoin = parseFloat(document.getElementById("valor").value);
    var valorEmBitcoin = valorElementoBitcoin / 244000;
    var valorFinalBTC = valorEmBitcoin.toFixed(6)
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "BTC " + valorFinalBTC;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  