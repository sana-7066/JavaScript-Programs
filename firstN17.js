/**
 * to get first element of array
 * if n is passed then return first n numbers
 */

function retArray(arr,n=1)
{
    
    if(n<0)
    {
        return arr.slice(0,0);
    }
    return arr.slice(0,n);
}

console.log(retArray([1,2,3,6,7,8],-8))
console.log(retArray([1,2,3,6,7,8]))
console.log(retArray([1,2,3,6,7,8],3))
console.log(retArray([],3))
console.log(retArray([1,2,3,6,7,8],8))