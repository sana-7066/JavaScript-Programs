function secondMax(arr)
{
let max1 = 0;
let max2 = 0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]>max1)
    {
        max2 = max1;
        max1 = arr[i];
    }
    else if(arr[i]!==max1 && arr[i]>max2)
    {
        max2 = arr[i];
    }
}
return max2;
}

console.log(secondMax([2,3,4,43,3,5,6,7,8,9,12]));