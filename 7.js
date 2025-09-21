// function  myfun (num){
//     return num

// // }
// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

// const num = [1,2,5,8,7];
// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val,idx)=> {
//     console.log(val.toLocaleUpperCase(),idx,arr);
// });

// let num = [84,62,89];
// num.forEach((num)=> {
//     console.log(num*num);
// // });

// let nums = [67,89,52];

// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr);

// const arr = [1,5,10,8,9];

// const evenarr = arr.filter((val)=> {
//     return val % 2 === 0 ;

// });
// console.log(evenarr);


// const arr = [1,5,10,8,9];

// const evenarr = arr.filter((val)=> {
//     return val < 2  ;

// });
// console.log(evenarr);

// let arr = [1,2,3,6];

// const output = arr.reduce((res,curr)=> {
//     return res + curr;
// });
// console.log(output);

// const marks = [57,89,91,87,52];

// let topper = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(topper);

let n = prompt("enter a number:");

let arr =[];
for (let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);
arr.reduce((prev,curr)=>{
    return res + curr ;
});
console.log(sum);