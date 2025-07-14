const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
const errorMessage = document.querySelector("#errorMessage");

let tasks = [];

addButton. addEventListener("click", function () {
    const newTask = taskInput.value.trim(); 


    errorMessage.textContent ="";

    if (newTask === "") {
        errorMessage.textContent = "No Puedos dejar esto en blanco.";
        return;
    }

    const isDuplicate = tasks.some(task => task.toLowerCase() === newTask.toLowerCase());
    if (isDuplicate) {
        errorMessage.textContent = "Ya has anadidio esa palabra";
        return;
    }

    tasks.push(newTask);
    taskInput.value ="";

    renderTasks();
});


function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement ("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

