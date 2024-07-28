import userData1, { sum, person, multiply } from './day13_myModule.mjs';
import * as myModule from './day13_myModule.mjs';
import _ from 'lodash';
import axios from 'axios';

console.log(sum(10,20));    // task 1

console.log(person); // task 2

console.log(multiply(10,10)); // task 3
console.log(userData1()) // task 4

console.log(myModule.Course_name);
console.log(myModule.divide(20,10));    // task 5

const numbers = [1,2,3,4,5,6,7,8,9,10]
const chunks = _.chunk(numbers, 3)
console.log(chunks);

const duplicates = [1,2,3,4,4,5,6,7,5,3,4,4,5,6,]
const uniqueValues = _.uniq(duplicates)
console.log(uniqueValues);  // task 6


const postData =  {
    title: "Hello",
    body: "laptop",
    userID : 1
}

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
.then(response =>{
    console.log(response.data);
})      // task 7




