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

    tasks.forEach((task, index) => {
        const li = document.createElement ("li");

        const span = document.createElement("span");
        span.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent ="🗑️";
        deleteBtn.classList.add("delete-button");

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();

        });

        const editBtn = document.createElement("button");
        editBtn.textContent ="✏️";
        editBtn.classList.add("edit-button");
        editBtn.addEventListener("click", () => {
            startEditMode(li, task, index);
        });

    li.appendChild(span);  
    li.appendChild(editBtn);     
    li.appendChild(deleteBtn);   
    taskList.appendChild(li);
    });

}

function startEditMode(li, currentTask, index) {
  li.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentTask;
  input.classList.add("input-text");

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾";
  saveBtn.classList.add("save-button");
  saveBtn.addEventListener("click", () => {
    const updatedTask = input.value.trim();

    if (updatedTask === "") {
      alert("No puedes guardar un campo vacío.");
      return;
    }

    const isDuplicate = tasks.some(
      (task, i) => task.toLowerCase() === updatedTask.toLowerCase() && i !== index
    );
    if (isDuplicate) {
      alert("Ya existe esta palabra.");
      return;
    }

    tasks[index] = updatedTask;
    renderTasks();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "❌";
  cancelBtn.classList.add("cancel-button");
  cancelBtn.addEventListener("click", renderTasks);

  li.appendChild(input);
  li.appendChild(saveBtn);
  li.appendChild(cancelBtn);
}



