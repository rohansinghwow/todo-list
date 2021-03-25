const todoInputEl = document.querySelector(".todo__input")

const todoItemsEl = document.querySelector(".todo__list")

const todoItemsAll = document.querySelectorAll(".todo__item")

//const delBtnEl = document.querySelector(".del-btn")
    const delBtn = document.createElement("button")
    delBtn.classList.add("btn-style")
    delBtn.textContent = "Remove"



function showInput(){

    todoInputEl.addEventListener("keypress" , function(event){
        
        if(event.keyCode === 13){
            let listItem = nodeConverter(todoInputEl.value)
            
           

            
            todoItemsEl.insertBefore(listItem,todoItemsEl.childNodes[0])
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

function listRemover(){
delBtn.addEventListener("click", function(event){
    event.target.parentNode.remove()
})

}


function nodeConverter(text){
    const newListElement =  document.createElement("li")
    
    

    newListElement.classList.add("todo__item")
    newListElement.textContent = text
    newListElement.appendChild(delBtn)
    console.log(newListElement)

    
    
    return newListElement
}

taskDone();
showInput();
listRemover();

