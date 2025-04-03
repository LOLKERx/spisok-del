document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") return;

        const taskItem = document.createElement("li");
        taskItem.className = "task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = () => {
            taskText.classList.toggle("completed", checkbox.checked);
        };

        const taskText = document.createElement("span");
        taskText.textContent = text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.onclick = () => taskItem.remove();

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }

    document.querySelector("button").addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});