/**Boolean constructor is also a function, it returns either true for ‘truthy’ argument or false for ‘falsy’ argument.
 * 0, -0, null, false, NaN, undefined, or the empty string (""), the object has the value of false.
 */
function filter_array(arr)
{
    return arr.filter(Boolean);//returns array of truthy elems
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));

//2

// function remDup(arr)
// {
//    const arr2 = arr.filter((currElem,index,arr) => {
//         return arr.indexOf(currElem) === index;
//     })
//     return arr2;
// }
// console.log(remDup([1,2,3,3,5,3,4,5]))

//3

function remDup(arr)
{
    const arr2 = [];
    arr.forEach((currElem,index,arr) => {
        
        if(arr.indexOf(currElem)=== index)
        {
            arr2.push(currElem);
        }
        
    })
    return arr2;
}
 console.log(remDup([1,4,5,7,8,94,5,4]))