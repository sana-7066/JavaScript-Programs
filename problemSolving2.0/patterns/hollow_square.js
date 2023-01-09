/*
****
*  *
*  *
****
*/

function drawSquare(n)
{
    let str = "";
    for(i=1;i<=n;i++)// Tip : think of one row at a time like first row only
    {
        for(j=1;j<=n;j++)// same no of row same no. of column
        {
            if(i===1 || i===n)// first and last row with all stars
            {
                str+="*"
            }
            else{
                if(j===1 || j===n)
                {
                    str+="*"
                }
                else{ //spaces in between to  make it hollow
                    str+=" "
                } 
               
            }
        }
        str+="\n"
    }
    console.log(str)
}

drawSquare(6)
drawSquare(10)
drawSquare(4)

const spa = "*    *";
console.log(spa.match(/\s/g).length)