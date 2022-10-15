/* Delete the all elements but keep the array*/
function Array1(arr)
{
    console.log(arr);
    if(arr.length === 0)
    {
        return arr
    }
    else
    {
        arr.length = 0;
        return arr
    }
}

console.log(Array1([1,4,5,6,8]))