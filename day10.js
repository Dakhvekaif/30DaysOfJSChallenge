// const para = document.querySelector("p")
const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click",(e)=>{
    // para.textContent = "The Paragraph has been changed"
});  // task 1

const btn2 = document.querySelector("#btn2")
let img1 = document.querySelector("#imagee")

img1.style.display = "block"
function toggle(e){
    if(img1.style.display == "block"){
        img1.style.display = "none";
    } else if(img1.style.display == "none"){
        img1.style.display = "block"
    }
}
btn2.addEventListener("dblclick", toggle);  // task 2

let heading = document.querySelector('h4');
heading.addEventListener('mouseover',(e)=>{
    heading.style.backgroundColor = "lightblue"
})      // task 3

heading.addEventListener('mouseout',(e)=>{
    heading.style.backgroundColor =""
})      // task 4

const input = document.querySelector("input");
const log = document.getElementById("log");
input.addEventListener("keydown", (e)=>{
    console.log(e.code);
});     // task 5
input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`; // task 6
}

const form1 = document.querySelector("#form1")
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
})      // task 7

const inputdata = document.querySelector("#cars");
const parainput = document.querySelector("#displayValue")
inputdata.addEventListener("change",(e)=>{
    parainput.textContent = e.target.value;
})      // task 8

