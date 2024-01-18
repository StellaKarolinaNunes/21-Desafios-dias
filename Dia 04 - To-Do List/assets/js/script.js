function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Digite uma tarefa!");
    return;
  }

  var li = createTaskElement(taskInput.value);
  taskList.appendChild(li);
  taskInput.value = "";

  saveTasksLocally();
}

function createTaskElement(taskText) {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.addEventListener("change", function() {
    li.classList.toggle("completed", checkbox.checked);
    saveTasksLocally();
  });

  var span = document.createElement("span");
  span.textContent = taskText;

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#128465;";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(li);
    saveTasksLocally();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}

function saveTasksLocally() {
 // salvar localmente
}
