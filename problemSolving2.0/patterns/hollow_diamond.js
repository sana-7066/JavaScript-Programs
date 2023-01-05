//hollow diamond

function drawDiam(n)
{
    let str = "";
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i;j++)
        {
            str+=" "
        }
        for(k=1;k<=2*i-1;k++)
        {
            if(k===1||k===2*i-1)
            {
                str+="*"
            }
            else
            {
                str+=" "
            }
        }
        str+="\n"
    }
    for(i=1;i<=n-1;i++)
    {
        for(j=1;j<=i;j++)
        {
            str+=" "
        }
        for(k=1;k<=2*(n-i)-1;k++)
        {
            if(k===1 || k===2*(n-i)-1)
            {
                str+="*"
            }
            else
            {
                str+= " "
            }
        }
        str+="\n"
    }
    console.log(str)
}

drawDiam(10)