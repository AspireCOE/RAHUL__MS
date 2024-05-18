console.log("First");
setTimeout(()=>console.log("Second"),2000);
console.log("Third");

//Promises
// Three States => Pending,Fulfilled,Rejected
// Promises =>{resolve,reject}

const myPromise=new Promise((resolve,reject)=>{
    const error=false;
    if(!error){
        resolve("Yes! resolved the promise");
    }
    else{
        reject("No! rejected the promise");
    }
})

// console.log(myPromise);
// //For printing the exact output we use (then)
// myPromise.
// then((value)=>{
//     return value+" Processed";
// }).
// then((newValue)=>{
//     console.log(newValue);
// }).
// catch((err)=>{
//     console.log(err);
// })
 const myNextPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("myNextPromise resolved")},3000)
 })

 myNextPromise.then((value)=>{
    console.log(value);
 })

 myPromise.then((value)=>{
    console.log(value);
 });

 

