//reduce function of array 
// arr.reduce((accum,currentValue) => {/* ....*/},[initialValue])
const arr = [1,2,3,4,5];
const sum = arr.reduce((accum,curr) => accum * curr)
console.log(sum)