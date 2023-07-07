// Task list array
let tasks = [];


function addTask() { //add task
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
    document.getElementById("errorMsg").textContent = ""; // Clear error message
  } else {
    document.getElementById("errorMsg").textContent = "Please enter a task.";
  }
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    // Create list item
    const listItem = document.createElement("li");

    // Create task text span
    const taskText = document.createElement("span");
    taskText.textContent = task;
    listItem.appendChild(taskText);

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
      editTask(i);
    };
    listItem.appendChild(editButton);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTask(i);
    };
    listItem.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(listItem);
  }
}

// Function to edit a task
function editTask(index) {
  const newTask = prompt("Enter the new task:");
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering of tasks
renderTasks();