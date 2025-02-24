let tasks = []; //tasks ko store karega
let input = document.querySelector("#input"); //input field ko select kiya
let button = document.querySelector("#add"); //add button ko select kiya
let addtask = document.querySelector("#tasklist"); //task list container ko select kiya
let editIndex = -1; //edit mode off (-1 ka matlab koi edit nhi ho rha)

button.addEventListener("click", addOrSaveTask); //click par add ya save function chalega
//enter press karne par bhi wahi add ya save function chalega
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addOrSaveTask();
    }
});
//task ko add ya save karne wala function
function addOrSaveTask() {
    let newtask = input.value.trim(); //input ki value leli aur extra spaces hata di
    if (newtask) {
        if (editIndex === -1) {
            tasks.push({ text: newtask, completed: false }); //task ke sath complete status bhi store hoga
        } else {
            tasks[editIndex].text = newtask; //edit mode mein task update hoga
            editIndex = -1; //edit mode off ho jaayega
            button.textContent = "Add"; //button text wapas "Add" ho jaayega
        }
        input.value = ""; //input field ko empty kar diya
        displayTasks(); //sari tasks ko dikhane wala function chalega
    }
}
//tasks ko dikhane wala function
function displayTasks() {
    addtask.innerHTML = ""; //task list ko blank kar diya
    //sare tasks ko loop se dikhana
    tasks.forEach(function(task, index) {
        let li = document.createElement("li");
        
        //task ka text ko span mein daala taki line-through sirf uspe lage
        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        
        //agar task complete hai toh sirf usi pe line-through hoga
        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }
        
        //mark as complete button banaya
        let marksascompletedbutton = document.createElement("button");
        marksascompletedbutton.textContent = "Mark as Complete";
        marksascompletedbutton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed; //toggle complete status
            displayTasks(); //status change ke baad tasks ko dikhana
        });
        
        //edit button banaya
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            input.value = task.text; //input field mein task dikh jaaye edit ke liye
            editIndex = index; //edit hone wale task ka index set kar diya
            button.textContent = "Save"; //button text "Save" ho jaaye
        });
        
        //delete button banaya
        let delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.addEventListener("click", function() {
            deleteTask(index); //delete function chalega
        });
        
        li.appendChild(taskText); //sirf text span ko line-through milega
        li.appendChild(marksascompletedbutton); //mark as complete button ko list item mein daala
        li.appendChild(editButton); //edit button ko list item mein daala
        li.appendChild(delButton); //delete button ko bhi list item mein daala
        addtask.appendChild(li); //poore list item ko task list container mein daala
    });
}
//task ko delete karne wala function
function deleteTask(index) {
    tasks.splice(index, 1); //task ko array se hata diya
    displayTasks(); //delete ke baad list ko wapas dikhaya
}
