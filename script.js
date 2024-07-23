
// const firstPromise=new Promise((resolve, reject)=>{
//     const randomNum=Math.random();
//     console.log(randomNum);

//     setTimeout(()=>{
//         if (randomNum>0.5){
//             resolve('biswajitnag');
//         }else{
//             reject("bobo");
//         }
//     }, 2000);
// })

// firstPromise.then((result)=>{
//     console.log(result);
// })
// firstPromise.catch((result)=>{
//     console.log(result);
// })




const secondPromise=(msg)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(msg);
        },1000)
    })
}

secondPromise('hihi').then((resolve) => {
    console.log(resolve);
    return secondPromise("hihi2");
}).then((result) => {
    console.log(result);
    return secondPromise("hihi3");
}).then((result) => {
    console.log(result);
    return secondPromise("completed!");
}).then((result) => {
    console.log(result);
})