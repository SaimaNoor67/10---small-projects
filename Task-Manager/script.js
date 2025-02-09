let inpt = document.querySelector("#task-input");
let btn = document.querySelector("#add-task-btn");
let task = document.querySelector("#tasks");

btn.addEventListener("click", function (){
    if(inpt.value == ""){
        alert (" please fill the task ");
    }else{
    let newEle = document.createElement("li");
    newEle.innerHTML = `${inpt.value} <i class="fa-solid fa-trash"></i>`
    task.appendChild(newEle);
    inpt.value = "";
    newEle.querySelector("i").addEventListener("click",(remove));
    function remove(){
        newEle.remove();
    };
    }

})