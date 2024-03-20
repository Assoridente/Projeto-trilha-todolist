const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const themeToggleButton = document.getElementById('toggle-theme');

// Adiciona tarefa
addTaskButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        if (!isTaskDuplicate(taskName)) {
            addTask(taskName);
            taskInput.value = '';
        } else {
            alert('Essa tarefa já existe!');
        }
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// adiciona uma nova tarefa à lista
function addTask(taskName) {
    const li = document.createElement('li');
    li.textContent = taskName;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Concluir';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// verifica se a tarefa já existe na lista
function isTaskDuplicate(taskName) {
    const tasks = taskList.getElementsByTagName('li');
    for (let task of tasks) {
        if (task.textContent === taskName) {
            return true;
        }
    }
    return false;
}

// temas claro e escuro
let darkMode = false;
themeToggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    updateTheme();
});

function updateTheme() {
    if (darkMode) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
