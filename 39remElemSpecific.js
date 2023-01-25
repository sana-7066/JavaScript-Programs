/*vimp Remove the given specific element in array */
function RemElem(arr,num)
{
    const index = arr.indexOf(num);
    if(index>-1)
    {
    arr.splice(index,1);
    return arr;
    }
    else 
    return "No Element at given position";
}

console.log(RemElem([1,4,7,2,8,5,7,9],10))