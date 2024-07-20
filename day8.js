let names = "Dakhve Kaif";
let age = 21

const literalString = `My name is ${names} and my age is ${age}`
console.log(literalString); // task 1 
let details = `I have participated in 30 days Js challenge
This is my 8th day of completing the challenge`
console.log(details);  // task 2

let arrayOfNum = [10,20,30,40,50]
let [a, ,b] = arrayOfNum
console.log(a,b); //task 3

let newObj = {
    name: "Mike Ross",
    Series: "The Suits",
    Profession: "Lawyer",
    age: 25,
    Company: "Pearson Specter"
}

let {name: newName ,Series: Author} = newObj;
console.log(newName);
console.log(Author);  // task 4

let Marvel_heroes = ["Captain America", "Hulk", "Iron Man"]
let dc_heroes = ["Flash", "Batman", "Superman"]

const all_heroes = [...Marvel_heroes,...dc_heroes]
console.log(all_heroes);  // task 5

function sum(...args){
    let total = 0
    for(const num of args){
        total += num
    }
   return total 
}
console.log(sum(10,20,30))  // task 6

function multiply(num1,num2=1){
    return num1 * num2;
}
console.log(multiply(10));
console.log(multiply(10,10));  // task 7

let task = "Coding"
let timeTaken = "1 hour"
let isCompleted = false
let AllCombined = function(){
    return `I am doing ${this.task} and it took me ${this.timeTaken} to complete it`
}
let task8Obj = {task,timeTaken,isCompleted,AllCombined}
console.log(task8Obj);  // task 8

let i = 0
let computedObj = {
    [`A${++i}`]: i, 
    [`B${++i}`]: i,
    [`C${++i}`]: i
}
console.log(computedObj); // task 9
