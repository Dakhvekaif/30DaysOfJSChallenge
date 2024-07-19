const task1 = [1,2,3,4,5] // task 1
console.log(task1);
console.log(task1[0],task1[4]); // task 2
task1.push(6)
console.log(task1); // task 3
task1.pop()
console.log(task1); // task 4
task1.shift()
console.log(task1); // task 5
task1.unshift(0,1);
console.log(task1); // task 6

const newArray = [5,10,20,25]

const mapfunction = newArray.map((x)=>{
    return x * 2
})
console.log(mapfunction); // task 7 

const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const filter1 = numArray.filter((num)=>{
    return num % 2 == 0
})
console.log(filter1); // task 8


const initialValue = 0
const reducer1 = numArray.reduce((accumulator,currentValue)=> accumulator + currentValue);
console.log(reducer1); // task 9

for(i=0;i<=numArray.length-1;i++){
    // console.log(numArray[i]);
}                      // task 10

console.log(numArray.forEach((num)=>{
    // console.log(num);
}));                   // task 11

const twodArray = [[1,2,8],
    [8,7,10],
    [5,7,9]
]
console.log(twodArray);  // task 12

console.log(twodArray[0][1]);
console.log(twodArray[2][2]);  // task 13
