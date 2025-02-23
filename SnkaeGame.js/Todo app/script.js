let tasks = [];
let input = document.querySelector("#input");
let button = document.querySelector("#add");
let addtask = document.querySelector("#tasklist");

button.addEventListener("click", function() {
    let newtask = input.value.trim();
    if(newtask) {
        tasks.push(newtask);
        input.value = "";
        displaytasks();
    }
});

function displaytasks() {
    addtask.innerHTML = ""; 
    tasks.forEach(function(task, index) {
        let li = document.createElement("li"); 
        li.textContent = task; 
        let delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.addEventListener("click", function() {
            deletetask(index); 
        });
        li.appendChild(delButton);
        addtask.appendChild(li);
    });
}
function deletetask(index) {
    tasks.splice(index, 1); 
    displaytasks(); 
}
