const todoInputEl = document.querySelector(".todo__input")

const todoItemsEl = document.querySelector(".todo__list")

const todoItemsAll = document.querySelectorAll(".todo__item")

function showInput(){

    todoInputEl.addEventListener("keypress" , function(event){
        
        if(event.keyCode === 13){
            let listItem = nodeConverter(todoInputEl.value)
            
            todoItemsEl.appendChild(listItem)
            todoInputEl.value = ""

        }

    })
}

function taskDone(){
    
        todoItemsEl.addEventListener("click", function(event){
            if(event.target.classList.contains("todo__item")){
            event.target.classList.toggle("done");
            }

        })
        
    
}

function nodeConverter(text){
    const newListElement =  document.createElement("li")
    newListElement.classList.add("todo__item")
    newListElement.textContent = text
    
    return newListElement
}
taskDone();
showInput();
