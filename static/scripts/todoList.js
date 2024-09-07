function addToLocal(title) {

}


let addButton = document.getElementById("add-todo-button");
let inputEle = null; //to point if click again clicked when already taking input
addButton.addEventListener("click", (e) => {
    if(inputEle) {
        inputEle.focus();
        return;
    }
    
})