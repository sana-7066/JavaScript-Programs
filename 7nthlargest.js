/**
 * Find out the nth largest element from given array
 * e.g nthlargest([3,5,6,2,9,5,9],3);
 * 3rd largest element => 5
 * VIMP
 */
function nthlargest(arr,num)
{
    arr.sort((a,b) => (a-b))
    return arr[arr.length-num];
   
}

console.log(nthlargest([78,56,85,46,25,12,35,88,96],3));

