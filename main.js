let currentTaskManager = new TaskManager();

const loadBtn = document.getElementById("loadTasksBtn");
const statusMsg = document.getElementById("statusMessage");
const taskListContainer = document.getElementById("taskList");

function renderTaskList(taskManagerInstance) {
  taskListContainer.replaceChildren();

  taskManagerInstance.tasks.forEach(task => {
    const item = document.createElement("div");
    item.classList.add("task");
    if (task.completed) {
      item.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const actionsContainer = document.createElement("div");
    actionsContainer.className = "actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.completed ? "Undo" : "Toggle";
    toggleBtn.className = "btn-toggle";
    toggleBtn.addEventListener("click", () => {
      currentTaskManager = currentTaskManager.toggleTask(task.id);
      renderTaskList(currentTaskManager);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", () => {
      currentTaskManager = currentTaskManager.removeTask(task.id);
      renderTaskList(currentTaskManager);
    });

    actionsContainer.append(toggleBtn, deleteBtn);
    item.append(titleSpan, actionsContainer);
    taskListContainer.appendChild(item);
  });
}

loadBtn.addEventListener("click", async () => {
  try {
    statusMsg.textContent = "Loading tasks...";
    const rawData = await fetchTasks();

    // JSON Requirement: Serialize to string, then parse back
    const serializedData = JSON.stringify(rawData);
    const parsedData = JSON.parse(serializedData);

    const taskInstances = parsedData.map(item => new Task(item.id, item.title, item.completed));
    currentTaskManager = currentTaskManager.setTasks(taskInstances);

    renderTaskList(currentTaskManager);
    statusMsg.textContent = "";
  } catch (error) {
    statusMsg.textContent = `Error loading tasks: ${error.message}`;
  }
});