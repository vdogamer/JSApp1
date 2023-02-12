/*
const arr1 = ['one', 'string', 100, false, []];
console.log(arr1[2]);

const arr3 = [];

// first way to clone an array
arr1.forEach((ele, ind) => {
    console.log(ele);
    arr3[ind] = ele;
})
console.log(arr3);
arr3[4] = "CHANGED";

arr3.push('new val');
arr3.unshift('stupid value');   // adds new value to the beginning of the array

// second way to clone an array
const arr4 = arr1.map((el)=>{
    console.log(el);
    return el;
})
console.log(arr4);

// shortest way to clone an array
const arr5 = arr1.map((x)=>x);
*/

const person = {
    "firstName" : "Larry",
    "lastName" : "Stevens",
    "x1" : "one",
    "x2" : "two",
    "interests" :  ["JavaScript", "HTML5", "CSS3"]
}

console.log(person["firstName"]);
let x = 1;
console.log(person["x"+x]);
