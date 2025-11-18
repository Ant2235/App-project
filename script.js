console.log("script started");

function addTask() {
    let textBox = document.getElementById("input");
    //console.log(textBox)
    let taskText = textBox.value;
    textBox.value = "";

    let taskList = document.getElementById("task-list");

    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + taskList.childElementCount;
    console.log(taskDiv)
    taskDiv.classList.add("task-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + taskList.childElementCount;

    let lable = document.createElement("label");
    lable.id = "lable " + taskList.childElementCount;
    lable.innerText = taskText;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(lable);
    taskList.appendChild(taskDiv);
}