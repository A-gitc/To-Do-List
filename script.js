function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
    var task = taskInput.value;
    if (task.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.onclick = function() {
            this.classList.toggle("completed");
        };
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

    