/**
 * Create array of given length and fill it with given value e.g array_filled(6,0).
 */

function array_filled(length,element)
{
    const arr = [];
    for(i=0;i<length;i++)
    {
        arr.push(element)
    }
    return arr;
}

console.log(array_filled(6,0))
console.log(array_filled(9,11))
console.log(array_filled(5,'*'))