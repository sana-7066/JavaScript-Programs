const a =3;
const b = new Number(3);
const c = 3;

console.log(a==b);
console.log(a===b);
console.log(b===c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//o/p
/*
true
false
false
new Number() is a built-in function constructor. 
Although it looks like a number, 
it's not really a number: it has a bunch of extra features and is an object.*/