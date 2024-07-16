//  Activity -1 Arithmetic operations

// Task -1 Write a program to add two numbers and log the result to the console

const addNum = function(num1,num2){
    return num1 + num2
}
console.log(addNum(1,2));  

// Task - 2 Write a program to subract two numbers and log the result to the console

const subNum = function(num1,num2){
    return num1 - num2
}
console.log(subNum(20,10)); 

// Task -3 Write a program to multiply two numbers and log the result to the console

const multiplyNum = function(num1,num2){
    return num1 * num2
}
console.log(multiplyNum(10,5));

// Task -4 Write a program to divide two numbers and log the result to the console

const divideNum = function(num1,num2){
    return num1 / num2;
}
console.log(divideNum(10,2));

// Task -5 Write a program to find the remainder when one number is divided by another and log the result to the console

const remainderFinder = function(num1,num2){
    return num1 % num2;
}
console.log(remainderFinder(20,3));

//  Activity -2 Assignment operations

// Task -6 += operator to add the number to a variable and log the result to the console

let x = 5
x += 3
console.log(x);

// Task -7 -= operator to subtract the number to a variable and log the result to the console

let y = 10
y += 3
console.log(y);

// Task -8 Write a program to compare two numbers using > and < and log the result to the console

const largerNum = function(num1,num2,num3){
    if(num1 < num2 && num3 < num2){
        return `${num2} is the largest`
    } else if(num1 > num2 && num1 > num3){
        return `${num1} is the largest`
    } else return `${num3} is the largest`
}

console.log(largerNum(50,20,30));

// Task -9 Write a program to compare two numbers using >= and <= and log the result to the console

const task9 = function(num1,num2){
    if(num1<=num2){
        return `Task done`
    } else if(num1 >= num2){
        return `Task not done`
    }
}
console.log(task9(70,50));

const task10 = function(num1,num2){
    if(num1==num2){
        console.log("loop1 running")
        if(num1===num2) return "loop 2 running"
    }
}
console.log(task10(33,"33"));

// Task - 11,12,13 Write a program to compare two numbers using >= and <= and log the result to the console

let condition1 = false;
let condition2 = true;

let result = (!condition1 || condition2) && (condition1 || !condition2);

console.log("The result of combining the conditions is:", result);

task14 = function(num){
    let result = num >= 0 ? `The number ${num} is positive` :  `The number ${num} is negative`
    return result
}

console.log(task14(-100));