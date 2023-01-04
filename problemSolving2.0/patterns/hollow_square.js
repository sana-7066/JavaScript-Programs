/*
****
*  *
*  *
****
*/

function drawSquare(n)
{
    let str = "";
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i===1 || i===n)
            {
                str+="*"
            }
            else{
                if(j===1 || j===n)
                {
                    str+="*"
                }
                else{
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