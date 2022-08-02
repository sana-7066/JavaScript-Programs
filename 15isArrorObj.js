function isArr(arr)
{
    if(arr !== null && Array.isArray(arr))
    {
        return "it is an Array"
    }
    else if(arr !== null && typeof arr === 'object')
    {
        return "This is an Object"
    }
    else
    {
        return " not array nor Object"
    }
}

console.log(isArr([1,2,3,4,5]));

console.log(isArr({id: 1}))

console.log(isArr('sana'))