let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let add = document.querySelector(".add");

add.addEventListener("click", function() {
    let addTask = document.createElement("li");
    addTask.innerText = inp.value;

    let dltTask = document.createElement("button");
    dltTask.classList.add("delete")
    dltTask.innerText = "Delete";

    addTask.appendChild(dltTask);
    ul.appendChild(addTask);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let tasks = event.target.parentElement;
        tasks.remove();
    };
});