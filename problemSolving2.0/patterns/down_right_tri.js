/*
Downward triangle
****
***
**
*
n-i+1 stars
*/
let n=8,star="";
for(i=1;i<=n;i++)
{
    for(j=1;j<=n-i+1;j++)
    {
        star+="*"
    }
    star+="\n"
}
console.log(star)