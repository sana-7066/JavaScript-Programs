/*How do I convert an integer to binary in JavaScript?*/
const intToBinary = (num) => num.toString(2);

console.log(intToBinary(5));
console.log(intToBinary(-5));

/*For negative numbers above method will give you wrong output 
so it is better to use unsigned right shift operator 
like this (num >>> 0).toString(2)
*/

//After using below line instead of above one
/*    const intToBinary = (num) => num>0 ? num.toString(2) : (num >>> 0).toString(2);   */
//o/p of above will be 
//101
//11111111111111111111111111111011