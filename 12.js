//classes & Objects
const student = {
    fullname : "narayan",
    marks : 54,
     printMarks : function () { // function are method
      //   console.log("marks =",marks);
     },
};

// ` ${}`
let age = 35
let profe = "Developer"
// console.log("My age is", age, "And i am a ", profe)
// console.log(`My age is ${age} And i am a ${profe}`)

let marks = 45
let subject = "math";
// console.log(`my marks${marks} and my subject ${subject}`)



 function Add(){
   let a =10;
   let b=20;
   return +b // 30
 }

let a = Add() // 30

let cart = 500

console.log(cart + a)