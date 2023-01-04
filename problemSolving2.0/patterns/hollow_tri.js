/*
hollow triangle like this 

   *
  * *
 *   *
*******
//n-i spaces , 2*i-1 stars for all fill
*/
 
let n=9,str="";
for(i=1;i<=n;i++)// each row
{
  for(j=1;j<=n-i;j++)// front spaces for creating triangle
  {
    str+=" "
  }
  for(k=1;k<=2*i-1;k++)// printing stars
  {
    if(i===1 || i===n)// first and last row contain only stars not spaces 
    {
    str+="*"
    }
    else{
      if(k===1|| k===2*i-1) // filling edges with stars
      {
        str+="*"
      }
      else                // filling spaces in between 
      {
        str+=" "
      }
    }
  }
  str+="\n"
}
console.log(str)

// o/p:
/*
        *
       * *
      *   *
     *     *
    *       *
   *         *
  *           *
 *             *
*****************
*/