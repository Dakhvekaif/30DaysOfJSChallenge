function simulatingError(){
    return new Promise((reject)=>{
        setTimeout(()=>{
           reject(new Error("Simulated error occured"))
        })
    })
}

async function asynccall(){
    try{
    const result = await simulatingError()
    console.log(result);
    } catch (error){
        console.log(error.message);
    }
}
// asynccall() // task 1 and task 7

function task2(num1,num2){
    try {
        if(num2==0) throw new Error("Dinominator zz cannot zero")
        else{
            let result = num1/num2
            console.log(result);
            }
    } catch (error) {
        console.log(error.message);
    }
}
// task2(10,0)  // task 2

function mailbox(){
    return new Promise((resolve,reject)=>{
        if(Math.random() > 0.5){
            resolve("Mail received");
        } else {
            reject(new Error("Mail not received"))
        }
    });
}

// try {
//     // let result = mailbox()
//     mailbox().then((value)=>{
//         console.log(value);
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })
//     .finally(()=>{
//         console.log("Experiment completed");
//     })
// } catch (error) {
//     console.log(error);
// }       // task 3 and task 6


class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "validationError";
    }
}

function test(){
    throw new ValidationError("whoopsie!!!")
}

try {
    test();
} catch (error) {
    console.log(error.message);    
    console.log(error.name);    
}       // task 4



function userData(str1,num){
    if(str1 === ""){
        throw new ValidationError("String is Empty")
    } else return `The string is ${str1} and the number is ${num}`
}
try {
    userData("",10) 
} catch (error) {
    console.log(error.message);
}   // task 5


//  try {
//     const response = fetch('https://restcountrie1s.com/v4.1/all');
//     response.catch((err)=>{
//         console.error("failed")
//     })
// } catch (error) {
//     console.log(error.message)
// }  // task 8

function callingData(){
    return new Promise((resolve,reject)=>{
        let response = fetch('https://restcountries.com/v4.1/all')
        if(response.ok){
            resolve()
        } else return reject("rejected")
    })
    }

async function task9(){
    const invalidURL = "https://invalidurl.com/data";
    try {
        const response = await fetch(invalidURL)
    if(!response.ok){
        throw new Error("!HTTP Error" , response.status)
    }
    const data = await response.json()
    console.log("data received : ", data);
    } catch (error) {
        console.error("An Error occured ", error.message);
    }
}
task9()  // task 9
