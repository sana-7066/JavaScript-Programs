//pass by value and pass by reference.

//pass by value (for all primitive datatypes are gonna pass by value)
let a = 10
let b ="Hi"
let c = a
c+=1;
console.log(c)
console.log(a)
//variable          value
//a                 10
//b                 Hi
//c                 11

// composite datatypes are gonna pass by reference
let d = [1,2];
let e = d;

//variable          value
//d                 <0x01>(value of d will be address inside the array is stored)
console.log({a:1}=={a:1})
console.log({a:1}==={a:1})
//o/p will be false false
//because object is going to pass by reference both object will have different refernces