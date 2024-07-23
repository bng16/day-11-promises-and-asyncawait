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


// const secondPromise=(msg, time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((msg)=>{
//             resolve(msg);
//         },time)
//     })
// }

// secondPromise("hihi1",1000).then((resolve)=>{
//     console.log(resolve);
//     return secondPromise("hihi2",1000)
// }).then((resolve)=>{
//     console.log(resolve);
//     return secondPromise("hihi3",1000)
// })


const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 1000);
    });
};

const asyncFunction = async () => {
    try {
        const result = await myPromise();
        console.log(result); // Logs: "Promise resolved!" after 1 second
    } catch (error) {
        console.error(error);
    }
};

asyncFunction();
