// const result = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved")
//     },2000)
// })

// result.then((value)=> console.log(value)) // task 1

// const task2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Promise rejected")
//     },2000)
// })

// task2.catch((value)=>{
//     console.log(value);
// })

// fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json)) // task 3 and 6th

function resolvePromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("resolved")
        },5000)
    })
}

async function asynccall(){
    const result = await resolvePromise();
    console.log(result);
    console.log("Running");
}
// asynccall()  // task 4

function simulateError(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Simulated error occured"))
        })
    })
}

async function handlingTheError(){
    try {
        const result = await simulateError()
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
// handlingTheError()  // task 5

function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

async function showData(){
    const result = await getData()
    console.log(result);
}
showData()      // task 7

const promise1 = Promise.resolve(5)
const promise2 = 10
const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolved")
    })
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})  // task 8

Promise.race([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})
// task 9