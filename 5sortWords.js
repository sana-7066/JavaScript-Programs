/**
 * Sort the words and number array
 */
//Ascending Order
arr = ["sana","guddi","shahin","amaira","nawaz"]
console.log(arr.sort());

//Descending Order

console.log(arr.sort((a,b)=>{
    if(a>b)
      return -1;
    else if(b>a)
      return 1;
    else 
      return 0;
}))
arr2 = [2,3,4,1,4,7,8,9,11,12];
//Ascending order
console.log(arr2.sort((a,b)=>(a-b)))
//Descending order
console.log(arr2.sort((a,b)=>(b-a)))
//Tip: Sort function of array sorts the array element in ascending order .it consider the elements as a string and sort according to it.