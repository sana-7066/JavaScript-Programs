/*create array from that number to specific range e.g. (1,6) => [1,2,3,4,5,6]*/

function createArr(start,length)
{
    const arr = [];
    //const arr = new Array(length);
    if(length<1)
    {
        return "please Enter proper length of array";
    }
    
    for(i=0;i<length;i++)
    {
        arr.push(start+i);
    }
    return arr;
}
console.log(createArr(2,3));
console.log(createArr(-9,10));
console.log(createArr(9,10));