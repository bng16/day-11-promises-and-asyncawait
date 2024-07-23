
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




// const secondPromise=(msg)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(msg);
//         },1000)
//     })
// }

// secondPromise('hihi').then((resolve) => {
//     console.log(resolve);
//     return secondPromise("hihi2");
// }).then((result) => {
//     console.log(result);
//     return secondPromise("hihi3");
// }).then((result) => {
//     console.log(result);
//     return secondPromise("completed!");
// }).then((result) => {
//     console.log(result);
// })


// const thirdPromise= ()=>{
//     return new Promise((resolve, reject) => {
//         const randNumb=Math.random();
//         if (randNumb>=0.5) {
//             resolve([randNumb,'grater']);
//         }else{
//             reject([randNumb,"lower"]);
//         }
//     })
// }


// async function dodo(){
//     try{
//         let result = await thirdPromise();
//         console.log(`the number is ${result[0] }and it is ${result[1]} then equal to 0.5`);
//     }catch(result){
//         console.log(`the number is ${result[0] }and it is ${result[1]} then 0.5`);
//     }
// }

// dodo();
// for (let i=0;i<10000;i++){
//     console.log(i);
// }


async function fetchData(){
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
        console.log("network response is not ok");
    }
    const data=await response.json();
    console.log(data);

    }catch(e){
        console.log("Error",e);
    }

}

fetchData();