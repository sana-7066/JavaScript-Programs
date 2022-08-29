/**
 * Hoisting in javascript moving function declaration and variable declaration on upperside 
 * of scope(imp word)
 */
console.log(a);// it will print undefined .because of javaScript hoisting var a will move to the upperside at the time of compilation
               
var a = 10
console.log(a);// now a = 10 allocated so output will be 10