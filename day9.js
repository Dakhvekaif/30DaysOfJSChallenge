const div1 = document.querySelector("#div1")
div1.innerHTML = "This is Javascript";  // task 1
const div2 = document.getElementsByClassName("bg")[0];

div2.style.backgroundColor = "lightgreen"; // task 2
div2.classList.add("myclass")

const divnew = document.createElement("div")

divnew.innerHTML = "THis is another div";
const body = document.querySelector(".body")
body.appendChild(divnew); // task 3

const li = document.createElement('li');
li.innerHTML = "This is a list";

const ul = document.querySelector('#ul')
div1.appendChild(li)  // task 4

body.removeChild(divnew); //task 5

li.remove(); // task 6

let url = "https://images.pexels.com/photos/159607/basketball-player-girls-basketball-girl-159607.jpeg?auto=compress&cs=tinysrgb&w=600"
document.getElementById('image').src = url  // task 7

div2.classList.remove('myclass')  // task 8

document.querySelector('button').addEventListener("click",(event)=>{
    document.querySelector(".para").textContent = "I am changing this paragraph into another paragraph"
})      // task 9

div2.addEventListener("mouseover",(e)=>{
    div2.style.border = "4px solid black";
})          // task 10

