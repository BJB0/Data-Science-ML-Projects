// alert("welcome");

let inputField=document.getElementById("todoinput");
let toDoContainer=document.getElementById("toDoContainer");

function addToDo(){
    console.log("to Do added", inputField.value);
    let item = document.createElement('p');
    item.innerText=inputField.value;

    toDoContainer.appendChild(item);
    inputField.value='';

    item.addEventListener('click',function(e){
        item.style.textDecoration="line-through"
    })
};
// toDoContainer.addEventListener("click", function(e)){
//     e.target.
// }