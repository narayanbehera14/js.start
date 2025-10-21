//Understanding JavaScript Promises!


// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// // });

// //
// const getPromise = () => {
//     new Promise((resolve,reject) => {
//         console.log("i am a promise");
//         resolve("success");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fillfiled");
// });

// promise.catch((err) => {
//     console.log("rejected");

// });

function asyncFunc() {
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            console.log("some data1");
            resolve("sucess");
        },4000);
    });
}

console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});