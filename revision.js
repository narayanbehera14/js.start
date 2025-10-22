//  JavaScript Basic -> Advanced (All-in-One)

/* What is JavaScript
=> JavaScript is a programming language used to make web pages
interactive(like button,popup,animation,etc)

//1.Basic

//------------------------------------// 

//1.1 Hello World (HTML)

<script>
  alert ("Hello World");
  </script>

  //-------------------------------------//

  //1.2 Variables
variable store data values

 let name = "Narayan";
 const age = 22;
 var city = " Mumbai";
 
 //---------------------------------------//


 //1.3 Data Type ( Different types of data you can store)


let name1 = "Behera";                     //String
let age1 = 23;                           //Number
let isStudent = true;                   //Boolean
let x ;                                  //Undefiend
let y = null;                               //Null
let fruits = ["apple","orange","grapes"];          //Array
let person = {name : "liju", age : 24,};           //object

//----------------------------------------------------------//

//1.4 Operators ( used to perform operaton)

let a = 10 , b = 5 ;
console.log(a + b);            //Arithmetic
 console.log(a == b);         //Comparison
 console.log(a && b);        //equality
 console.log(a > b);        //Logical


 //---------------------------------------------------------//

 //1.5 Coditional Statements ( used to make decisions)

 let age2 = 18 ;
 if ( age2 >= 18) console.log("Adult");
 else console.log("Minor");

 //-------------------------------------------------------//


 //1.6 Loops ( repeat code multiple times)


 for (let i = 1; i++ ; i<=3 ) console.log("count:",i);


//------------------------------------------------------//


//1.7 Function ( reusable blocks of code)


function great(name2) {return "hello"+ name2;}
console.log(great("Narayan"));

//----------------------------------------------------------//


//2.1 Arrays ( store multiple values in one variable)


let fruits1 = ["apple","banana","mango"];
fruits1.push("orange");
console.log(fruits1[2]);   //mango

//-------------------------------------------------//


//2.2 Object ( store as key-value pairs)


let person2 = { name3 :"liju", age : 54};
console.log(person2.name3);

//-------------------------------------------//


//2.3 Arrow Function (shorter way to write function)


const add = (a,b) => a+b ;
console.log(add(2,3));

//----------------------------------------//


//2.4 Template Literals (use backticks for easy string formatting)

 
let name4 = "rohan";
console.log(`hello , ${name4}!`);

//----------------------------------------//


//2.5 DOM Manipulation (change HTML content using JS)


<p id="demo">Hello</p>
<script>
document.getElementById("demo").innerText = "Hi Narayan!";
</script>

//----------------------------------------------//


//2.6 Events (run code when something happens)


<button onClick= "sayHi()">Click Me</button>
<script>
  function sayHi() { alert("Button Clicked!"); }
</script>

//---------------------------------------------//


//2.7 Array Methods ( useful built-in methods)


let num = [1,2,3,4];
console.log(num.map(x => x*2)); //[2,4,6,8]
console.log(num.filter(x => x*2));

//------------------------------------------//


//3.1 Promises ( handle asynchronous operation like APIs)


let promise = new Promise((resolve,reject) => resolve ("Success"));
promise.then(msg => console.log(msg));

//--------------------------------------------//


//3.2 Async/Await (simpler way to handle promises)


async function fetchData() {
  let Data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let result = await Data.json();
  console.log(result);
  
}
fetchData();

//----------------------------------------//


//3.3 Classes (blueprint for creating objects)


class person7{
  constructor(name) { this.name = name ;}
  greet() { console.log("Hello,"+ this.name);}

}
let p1 = new person("Narayan");
p1.great();

//-------------------------------------------//


//3.4 Fetch API ( used to get data from server)


fetch("https://api.github.com/users/octocat")
.then(res => res.json())
.then(data => console.log(data));

//-------------------------------------------------//


//3.5 JSON ( used to send data between client and server)


let obj = {name:"mahul",age:54};
let json = JSON.stringify(obj);
console.log(json);

//-------------------------------------------//