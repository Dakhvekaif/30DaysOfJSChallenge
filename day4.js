// Task - 1 Write a program to print numbers from 1 to 10 using a loop.

const printNumbers = function(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
// console.log(printNumbers());

// Task - 2 Write a program to print the multiplication table of 5 using a for loop

const tableOfFive = function(){
    for(let i=1; i<=10; i++){
        let result = 5 * i
        console.log(`5 x ${i} = ${result}`);
    }
}
// console.log(tableOfFive());

// Task - 3 Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

const sumOfNum = function(){
    let currentNumber = 1
    let sum = 0;
    while(currentNumber!=11){
        sum += currentNumber
        currentNumber++
    }
    return sum
}
// console.log(sumOfNum());

// Task - 4 Write a program to print the numbers from 10 to 1 using a while loop

const reverseNumPrinting = function(){
    let currentNumber = 10
    while(currentNumber!=0){
        console.log(currentNumber);
        currentNumber--
    }
}
// console.log(reverseNumPrinting());

// Task - 5 Write a program to print numbers from 1 to 5 using a do while loop

const PrintOnetoFive = function(){
    let i=0
    do{
        i+= 1;
        console.log(i);
    } while (i < 5)
}
// console.log(PrintOnetoFive());

// Task - 6 Write a program to calculate the factorial of a number using do while loop.

const factorialNumber = function(number){
    let result = 1;
    let currentNumber = number
    do{
        result *=  currentNumber
        currentNumber--
    } while(currentNumber>0)
    return result
}

console.log(factorialNumber(7));

// Task - 7 Write a program to print a pattern using nested for loop.

const pattern = function(){
    let star = ""
    for(let i = 1; i <= 5; i++){
        for(let j=1;j<=i;j++){
            star += `*`
        }
        console.log(star);
        star = "";
    }
}
console.log(pattern());

// Task - 8 Write a program to print number from 1 to 10, but skip 5 using continue statement

const continuePractice = function(){
let number = 1;
for (let i = 0; i < 10; i++) {
    if (number === 5) {
        number++
        continue;
    }
    console.log(number);
    number++
    }
}

// console.log(continuePractice());

// Task - 8 Write a program to print number from 1 to 10, but stop the loop when the number is 7 using break statement


const breakPractice = function(){

    for (let i = 1; i < 10; i++) {     
        if (i == 7) break;
        else console.log(i);
    }
}
console.log(breakPractice());