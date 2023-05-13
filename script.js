let input=document.getElementById("inputbox");
let container2=document.getElementById("listcontainer");
let addMessage =()=>{
    if(input.value===""){
        alert("Please Enter Your Message")
    }
    else{
      let name=  prompt("Enter Your Name");
        let li=document.createElement("li");
        li.innerHTML=input.value +" "+"                            : " +name;
        container2.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="Delete";
        li.appendChild(span);
    }
    input.value="";
    // saveData();
    saveData();
}
container2.addEventListener("click",function(e){
if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  saveData();
}
});

let saveData=()=>{
  localStorage.setItem("data", container2.innerHTML )
}
let reciveData=()=>{
  container2.innerHTML= localStorage.getItem("data")
}
reciveData();