console.log("script started");

function addTask() {
    let textBox = document.getElementById("input");
    //console.log(textBox)
    let taskText = textBox.value;
    textBox.value = "";
    if (taskText == ""){
        alert("Please enter a task");
        return
    }
    
    let taskList = document.getElementById("list");
    
    let idNum = generateIdNum();
    //AI help
    let taskItem = document.createElement("li");
    taskItem.id = "task" + idNum;
    taskItem.classList.add("task-item");
    taskItem.innerText = taskText;
    // Make a remove button AI helped at the end
    taskItem.innerHTML = taskText +  '<button class="delete-btn" onclick="removeTask(\'task' + idNum + '\')">x</button>';

    taskList.appendChild(taskItem);
}

function generateIdNum() {
    // Start with idNum = 0
    let idNum = 0;

    // Check if a task with that id exist
    while (localStorage.getItem("task" + idNum) != null) {
        idNum++;
    }
    // If it doesn, increment idNum and check again
    return idNum;
}
// Remove the task using the made X button
function removeTask(taskId) {
    let removeTask = document.getElementById(taskId);
    removeTask.remove();
}