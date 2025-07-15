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

        const span = document.createElement("span");
        span.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent ="🗑️";
        deleteBtn.classList.add("delete-button");

        deleteBtn.addEventListener("click", () => {
            tasks.splice(indexedDB, 1);
            renderTasks();

        });



    li.appendChild(span);       
    li.appendChild(deleteBtn);   
    taskList.appendChild(li);
    });
}

