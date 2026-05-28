function add1000(){
    let result = 0;
    for(let i = 0; i < 1000000000; i++){
        result += i;
    }
    return result;
}


// TODO : Convert the add1000 function to an asynchronous function using Promises
// function add1000Async(){
//     return new Promise ((resolve, reject)=>{
//         let result = add1000();
//         if(result){
//             resolve(result);
//         }else{
//             reject('Error calculating the result');
//         }
//     });
// }

// console.log('Before calling add1000Async');
// add1000Async()
//     .then(result => result + 1000)
//     .then(result => console.log('Result : ', result))
//     .catch(error => console.log('Error : ', error));
// console.log('After calling add1000Async');

// TODO : Convert the add1000 function to an asynchronous function using async/await
async function add1000Later(){
    let result = await add1000();
    console.log(result);
}

console.log("Before Calling Async Function....");
add1000Later();
console.log("After Calling Async Function....")