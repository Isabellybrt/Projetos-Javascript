// Variáveis para armazenar o número de tentativas, palpites submetidos e número aleatório
var nTentativas = 0;
var palpitesSubmetidos = [];
var numero_aleatorio = Math.floor(Math.random() * (101 - 1)) + 1;

// Variáveis para controlar o cronômetro
var tempoInicial = 0;
var cronometro;

// Função para iniciar o cronômetro
function startCronometro() {
  // A função setInterval é usada para chamar uma função repetidamente a cada intervalo de tempo especificado (1000ms = 1s)
  cronometro = setInterval(function() {
    tempoInicial++;
    var horas = Math.floor(tempoInicial / 3600);
    var minutos = Math.floor((tempoInicial % 3600) / 60);
    var segundos = tempoInicial % 60;
    
    var tempoFormatado = formatarTempo(horas) + ":" + formatarTempo(minutos) + ":" + formatarTempo(segundos);
    
    // Atualiza o elemento com o ID "cronometro" com o tempo formatado
    document.getElementById("cronometro").textContent = tempoFormatado;
  }, 1000);
}

// Função auxiliar para formatar o tempo com zeros à esquerda quando necessário
function formatarTempo(tempo) {
  return tempo < 10 ? "0" + tempo : tempo;
}

// Função para parar o cronômetro
function stopCronometro() {
  clearInterval(cronometro);
  tempoInicial = 0;
}

// Função chamada quando um número é submetido
function numeroCerto() {
  let resposta = document.getElementById("resposta").value;
  if (resposta != "") {
    let palpite = parseInt(resposta);

    // Verifica se o palpite já foi submetido anteriormente
    if (palpitesSubmetidos.includes(palpite)) {
      document.getElementById("aviso").innerHTML = "Burro! Esse número você já falou.";
    } else {
      nTentativas++;
      document.getElementById("nTentativas").innerHTML = nTentativas;
      palpitesSubmetidos.push(palpite);

      // Verifica se o palpite é igual ao número aleatório
      if (palpite == numero_aleatorio) {
        stopCronometro();
        // Redireciona para a página de vitória
        window.location.href = "vitoria.html";
      } else if (palpite > numero_aleatorio) {
        document.getElementById("aviso").innerHTML = "Tente um número menor";
      } else if (palpite < numero_aleatorio) {
        document.getElementById("aviso").innerHTML = "Tente um número maior";
      }
    }

    // Verifica se o número de tentativas atingiu o limite
    if (nTentativas == 10) {
      stopCronometro();
      // Redireciona para a página de derrota
      window.location.href = "derrota.html";
    }
  }
}

// Função para voltar para a página anterior
function goBack() {
  window.location.href = "javascript:history.go(-1)";
}

// Função para recarregar a página
function reloadPage() {
  location.reload();
}

// Chame a função startCronometro() para iniciar o cronômetro
startCronometro();


