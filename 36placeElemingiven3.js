/*vimp
place 2's ,1's and all 0's in array such that in this order [2,0,1]
if 2 at start
if 0 at middle 
if 1 at end

//Array methods:
    array.push() => to add new elem at the end
    array.pop() => to remove elem at the end
    array.unshift() => to add new elem at start
    array.shift() => to remove elem at start
*/
const arr = [2,1,0,1];
let count2 =0,count0 = 0;

for(i in arr)
{
    if(arr[i] === 2)
    {
        count2++;
    }
    else if(arr[i] === 0)
    {
        count0++;
    }
}
const temp = [];
for(i=0;i<count2;i++)
{
    temp.push(2);
}
for(i=count2;i<count2+count0;i++)
{
    temp.push(0)
}
for(i=temp.length;i<arr.length;i++)
{
    temp.push(1)
}
if(arr.length === temp.length)
{
console.log(temp)
}