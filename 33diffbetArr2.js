/*Difference between two arrays even if it is nested 
*/

function findDiff(arr1,arr2)
{
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);
    const arr3 = [];
    for (i in arr2){
    if(!arr1.includes(arr2[i]))
    arr3.push(arr2[i]);
    }
    for(j in arr1)
    {
        if(!arr2.includes(arr1[j]))
        arr3.push(arr1[j])
    }
    arr3.sort((a,b)=> a-b);
    return arr3;
}

console.log(findDiff([1,2,3,4],[4,5,[8,3]]));