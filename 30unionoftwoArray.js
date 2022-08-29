/**VIMP
 * Union of two array
 * [1,2,3],[2,4,5,6]
 * In JavaScript, an object consists of key-value pairs where keys are similar to indexes in an array and are unique.
 * If one tries to add a duplicate key with a different value, then the previous value for that key is overwritten by the new value
 */



//     for (var n in obj) {

//         if (obj.hasOwnProperty(n))
//             res.push(obj[n]);

let obj ={};
function union(arr1,arr2)
{
    for(i=0;i<arr1.length;i++)
    {
        obj[arr1[i]] = arr1[i];
    }
    for(i=0;i<arr2.length;i++)
    {
        obj[arr2[i]] = arr2[i];
    }
    let newarr = [];
    for(key in obj)
    {
        newarr.push(obj[key]);
    }
    return newarr;
}
console.log(union([3, 2, 1], [100, 2, 1, 10, 25]));