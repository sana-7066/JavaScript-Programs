//Find out min and max of array and return it as an array
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
console.log(minMax([1,5,7,4,7,9,6,8,0,6]));


//spread operator gives array elements in separate manner also object's field , you can create clone of array or object using spread operator
// but spread and assign operator does partial deep copying in composite datatypes(non primitive datatypes).
// if you want to achieve fully deep copy need to use it logically
// ...arr => 5 5 3 arr => [5,5,3]

//rest parameter is defferent way to handle function parameter , any number of arguements can be used  , arguments will be represent as array 
//spread operator converts array elements in separate elements where rest operator converts different arguments in an array
const user ={
  name : "Nisha",
  location : {
    city : "Delhi",
    country : "India"
  }
};
const copy = {...user}
// copy.location.city = "GOA";
copy.name ="sana"
console.log(user);
console.log(copy);

//11-10-2022
// revise deep copy shallow copy, pass by value pass by refernce ,spread operator and rest parameter 
//3rd day full revision no problem solving and guess output