let cursor=document.querySelectorAll(".cursor");
let cursorCircle=document.querySelector(".cursor.circle")



window.onmousemove=(e)=>{
    let xPosition=e.clientX;
    let yPosition=e.clientY;

    cursor.forEach(ele=>{
        ele.style.transform=`translate(calc(-50% + ${xPosition}px),calc(-50% + ${yPosition}px))`
    })
}

// auto scroll reset



let myList=document.querySelector(".list")
let items=myList.querySelectorAll("li")



let menu=document.querySelector(".menu")
       menu.onclick=()=>{
           menu.style.display="none";
           myList.style.display="flex"
           myList.style="right:0"
       }

let closeBtn=document.querySelector(".close-menu")
closeBtn.onclick=()=>{
     myList.style="right:-100%"
     menu.style.display="block";
     
}



    myList.onclick=(e)=>{
        if(window.innerWidth<570){
            for(item of items){
                item.style="backgroundColor:transparent;color:white;"
            }
            if(e.target.nodeName==="LI"&&e.target.children.length<2){
                e.target.style="background-color:white;color:black;"
                console.log(e.target)
            }
           }
        }

       
        

let selectionOptions=document.querySelector(".select-options")
let selectionBox=document.querySelector(".select-wrapper")
let selectionBoxDown=document.querySelector(".fa-caret-down")
selectionBox.onclick=()=>{
    selectionOptions.classList.toggle("active")
}
selectionBox.addEventListener("mouseenter",()=>{
    selectionBoxDown.style.transform="rotate(180deg)";
})
selectionBox.onmouseleave=()=>{
    selectionBoxDown.style.transform="rotate(0deg)"
}


let words=["23 years old Tunisian ","front end web developper"];
let empty=""
let index=0;
let counter=0;
let introduction=document.querySelector(".introduction p span");

function typing(){
    if(counter>=words.length){
        counter=0
    }
     empty=words[counter].slice(0,index++)
     introduction.textContent=empty;
   if(empty.length>=words[counter].length){
       
        counter++
        index=0;
   

   }
   setTimeout(typing,200)
}

typing()

// main discover btn show Function scroll

let mainBtn=document.querySelector(".discover");

mainBtn.onclick=()=>{
    document.body.style.overflowY="scroll";
    setTimeout(()=>{
        window.scrollTo({
            top:window.innerHeight/1.5,
            left:0,
            behavior:"smooth"
        })
    },0)

}
setInterval(function(){
    document.body.style.overflowY="scroll"
},5000)

// btn 3d animation

let animationBtn=document.querySelectorAll(".face2 button");

animationBtn.forEach(btn=>{
    btn.onclick=()=>{
        btn.parentElement.parentElement.classList.add("show")
    }
})


// mouse leave 3d reset 

let project=document.querySelectorAll(".project")

project.forEach(p=>{
    p.onmouseleave=()=>{
        p.classList.remove("show")
    }
})







// contact section Algorythme */ 
let contact=document.querySelector(".contact")
let send=document.querySelectorAll(".fa-chevron-right");

send.forEach(s=>{
    s.onclick=()=>{
        let previousElement=s.previousElementSibling;
        let parentElement=s.parentElement;
        let nextElement=s.parentElement.nextElementSibling;
        console.log(previousElement.value)

        if(previousElement.value.length>5){
            parentElement.classList.remove("valid")
            nextElement.classList.add("valid")
            contact.style.backgroundColor="#1E2322"
        }
        else{
            contact.style.backgroundColor="rgb(178, 46, 46)";
            parentElement.style="animation:wrong 0.5s linear ;"
            parentElement.onanimationend=()=>{
                parentElement.style.animation="none"
            }
        }
    }
})

