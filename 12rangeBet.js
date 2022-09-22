/*create array between given range (4,7) => [4,5,6,7];*/

function rangeArr(start,end)
{
    const arr = [];
    // const arr = new Array(end-start+1);
    // for(let i=0;i<=arr.length;i++,start++)//*
    for(i=start;i<=end;i++)
    {
        arr.push(i);
    }
    return arr
}

console.log(rangeArr(2,5));
console.log(rangeArr(-7,6));