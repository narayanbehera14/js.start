// function greeting(parameterVariable) {
//     console.log("Hello, World!");
//     console.log(parameterVariable);
// }

// // Call the function and pass a string
// greeting("Welcome to 10 Days of JavaScript!");


function pass(hiii) {
    console.log("hello");
    console.log(hiii);
}
pass("omg") 



//Arrays in JS (collection of items)


let heroes = ["ironman","hulk","thor"];
let marks = [78,58.9,44,86,41];
let info = ["rahul",57,"delhi"];
 console.log("info");


 //String are immutable
 //Array are muttable


 for (let idx = 0; idx < herores.length;idx++) {
    console.log(heroes[idx]);
 } 

 //-------------------------------------//

 let items = [251,578,25,351,789];

 let i = 0;
 for (let val of items){

    console.log(`value at index ${i} = {val}`);
    let offer = val / 10;
    items[i] = items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
 }
 //differnt way to write the above code

 let items = [44,889,745,41,22];

 for (let i = 0; i< items.length;i++) {
    let offer = items / 10;
    items[i] -= offer;
 }

 console.log(items);

 //array method
 // push():add to end

 let fooditems = ["potato","apple","litchi","tomato"];
 fooditems.push("soup");
 console.log(fooditems);


 //pop(): delete from end & return

 let deleteitem = fooditems.pop();
 console.log("deleted",deleteitem);

 //toString(): converts array to string

 console.log(fooditems.toString());

 //concat(): join multiple arrays & return result

let name = ["ram","raj"];
let age = [14,58,58]
let mix = name.concat(age);
console.log(mix);

 //unshift():add to start


 //shift():delete from start & return

 let arr = [1, 2, 3]
 arr.filter()