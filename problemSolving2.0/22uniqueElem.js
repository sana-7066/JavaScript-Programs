/* QUESTION
 * Complete the 'lonelyinteger' function below.
 * return only unique element in array
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let occurence = {};
    let lonelyNumber;
    a.map(num => {
        occurence[num] = (occurence[num]||0) +1 ;
    })
    for (let key of Object.keys(occurence)) {// array of keys [1,2,3,4]
        if (occurence[key] == 1) lonelyNumber = key ;
    }
    return lonelyNumber ;
}