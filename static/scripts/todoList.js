let toDoList = localStorage.getItem("to-do-list");
if(!toDoList) {
    toDoList = [];
    localStorage.setItem("to-do-list", JSON.stringify(toDoList));
}



function renderToDo() {
    let toDoList = localStorage.getItem("to-do-list");
    toDoList = JSON.parse(toDoList);
    let mainCont = document.getElementById("to-do-inner-cont");

    let fragment = new DocumentFragment();

    for(let i = 0; i < toDoList.length; i++) {
        let curr = toDoList[i];
        let NewOuterCont = document.createElement("div");
        NewOuterCont.className = "to-do-item";
        let NewInnerCont = document.createElement("div");
        NewInnerCont.className = "to-do-content";
        let TitleOuterEle = document.createElement("div");
        TitleOuterEle.innerHTML = curr.title;
        let NewImg = document.createElement("img");
        if(curr.isDone) {
            NewImg.src = "./icons/checkbox-check.svg";
            TitleOuterEle.className = "to-do-topic-done";
        }else{
            NewImg.src = "./icons/checkbox-unchecked.svg";
            TitleOuterEle.className = "to-do-topic";
        }
        NewImg.alt = "check-box";
        NewImg.className="to-do-checkbox";
        NewImg.onclick = () => {
            ((i) => {
                toDoList = JSON.parse(localStorage.getItem("to-do-list"));
                toDoList[i].isDone = !toDoList[i].isDone;
                localStorage.setItem("to-do-list", JSON.stringify(toDoList));
                renderToDo();
            })(i);
        }
        NewInnerCont.appendChild(NewImg);
        NewInnerCont.appendChild(TitleOuterEle);

        let ButtonCont = document.createElement("div");
        ButtonCont.className = "to-do-button";
        let DeleteButton = document.createElement("button");
        let DeleteIcon = document.createElement("img");
        DeleteIcon.src= "./icons/delete-icon.svg";
        DeleteIcon.className = "to-do-edit-button";
        DeleteIcon.alt = "delete-icon";
        DeleteButton.appendChild(DeleteIcon);
        DeleteButton.onclick = () => {
            ((i) => {
                toDoList = JSON.parse(localStorage.getItem("to-do-list"));
                toDoList = toDoList.filter((ele, ind) => ind != i);
                localStorage.setItem("to-do-list", JSON.stringify(toDoList));
                renderToDo();
            })(i);
        }
        ButtonCont.append(DeleteButton);
        NewOuterCont.appendChild(NewInnerCont);
        NewOuterCont.appendChild(ButtonCont);

        fragment.appendChild(NewOuterCont);
    }
    while (mainCont.firstChild) {
        mainCont.removeChild(mainCont.firstChild);
    }
    mainCont.append(fragment);
}
renderToDo();



// Input of new task
let addButton = document.getElementById("add-todo-button");
let inputEle = null; //to point if click again clicked when already taking input


addButton.addEventListener("click", (e) => {
    if(inputEle) {
        inputEle.focus();
        return;
    }
    let mainCont = document.getElementById("to-do-inner-cont");


    let NewOuterCont = document.createElement("div");
    NewOuterCont.className = "to-do-item";
    let NewInnerCont = document.createElement("div");
    NewInnerCont.className = "to-do-content";
    let NewImg = document.createElement("img");
    NewImg.src = "./icons/new-task.svg";
    NewImg.alt = "Star-box";
    NewImg.className="to-do-checkbox";
    let InputOuterEle = document.createElement("div");
    InputOuterEle.className = "to-do-topic";
    let InputEle = document.createElement("input");
    InputEle.className= "to-do-input";
    InputOuterEle.appendChild(InputEle);
    NewInnerCont.appendChild(NewImg);
    NewInnerCont.appendChild(InputOuterEle);
    let ButtonCont = document.createElement("div");
    ButtonCont.className = "to-do-button";
    let CheckButton = document.createElement("button");
    CheckButton.innerHTML = "&check;";

    CheckButton.addEventListener("click", () => {
        let toDoItem = {
            title: InputEle.value,
            done: false
        }
        toDoList = JSON.parse(localStorage.getItem("to-do-list"));
        toDoList.push(toDoItem);
        localStorage.setItem("to-do-list", JSON.stringify(toDoList));
        inputEle = null;
        renderToDo();
    });

    let CrossButton = document.createElement("button");
    CrossButton.innerHTML = "&CircleTimes;";
    CrossButton.addEventListener("click", () => {
        mainCont.removeChild(NewOuterCont);
        inputEle = null;
    });
    ButtonCont.appendChild(CheckButton);
    ButtonCont.appendChild(CrossButton);
    NewOuterCont.appendChild(NewInnerCont);
    NewOuterCont.appendChild(ButtonCont);

    inputEle = InputEle;
    mainCont.appendChild(NewOuterCont);
    inputEle.focus();
})