/**
 * to get last element of array
 * if n is passed then return last n numbers
 */
function lastN(arr,n)
{
    if(arr == null)
     return 0;
    if(n == null)
     return arr[arr.length - 1];
    else
    {
        return arr.slice(arr.length-n)
    }
}
console.log(lastN([1,2,3,4,5,6,7,8,9,10],5))
console.log(lastN([1,2,3,4,5,6,7,8,9,10],2))
console.log(lastN([1,2,3,4,5,6,7,8,9,10]))
console.log(lastN([]))