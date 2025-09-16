 // for ( i = 20;i>=5;i--){
// // // // // //     console.log(i);
// // for (let i = 5; i <= 20; i++) {
// // // // //     console.log(i);
// // // // // }

// // // // let heros= ["ironman","batman","superman",'aquaman']

// // // // for(let hero of heros){
// // // //     console.log(hero);
// // // // }

// // // const names=["raj","rahul","liju","narayan"]
// // // for(let name of names){
// // //     console.log(name);
// // // }

// // let marks = [25,23,78,9,6,21,47]
// // let sum =0

// // for(let val of marks){
// //     sum += val
// // }
// //  let avg = sum / marks.length
// //  console.log (`avg marks of the class = ${avg}`);

// //  const names = [`aliza,narayan,liju,rahul`]

// let marks = [250,645,300,900,50]
// let offer = 0
// for(let val of marks){
//     offer= val/10;
//     val = val - offer

// }

// console.log(offer)


// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;         // 10% discount
//     items[i] = items[i] - offer;       // apply discount
//     console.log(`Value after offer = ${items[i]}`);
// }


// let paise = [20,50,887,9,0,4]
// for(let i = 0; i < paise.length ; i++){
//     let money = paise[i]/10;
//     paise[i] = paise[i]-money ;
//     console.log(`value after offer = ${paise[i]}`);
// }

// let paise = [20,50,887,9,0,4]
// for(let i = 0; i < paise.length ; i++){
//     let money = paise[i]/10;
//     paise[i] = paise[i]-money ;
//     console.log("value after offer" = paise[i]);
// }
let paise = [20, 50, 887, 9, 0, 4];

for (let i = 0; i < paise.length; i++) {
    let money = paise[i] / 10;       // 10% discount
    paise[i] = paise[i] - money;     // update value
    console.log("value of pasie  = "+paise[i]);  // ✅ using +
}
