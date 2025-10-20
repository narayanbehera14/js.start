// //sync
// // console.log("one")
// // console.log("two")
// // console.log("three");

// // async
// function hello () {
//     console.log ("hello");

// }
// setTimeout(hello,2000);

// //2nd type to write the above code
// setTimeout (() =>  {
//     console.log("hello");
// },4000);

// // async

// console.log("hii");
// console.log("hdf");

// setTimeout(() => {
//     console.log("heiilo");
// },5000);//timeout

// console.log("sdnc");
// console.log("dn")


// //callback
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// //settimeout also take callback

// const hello1 = () => {
//     console.log("hier");
// }

// setTimeout(hello1,5000);
// //nesting
// let age = 100;
// if (age >= 18) {
//     if(age >= 60 ){
//         console.log("younger");
//     } else {
//         console.log("older");
//     }
// } else {
//     console.log("adult")
// }
// //nesting loop
// for( let i = 0 ; i<5 ; i++) {
//     let str ="";
//     for (let j = 0; j <5 ; j++){
//         str = str +j ;

//     }
//     console.log(str);
// }
// //
// function getData(dataId) {
//     setTimeout(() => {

//         console.log("data",dataId);
        
//     },2000);
// }
// getData(1);
// getData(2);
// getData(3);

//
function getData(dataId,getNextData) {
    setTimeout(() => {
        console.log("data",dataId);
        getNextData();
    },2000);
}
    getData(1,() => {
        getData(2);
});