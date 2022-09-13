/*
place 2's ,1's and all 0's in array such that in this order [2,0,1]
if 2 at start
if 0 at middle 
if 1 at end
*/
const arr = [2,1,0,1,2,0,0,2,1,0,2,0,1,1];
//var temp = [];

for(i=0;i<arr.length;i++)
{
    if(arr[i]===2)
    {
        const temp = arr.splice(i,1);
        arr.unshift(...temp);
    }
    else if(arr[i]===1)
    {
        const temp =arr.splice(i,1);
        arr.push(...temp);
    }
    else
    {
        continue;
    }
}

console.log(arr)