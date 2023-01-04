/* square like this n=4
****
****
****
****
*/

function drawSquare(n)
{
    let str="";
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            str+="*"
        }
        str+="\n";
    }
    console.log(str)
}

drawSquare(4)
drawSquare(6)