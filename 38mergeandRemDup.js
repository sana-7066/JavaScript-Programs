/*
Merge two array and remove Duplicate
*/

function mergeandrem(arr1,arr2)
{
    obj = {}
    for(i in arr1)
    {
        obj[arr1[i]] = arr1[i];
    }
    for(j in arr2)
    {
        obj[arr2[j]] = arr2[j];
    }
   
    temp = [];
    for(i in obj)
    {
        temp.push(obj[i]);
    }
    return temp;
}
console.log(mergeandrem([1,3,4],[4,2,5,6]))
// checking concat function
const temp1=[1,2,3];
const temp2 = [3,4,2,4,5,7];
console.log(temp1.concat(temp2))