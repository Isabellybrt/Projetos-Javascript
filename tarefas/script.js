// Lista para armazenar as tarefas
var tarefa = [];

// Função para adicionar uma tarefa
function addTarefa() {
  var tarefaInput = document.getElementById('tarefaInput');
  var tarefaNome = tarefaInput.value;
  
  if (tarefaNome.trim() !== '') {
    tarefa.push(tarefaNome);
    tarefaInput.value = '';
    renderizarTarefa();
  }
}

// Função para remover uma tarefa
function removerTarefa(index) {
  tarefa.splice(index, 1);
  renderizarTarefa();
}

// Função para renderizar as tarefas na lista
function renderizarTarefa() {

  atualizarcontador();

  var listaTarefa = document.getElementById('listaTarefa');
  listaTarefa.innerHTML = '';
  
  for (var i = 0; i < tarefa.length; i++) {
    var itemTarefa = document.createElement('li');
    itemTarefa.textContent = tarefa[i];
    
    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'botaoRemover';
    
    // Passa o índice da tarefa como argumento para a função de remoção
    botaoRemover.addEventListener('click', (function(index) {
      return function() {
        removerTarefa(index);
      };
    })(i));
    
    itemTarefa.appendChild(botaoRemover);
    listaTarefa.appendChild(itemTarefa);
  }
}

function atualizarcontador() {
  var contador = document.getElementById('contador');
  contador.textContent = 'Atividades: ' + tarefa.length;
}

atualizarcontador();