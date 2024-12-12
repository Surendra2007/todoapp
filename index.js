let input=document.querySelector("input");
let addbutton=document.querySelector("#add");
let addbox=document.querySelector(".add-box")

addbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    let text=input.value.trim();
    let div1=document.createElement("div");
    div1.classList.add("div");
    div1.innerHTML= `
    <span>${text}</span>
    <div class="btn-div">
        <button id = "delete">Delete</button>
        <button id ="complete">Complete</button>
    </div>
    `;
    addbox.appendChild(div1);
    input.value="";
   div1.querySelector("#delete").addEventListener("click",()=>{
    addbox.removeChild(div1);
   })
   div1.querySelector("#complete").addEventListener("click",()=>{
      div1.querySelector("span").style.textDecoration="line-through";
   })
})


