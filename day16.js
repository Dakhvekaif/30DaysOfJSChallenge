function factorial(n){
    if(n < 0){
        return "Please enter a number bigger than 0"
    }
    if(n==0 || n == 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(6));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(-5));     // task 1

function fibonacci(n){
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));     // task 2


function sumOfAll(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0] + sumOfAll(arr.slice(1));
}
console.log(sumOfAll([1,2,3,4,5]));     // task 3

