/**
 * arr = [[2,3,4],[6,7,8]]
 * print in this manner row 1 : 2,3,4 row 2: 6,7,8
 */
const arr = [[2,3,4],[3,4,5,6],[7,8,9]];
for(const i in arr)//for in loop is key iteration related
{
    console.log(`row ${i}`);
    for(j in arr[i])
    {
        console.log(arr[i][j]);
    }
}
