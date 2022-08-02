/*
Tip : If problem is complicated , break it in small and then try to solve
if two consecutive numbers are even then add - in between them otherwise let it be
*/

function addDash(num)
{
    let str = num.toString();//0908987
    let Arr = [str[0]];
    for(i=1;i<str.length;i++)
    {
       // Arr.push(str[i-1]);
        if(str[i-1] % 2 == 0 && str[i] % 2 == 0)
        {
            Arr.push('-');
        }
        
           Arr.push(str[i]); 
        

   }
   console.log(Arr.join(''));
}

addDash(786451296);