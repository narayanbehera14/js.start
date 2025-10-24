// DOM part1
//selecting with id

const { Children } = require("react");

document.getElementById("myid")

//selecting with class

document.getElementsByClassName("myclass")


//Selecting with tag

document.getElementsByTagName("p")

//query selector (nodelist)

let element = document.querySelector("p"); //1st element
console.log(firstEl);

let allEl = document.querySelectorAll("p") //1st element
console.dir(allEl);

let element1 = document.querySelector(".class") // to access class

let element2 = document.querySelector("#id") // to access id

//DOM manipulation propertites(change,get,updated )

// tagName : return tag for element Nodes 
// innerText : return the text content of the element and
//  all its Children (it return all text use in html )

let element3 = document.querySelector("div");
div.innerText
//to change tetx in HTML
div.innerText = "ABCD";
// innerHTML : return the plain text or HTML contents in the element(it return all tag use in html )

let element7 = document.querySelector("div");
div.innerHTML
//to change tag in HTML
div.innerHTML = "<div>inner div</div>"

// textContent : return textual content even for hidden elements



//let practice
// 1 craete a H2 heading element with text - "Hello JavaScript".Append"from Apna College student" to this text using js
<h2>Hello javascript</h2>
let h2 = document.querySelector("h2");
console.dir(h2);

h2.innerText =  h2.innerText + "from apna college"; //concatenate is use to add two string

// 2 create 3 div with common class name- "box".Access them & add some unique text to each of them

<div class="box">narayan</div>
<div class = "box">liju</div>
<div class = "box">Behera</div>

let divs = document.querySelectorAll(".boxs");
divs[0].innerText = "bro";
divs[1].innerText = "ansh";
divs[2].innerText = "arman";

//2nd method to write this 

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// Attributes 
//getAttribute(attr) to get the attribute value

<div id = "box" name="hello">this is a div</div>

let div = document.querySelector("div");
console.log("div");

let id = div.getAttribute("id");
console.log(id);

// another example

<p class = "para">example</p>

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribute (to set the attribute value)

para.setAttribute("class","123");

//style (node.style) it used change the css file by JS

let div = document.querySelector("div");
div.style.backgroundColor = "red";
div.style.backgroundColor = "black";
div.style.font = "22";


//insert element 

//node.append (add at the end of node inside)
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

//node.prepend (add at the start of node inside)
let newheading = document.createElement("h1");
h1.innerHTML = "<i>hi,i am new</i>";

document.querySelector("body").prepend

//node.before (add before the node outside)
div.before(newbtn);

//node.after (add after the node outside)
div.after(newbtn);

//delete elemnent
//node.remove (remove the node)


// 1 question lets practice
//creata a new button element. give it a text "click me", background color of res & text color of white insert the button as the element inside the body tag.

let newbtn = document.createElement("button");
newbtn.innerText="click me";
newbtn.style.color="red";
newbtn.style.backgroundColor="red";

document.querySelector("body").prepend(newbtn);