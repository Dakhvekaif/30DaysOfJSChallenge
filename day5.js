// Task - 1 Write a function to check if a number is even or odd and log the result to the console.

function Evenodd(number){
    let result = number % 2 == 0 ? `Its a even number` : `Its a odd number`
    return result
}
console.log(Evenodd(99));

// Task - 2 Write a function to calculate the square of a number and return the result

function Square(number){
    return number * number
}
console.log(Square(100))

// Task - 3 Write a function expression to find the maximum of two numbers and log the result to the console.

const MaxOf2nums = function(num1,num2){
    if(num1 == num2) return `Both numbers are equal`
    else if(num1 > num2) return `${num1} is maximum`
    else return `${num2} is maximum`
}
console.log(MaxOf2nums(11,12));

// Task - 4 Write a function expression to concatinate two strings and return the result

const joiningString = function(str1,str2){
    
    return str1.concat(" ", str2)
}
console.log(joiningString("hello bhai","Chai piyoge?"));

// Task - 5 Write a function expression to calculate the sum of two numbers and return the result

const sumOfTwo = (num1,num2)=>{
    return num1 + num2
}
console.log(sumOfTwo(50,12));

// Task - 6 Write a function expression to concatinate two strings and return the result

const checkString = (str,char)=>{
    let result = str.includes(char)
    return result
}
console.log(checkString("hello", "l"));

// Task - 7 Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

const task7 = function(num1,num2 = 2){
     return num1 * num2
}
console.log(task7(87,10));

// Task - 8 Write a function that takes a persons name and age and returns a greeting message. provide a default value for the age.

const greeting = function(name, age = 18){
    return `Hello my name is ${name} and my age is ${age}`
}
console.log(greeting("Kaif",21));

// Task - 9 Write a high-order function that takes a function and a number, and calls the function that many times.

function function1(){
    return `Function is called`
} 

const highOrderFunc = function(func,num1){
    for(i=1;i<=num1;i++){
        console.log(func())
    }
}
// highOrderFunc(function1,5);

// Task - 10 Write a high-order function that takes a two functions and a value, applies the first function to the value and then applies the second function to the result

function takevalue(num){
    return num
}

function setvalue(value){
    console.log(`The value given to set is ${value}`);
}

const task10 = function(func1,func2,value){
    let result = func1(value)
    func2(result);
}
task10(takevalue,setvalue,10)