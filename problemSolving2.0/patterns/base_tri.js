/*
     *
    ***
   *****
  *******  
  pyramid triangle like this 
  //logic
  //each row is having n-i spaces and 2*i-1 stars
*/

let n = 5;
let str = "";
for(i=1;i<=n;i++)
{
    for(j=1;j<=n-i;j++)
    {
        str += " "
    }
    for(k=1;k<=2*i-1;k++)
    {
        str+="*"
    }
    str+="\n"
}

console.log(str)