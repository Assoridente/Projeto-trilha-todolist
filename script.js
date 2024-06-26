const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const themeToggleButton = document.getElementById('theme-toggle'); // Corrigido para corresponder ao ID correto

// Mantenha uma lista separada de todas as tarefas adicionadas
const tasksAdded = [];

// Adicionando tarefa
addTaskButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        if (!isTaskDuplicate(taskName)) {
            addTask(taskName);
            taskInput.value = '';
        } else {
            alert('Esta tarefa já está na lista!');
        }
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Função para adicionar uma nova tarefa à lista
function addTask(taskName) {
    const li = document.createElement('li');

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-outline-success'; // Adiciona as classes do botão do Bootstrap
    const checkIcon = document.createElement('i');
    checkIcon.className = 'bi bi-check'; // Adicione a classe do ícone do Bootstrap
    checkIcon.style.color = 'transparent'; // Define a cor do ícone como transparente
    checkIcon.style.fontSize = '1.2rem'; // Define o tamanho da fonte do ícone
    deleteButton.appendChild(checkIcon); // Adiciona o ícone dentro do botão "Concluir"

    // Adiciona a interação para exibir o ícone de check ao passar o mouse
    deleteButton.addEventListener('mouseover', () => {
        checkIcon.style.color = 'green'; // Altera a cor do ícone para verde ao passar o mouse
    });

    // Adiciona a interação para ocultar o ícone de check ao retirar o mouse
    deleteButton.addEventListener('mouseout', () => {
        checkIcon.style.color = 'transparent'; // Define a cor do ícone como transparente ao retirar o mouse
    });

    deleteButton.addEventListener('click', () => {
        // Aplica uma transição ao botão e à tarefa ao ser concluída
        deleteButton.style.backgroundColor = 'green'; // Muda a cor de fundo do botão para verde
        li.style.textDecoration = 'line-through'; // Riscado no texto da tarefa
        li.style.opacity = 0;
        setTimeout(() => {
            li.remove();
            // Remover a tarefa concluída da lista de tarefas adicionadas
            const index = tasksAdded.indexOf(taskName);
            if (index !== -1) {
                tasksAdded.splice(index, 1);
            }
        }, 500); // Tempo da transição em milissegundos
    });

    li.appendChild(deleteButton);

    // Adiciona um espaço entre o ícone de check e o texto da tarefa
    const space = document.createElement('span');
    space.textContent = ' ';
    li.appendChild(space);

    // Adiciona o texto da tarefa após o espaço
    const taskText = document.createTextNode(taskName);
    li.appendChild(taskText);

    taskList.appendChild(li);

    // Adicionar a nova tarefa à lista de tarefas adicionadas
    tasksAdded.push(taskName);
}

// Função para alternar o tema
function toggleTheme() {
    const container = document.querySelector('.container');
    const body = document.querySelector('body'); // Seleciona o elemento body
    container.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme'); // Adiciona ou remove a classe dark-theme do body
    
    // Obtém o elemento do ícone do tema
    const themeIcon = document.getElementById('theme-icon');

    // Obtém o elemento do botão de alternância de tema
    const themeToggleButton = document.getElementById('theme-toggle-button'); // <- Aqui parece estar o problema

    // Alterna entre os ícones de lua e sol
    if (themeIcon.classList.contains('bi-brightness-high-fill')) {
        themeIcon.classList.remove('bi-brightness-high-fill');
        themeIcon.classList.add('bi-moon-fill');
    } else {
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-brightness-high-fill');
    }
}


// Função para verificar se a tarefa já existe na lista
function isTaskDuplicate(taskName) {
    return tasksAdded.includes(taskName);
}

// Função para iniciar o temporizador
function startTimer(duration, display) {
    let timer = duration;
    setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            // Aqui você pode exibir a notificação de lembrete de descanso
            // Por exemplo:
            // alert("É hora de fazer uma pausa de 5 minutos!");
            alert("Faça uma pequena pausa, você está indo muito bem!")
            // Ou você pode usar uma biblioteca de notificação como a Notification API
        }
    }, 1000);
}

window.onload = function () {
    const twentyMinutes = 60 * 20; // 20 minutos em segundos
    const display = document.querySelector('#timer');
    startTimer(twentyMinutes, display);
};
