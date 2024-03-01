// Seleciona o input onde o usuário digita as tarefas
const inputTarefa = document.querySelector('.input-tarefa');

// Seleciona o botão que adiciona tarefas
const btnTarefa = document.querySelector('.btn-tarefa');

// Seleciona o elemento que será a lista de tarefas
const tarefas = document.querySelector('.tarefas');

// Função para criar um novo elemento <li>
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Adiciona um evento para quando o usuário pressionar Enter no input
inputTarefa.addEventListener('keypress', function (e) {
    // Verifica se a tecla pressionada foi Enter (código 13)
    if (e.keyCode === 13) {
        // Verifica se o input não está vazio
        if (!inputTarefa.value) return;
        // Chama a função para criar a tarefa
        criaTarefa(inputTarefa.value)
    }
});

// Função para limpar o input depois de adicionar uma tarefa
function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Função para criar e adicionar o botão de "Apagar" em uma tarefa
function criaBotaoApagar(li) {
    // Adiciona um espaço em branco ao final do texto da tarefa
    li.innerText += ' ';
    // Cria um novo elemento <button> para o botão de "Apagar"
    const botaoApagar = document.createElement('button')
    // Define o texto dentro do botão como "Apagar"
    botaoApagar.innerText = 'Apagar'; 
    // Define a classe CSS do botão como "apagar"
    botaoApagar.setAttribute('class', 'apagar')
    // Define o texto de dica (tooltip) quando o mouse passa sobre o botão
    botaoApagar.setAttribute('title', 'apagar essa tarefa')
    // Adiciona o botão de "Apagar" como filho do <li> da tarefa
    li.appendChild(botaoApagar);
}


// Função principal para criar uma tarefa
function criaTarefa(textoInput) {
    // Cria um novo elemento <li>
    const li = criaLi()
    // Adiciona o texto da tarefa ao <li>
    li.innerText = textoInput;
    // Adiciona o <li> à lista de tarefas
    tarefas.appendChild(li)
    // Limpa o input
    limparInput()
    // Adiciona o botão de "Apagar" à tarefa
    criaBotaoApagar(li);
    // Salva as tarefas no localStorage
    salvarTarefas();
}

// Adiciona um evento de clique no botão de adicionar tarefa
btnTarefa.addEventListener('click', function () {
    // Verifica se o input não está vazio
    if (!inputTarefa.value) return;
    // Chama a função para criar a tarefa
    criaTarefa(inputTarefa.value)
});

// Adiciona um evento de clique em qualquer parte do documento
document.addEventListener('click', function(e) {
    const el = e.target;
    
    // Verifica se o elemento clicado é o botão de "Apagar"
    if (el.classList.contains('apagar')) {
        // Remove o elemento pai, que é a <li> da tarefa
        el.parentElement.remove();
        // Salva as tarefas no localStorage
        salvarTarefas();
    }
});

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    // Seleciona todas as tarefas na lista
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    // Para cada tarefa na lista de <li>
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        // Remove o texto do botão "Apagar" e remove espaços em branco
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        // Adiciona a tarefa tratada à listaDeTarefas
        listaDeTarefas.push(tarefaTexto);
    }
    
    // Converte a lista de tarefas para JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // Salva a lista de tarefas no localStorage com a chave 'tarefas'
    localStorage.setItem('tarefas', tarefasJSON);
}

// Função para adicionar tarefas salvas do localStorage quando a página é carregada
function adcionaTarefasSalvas() {
    // Obtém as tarefas do localStorage com a chave 'tarefas'
    const tarefas = localStorage.getItem('tarefas');
    // Converte as tarefas de JSON de volta para array
    const listaDeTarefas = JSON.parse(tarefas);
   
    // Para cada tarefa salva, chama a função para criar a tarefa
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}


// Chama a função para adicionar tarefas salvas quando a página é carregada
adcionaTarefasSalvas();


