

function OuterFunc(){
    let count = 0;
    return function(){
        count++
        return count;
    };
}
const counter = OuterFunc();
console.log(counter());
console.log(counter());     //task 1
console.log(counter());     //task 
console.log(counter());     //task 2

function generateUniqueId() {
    let count = 0
    let uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`
    return function(){
        count++
        console.log(uniqueId);
        return `count is ${count}`
    }
  }
  
const uniq1 = generateUniqueId()
// console.log(uniq1());
// console.log(uniq1());
// console.log(uniq1());      // task 3

function greet(username){
    return function(){
        return `Welcome to the function ${username}`
    }
}

const hitesh = greet("hitesh")
console.log(hitesh());      // task 4

function func1(){
    return `Function 1`
}
function func2(){
    return `Function 2`
}
function func3(){
    return `Function 3`
}

let arrOfFunction = [func1, func2,func3]
for(let index of arrOfFunction){
    console.log(index());
}       // task 5

function task6(){
    let list = ["item1","item2","item3","item4","item5","item6","item7"]
    return {
        add: function(value){
            list.push(value)
            console.log(list);
        },
        remove: function(value){
            list = list.filter((item)=> item !== value)
            console.log(list);
        }
    }
}

let list1 = task6();
list1.remove("item5"); 
list1.add("item8");     // task 6

function memoize(fn){
    let store = new Map();
    return function(...args){
        const key = JSON.stringify(args)
        const value = fn(...args)
        store.set(key,value)
        return value
    }
}

function factorialIterative(n) {
    if (n < 0) {
        return "Invalid input, factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const task8 = memoize(factorialIterative);
console.log(task8(5));      // task 7 and 8
