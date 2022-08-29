/**
 * Sum of Elements at the same index in array and storing it into new array
 */
function sumArr(arr1,arr2)
{
    let newArr = [];
    if(arr1.length > arr2.length)
    {
        max=arr1.length;
    }
    else
    max=arr2.length;
    for(i=0;i<max;i++)
    {
        let sum;
        if(arr1[i] == null)
        {
            sum = arr2[i];
        }
        else if(arr2[i] == null)
        {
            sum = arr1[i];
        }
        else{
        sum = arr1[i]+arr2[i];
        }
        newArr.push(sum);
    }
    return newArr;
}
console.log(sumArr([5,9,5,3,7,6,5],[1,5,8,9,8]))