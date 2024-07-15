// Task - 1 write a program to check if a number is positive,negative or zero, and log the result to the console

const checkNum = function(number){
    if(number < 0) return `${number} is negative`
    else if(number === 0) return `The number is equal to zero`
    else return `${number} is positive`
}

console.log(checkNum(-1));

// Task - 2 write a program to check if a person is eligible to vote (age>= 18) and log the result to the console

const checkAge = function(age){
    if(age >= 18){
        return `This Person is Eligible to vote`
    } else return `This person is below 18 and not eligible to vote`
}

console.log(checkAge(18));

// Task - 3 write a program to find the largest of three numbers using nested if else statements.

const largestNum = function(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return `The largest number is : ${num1}`
    } else if(num2 > num3){
        return `The largest number is : ${num2}`
    } else return `The largest number is : ${num3}`
}

console.log(largestNum(1011,700,100));

// Task - 4 write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the ans to console

const checkDay = function(number){
    switch(number){
        case 1: return `you selected Monday`
        case 2: return `you selected Tuesday`
        case 3: return `you selected Wednesday`
        case 4: return `you selected Thursday`
        case 5: return `you selected Friday`
        case 6: return `you selected Saturday`
        case 7: return `you selected Sunday`
        default: return `Please enter a number between 1 to 7`
    }
}

console.log(checkDay(0));
console.log(checkDay(5));

// Task - 5 write a program that uses a switch case that assigns a grade based on a score and log the grade to console

const checkGrades = function(score){
    let grade;
    switch(score!=0){
        case (score >= 90): 
        grade = "A";
        return grade;
        case (score >= 80): 
        grade = "B";
        return grade;
        case (score >= 70): 
        grade = "c";
        return grade;
        case (score >= 60): 
        grade = "D";
        return grade;
        case (score >= 50): 
        grade = "E";
        return grade;
        default:
            grade = "F"
            return grade
    }
}

console.log(checkGrades(40));

// Task - 6 write a program that use the ternary operator to check if a number is even or odd and log the result to console

const evenOddCheck = function(num){
    let results = num % 2 == 0 ? `The Number : ${num} is a Even number ` : `The Number : ${num} is a Odd number`
    return results
}

console.log(evenOddCheck(1));

// Task - 7 write a program o check if a year is a leap year using multiple conditions (divisble by 4, but not unless also divisible by 400 ) and log the results

const leapYear = function(year){
    if (year % 400 === 0) {
        return `The year: ${year} is a leap year`;
    } else if (year % 100 === 0) {
        return `The year: ${year} is not a leap year`;
    } else if (year % 4 === 0) {
        return `The year: ${year} is a leap year`;
    } else {
        return `The year: ${year} is not a leap year`;
    }
}

console.log(leapYear(2000));

