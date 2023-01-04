/*
hollow triangle like this 

   *
  * *
 *   *
*******
//n-i spaces , 2*i-1 stars for all fill
*/
 
let n=4,str="";
for(i=1;i<=n;i++)
{
  for(j=1;j<=n-i;j++)
  {
    str+=" "
  }
  for(k=1;k<=2*i-1;i++)
  {
    str+="*"
  }
  str+="\n"
}
console.log(str)