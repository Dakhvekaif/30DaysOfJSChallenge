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

function maxNum(arr){
    if(arr.length === 1){
        return arr[0]
    }
    return Math.max(arr[arr.length - 1], maxNum(arr.slice(0,-1)))
}

console.log(maxNum([122,789,4,111,13]));    // task 4

function reverseStr(str){
    if(str.length <= 1){
        return str
    }
    return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr("wassup"));      // task 5

function findPalindrome(string){
    if(string.length <= 1){
        return true
    }
    if(string[0] !== string[string.length - 1]){
        return false
    }
    return findPalindrome(string.substring(1, string.length - 1)) 
}

console.log(findPalindrome("madam"));
console.log(findPalindrome("Hero"));
console.log(findPalindrome("1221"));    // task 6

function binarySearch(arr,target){
    function search(low,high){
        if(low > high){
            return `Target not Found`
        }

    const mid = Math.floor((low + high) / 2)
        if(arr[mid] === target){
            return `Target found at index : ${mid}`
        }

        if(target < arr[mid]){
            return search(low, mid - 1)
        } else{
            return search(mid + 1,high)
        }
    }
    return search(0, arr.length - 1)
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],9));   // task 7

function countOccurence(arr,target){
    if(arr.length == 0 ){
        return 0
    }
    let count = arr[0] === target ? 1 : 0;
    return count + countOccurence(arr.slice(1),target)
}

console.log(countOccurence([2,2,2,2,5,1,2,7,6,2],2));
console.log(countOccurence([1,2,5,6,74,3,4,5,5,4],5));  // task 8