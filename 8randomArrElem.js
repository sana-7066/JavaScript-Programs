/**
 * Print random element from Array
 */
function printRan(arr)
{
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(printRan([12, 25, 35, 46, 56, 78, 85, 88, 96]))

