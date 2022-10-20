let ul = document.getElementById("task-list");
let taskText = document.getElementById("task-text");
let taskResult = document.getElementById("task-result");
const taskArray = [];
let taskJson = JSON.stringify(taskArray);

function createTask()
{
    if(taskText.value != ""){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText.value));
        taskArray.push(taskText.value);
        localStorage.setItem("myStorage", JSON.stringify(taskArray));
        console.log(taskArray);
        ul.appendChild(li);
        taskText.value = "";
        taskResult.hidden = true;
    }
    else
    {
        taskResult.hidden = false;
        taskResult.innerHTML = "Field is empty!";
        taskResult.style.border = "1px solid black";
        taskResult.style.backgroundColor = "aqua";
        taskResult.style.color = "black";
        taskResult.style.width = "10em";
        taskResult.style.borderRadius = "10px";
        taskResult.style.marginTop = "30px";
        taskResult.style.textAlign = "center";
        taskResult.style.padding = "5px";
        taskResult.style.margin = "0 auto";
    }
}