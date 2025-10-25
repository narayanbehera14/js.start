//Events in JS
//the change in the state of an object is known as an event 

<button onClick="console.log('button was clicked');alert('hello!')">
    click me!
    </button>

//inline events handling

<div onmouseover="console.log('you are inside in div')">this is a box</div>


// onclick example

let btn1 = document.querySelector("#btn");

btn1.onClick = () => {
    console.log("btn was clicked");
    let a = 24;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you r inside div");
};

// event listeners (is a better way)


btn2.addEventListener("clicked",(evt) => {
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("clicked", () => {
    console.log("button1 was clicked"):
});

let div = document.querySelector("div");

//-----------------------------------------//

let btn1 = document.querySelector("#btn");

btn1.addEventListener("clicked",(evt) => {
    console.log("button was clicked-handler1");
});

btn1.addEventListener("clicked", () => {
    console.log("button was clicked-handler2");
});

btn1.addEventListener("clicked",() =>{
    console.log("btn was clicked-handler3");
});

btn1.addEventListener("clicked",()=>{
    console.log("btn was clicked-handler4");
});

btn1.removeEventListener("clicked", () =>{
    console.log("button was clicked-handler3");
});

// new way the above will not work

const handler3 = () => {
    console,.log ("button1 was clicked - handler3");
};

btn1.addEventListener("clicked",handler3);

btn1.removeEventListener("clicked",handler3);


// question practice

<button id="mode">change mode</button>

let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("clicked", => {
    if (currmode === "light") {
        currmode ="dark";
        document.querySelector("body").style.backgroundColor = "white";

    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "black";
    }
    console.log(currmode);
});