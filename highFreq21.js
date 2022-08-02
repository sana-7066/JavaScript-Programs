/**VIMP
 * Find the array element whose frequency is more than other elements 
 */
const arr = [3,2,'a','a','a',3,'a',3,'a',2];
let freq = 1;
let count = 0;
let item = 0;
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;//3==3
            if(freq<count)
            {
                freq=count;
                item=arr[i];
            }
        }
    }
    count=0;
}
console.log(`THIS ELEMENT IS MOST FREQUENT ${item} IT APPEAR ${freq} times`);
