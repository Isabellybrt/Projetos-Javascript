
// função para somar
function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultado = num1 + num2;
  
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }

// função para multiplicar
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultado = num1 * num2;
  
    document.getElementById("resultado").innerText = "Resultado: "+ resultado;
  }


// função para dividir
function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultado = num1 / num2;
  
    document.getElementById("resultado").innerText = "Resultado: "+ resultado;
  }

  // função para subtrair
  function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var resultado = num1 - num2;
  
    document.getElementById("resultado").innerText = "Resultado: "+ resultado;
  }

    // Função para calcular a média 
    function calcularMedia() {
      let notaB1 = document.getElementById("notaB1").value;
      let notaB2 = document.getElementById("notaB2").value;
      let notaB3 = document.getElementById("notaB3").value;
      let notaB4 = document.getElementById("notaB4").value;
    
      let media = (parseFloat(notaB1) + parseFloat(notaB2) + parseFloat(notaB3) + parseFloat(notaB4)) / 4;
    
      document.getElementById("media").innerHTML = "media anual: " + media;
    }

  // Função para calcular o fatorial
    function calcularFatorial() {
      var num = BigInt(document.getElementById("fatorial").value);
      var fatorial = BigInt(1);

      // função de loop
      for (var i = 2; i <= num; i++) {
        fatorial *= BigInt(i);
      }

      document.getElementById("resultado-fatorial").innerHTML = "Fatorial: " + fatorial;
    }

  // Função para verificar se o numero é inteiro
    function verificarInteiro() {
      var num = parseFloat(document.getElementById("inteiro").value);

      if (Number.isInteger(num)) {
        document.getElementById("resultado-inteiro").innerHTML = "É um número inteiro.";
      } else {
        document.getElementById("resultado-inteiro").innerHTML = "Não é um número inteiro.";
      }
    }

  // Função para calcular o valor absoluto
    function calcularValorAbsoluto() {
      var num = parseFloat(document.getElementById("absoluto").value);
      var valorAbsoluto = Math.abs(num);

      document.getElementById("resultado-absoluto").innerHTML = "Valor absoluto: " + valorAbsoluto;
    }

  // Função para gerar um numero aleatorio
    function gerarNumeroAleatorio() {
      var min = parseFloat(document.getElementById("min").value);
      var max = parseFloat(document.getElementById("max").value);

      var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

      document.getElementById("resultado-aleatorio").innerHTML = "Número aleatório: " + numeroAleatorio;
    }

  // Função para verificar se o numero é impar
    function verificarParImpar() {
      var num = parseFloat(document.getElementById("par-impar").value);

      if (num % 2 === 0) {
        document.getElementById("resultado-par-impar").innerHTML = "É um número par.";
      } else {
        document.getElementById("resultado-par-impar").innerHTML = "É um número ímpar.";
      }
    }

  // Função para comparar os numeros
    function compararNumeros() {
      var num1 = parseFloat(document.getElementById("num1-comparacao").value);
      var num2 = parseFloat(document.getElementById("num2-comparacao").value);

      if (num1 === num2) {
        document.getElementById("resultado-comparacao").innerHTML = "Os números são iguais.";
      } else if (num1 > num2) {
        document.getElementById("resultado-comparacao").innerHTML = "O primeiro número é maior.";
      } else {
        document.getElementById("resultado-comparacao").innerHTML = "O segundo número é maior.";
      }
    }

  // Função para verificar a idade
    function verificarIdade() {
      var idade = parseInt(document.getElementById("idade").value);

      if (idade < 18) {
        document.getElementById("resultado-idade").innerHTML = "Menor de idade.";
      } else {
        document.getElementById("resultado-idade").innerHTML = "Maior de idade.";
      }
    }

  // Função para verificar o dia da semana
    function verificarDiaSemana() {
      var diaSemana = document.getElementById("dia-semana").value.toLowerCase();

      switch (diaSemana) {
        case "sábado":
        case "domingo":
          document.getElementById("resultado-dia-semana").innerHTML = "Fim de semana.";
          break;
        case "segunda-feira":
        case "terça-feira":
        case "quarta-feira":
        case "quinta-feira":
        case "sexta-feira":
          document.getElementById("resultado-dia-semana").innerHTML = "Dia útil.";
          break;
        default:
          document.getElementById("resultado-dia-semana").innerHTML = "Dia inválido.";
          break;
      }
    }