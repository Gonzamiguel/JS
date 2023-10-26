let tasks = [];

function addTask(task) {
tasks.push(task);
updateTaskList();
saveTasksToStorage();
}

function searchTask(keyword) {
return tasks.filter(task => task.toLowerCase().includes(keyword.toLowerCase()));
}

function updateTaskList() {
const taskListElement = document.getElementById('taskList');
taskListElement.innerHTML = '';

tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    taskListElement.appendChild(li);
});
}

function saveTasksToStorage() {
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromStorage() {
const storedTasks = localStorage.getItem('tasks');
tasks = storedTasks ? JSON.parse(storedTasks) : [];
updateTaskList();
}

document.getElementById('addTaskBtn').addEventListener('click', () => {
const taskInput = document.getElementById('taskInput');
const newTask = taskInput.value.trim();

if (newTask !== '') {
    addTask(newTask);
    taskInput.value = '';
}
});

document.getElementById('searchTaskBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.trim();

if (keyword !== '') {
    const result = searchTask(keyword);
    tasks = result;
    updateTaskList();
    } else {
    loadTasksFromStorage();
}
});

loadTasksFromStorage();
