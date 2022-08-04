/**
 * sum and product of integer array elements
 */
function sum(arr)
{
    sum1 = 0;
   for(i=0;i<arr.length;i++)
   {
    sum1+=arr[i];
   }
   return sum1;
}

function product(arr)
{
    prod = 1;
    for(i=0;i<arr.length;i++)
    {
        prod*=arr[i];
    }
    return prod;
}

console.log(sum([1,5,9,6,4]));
console.log(product([1,5,9,6,4]));