/*
place all the zero's in the array at last 
e.g.[1,0,72,25,0,1,0,1,0] like this [1, 72, 25, 1, 1,0, 0,  0, 0]
*/

const arr = [1,0,72,25,0,2,0,3,0];
console.log(arr);
for(i=0;i<arr.length;i++)
{
    if(arr[i] === 0)
    {
        const temp =arr.splice(i,1);// splice -> to delete the element at given position
        arr.push(...temp);
    }
}

console.log(arr);
