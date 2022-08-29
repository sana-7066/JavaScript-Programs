/**VIMP
 * use ordinal numbers to tell position of colors
 * like 1st choice is blue
 */
const color = ['blue','red','green','orange','violet','indigo','yellow'];

function Ordinal(n)
{
    const ord = ['th','st','nd','rd'];
       return n+(ord[(n-20)%10]||ord[n]||ord[0]);
}
// let pos ;
for(i=0;i<color.length;i++)
{
   const ordinal = i + 1;
   console.log(`${Ordinal(ordinal)} choice is ${color[i]}`)
}
