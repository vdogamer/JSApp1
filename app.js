const arr1 = ['one', 'string', 100, false, []];
console.log(arr1[2]);

const arr3 = [];
arr1.forEach((ele, ind) => {
    console.log(ele);
    arr3[ind] = ele;
})
console.log(arr3);
arr3[4] = "CHANGED";