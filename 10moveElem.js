/*
move element from given position to the specific position
e.g [4,5,6,1,2,3],3,2 => [4,5,1,6,2,3]
*/

function moveElem(arr,pos,newpos)
{
    const temp = arr.splice(pos,1);
    arr.splice(newpos,0,...temp)
    return arr
}

console.log(moveElem([2,3,4,5,5,6,7,8],2,5))