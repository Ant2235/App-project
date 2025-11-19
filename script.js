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

    let taskList = document.getElementById("main");

    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + taskList.childElementCount;
    //console.log(taskDiv)
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


function removeTask(event) {
    let checkboxId = event.target.id;
    let idNum = checkboxId.substring(8);
    let taskDiv = document.getElementById("task" + idNum);
    taskDiv.classList.add("remove");

    let tasklist = document.getElementById("main");

    setTimeout(function () {
        tasklist.removeChild(taskDiv);
        fixTaskColors();
        localStorage.removeItem(taskDiv.id);
    }, 1000)
    

}