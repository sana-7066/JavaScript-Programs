/**
 * display sum of square of array elements
 */

function Sqr(arr)//0 1 2
{
    var sum = 0 ;
    for(i=0;i<arr.length;i++)
    {
        sum+=Math.pow(arr[i],2);//*
    }
    return sum;
}

console.log(Sqr([0,1,2,4,6,7]));
//-----------------------Method 2-------------------------------
const arr = [0,1,2,4,6,7];
var sum = arr.reduce((a,c) =>  a+Math.pow(c,2))
console.log(sum)