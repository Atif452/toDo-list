let addBtn=document.querySelector(".add")
let input= document.querySelector(".input")
let result=document.querySelector(".result")

let clear=document.querySelector(".clear")


addBtn.addEventListener("click" , function(){
    // result.textContent+=input.value

    if(input.value!==""){

        let ul = document.createElement("ul")
        ul.className="ul"
        result.appendChild(ul)
    
        let li= document.createElement("li")
        li.className="li"
        li.textContent=input.value
        ul.appendChild(li)

        let del=document.createElement("button")
        del.textContent="delete"
        del.className="del"
        li.appendChild(del)
        
    
        input.value=""

        del.addEventListener("click", function(){
            li.remove()
        })

        clear.addEventListener("click" , function(){
            ul.remove()
        })
    }
    else{
        alert("enter value")
    }
    
})

