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

// // promise.catch((err) => {
// //     console.log("rejected");

// // });

// function asyncFunc() {
//     return new Promise((resolve,reject) => {
//         setTimeout (() => {
//             console.log("some data1");
//             resolve("sucess");
//         },4000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2");
// let p2 = asyncFunc();
// p2.then((res) => {
//     console.log(res);
// });

// // promise chain just the code 
// GamepadHapticActuator((res)=>{
//     return GamepadHapticActuator(2);
// })
// .then((res) => {
//     return GamepadHapticActuator(3);
// })
// .then((res) => {
//     console.log(success);
// });

//Async-wait it is used to simple promise

//  async function hello (){
//     console.log("hello");
// }

// //
// function api (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getweatherdata() {
//     await api();
//     await api();
// }
// getweatherdata ();

//async-await
// async function allgetdata() {
//     console.log('getting data 1');
//     await getdata(1);
//     console.log('getting datat2 ');
//     await getdata(2);   
//     await getdata(3); 
// }

// allgetdata();
// callback 

// / myfunction()
//  function myfunction(){
//      console.log("hey");
//  console.log("hiiiii");
//  }
// myfunction()

// function narayan(){
//     console.log("behera");
// };
//callback example


