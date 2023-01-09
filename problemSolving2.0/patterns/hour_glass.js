function hour_glass(n)
{
    let str=""
    for(i=n;i>1;i--)
    {
        for(j=1;j<=n-i;j++)//front spaces
        {
            str+=" "
        }
        for(k=2*i-1;k>=1;k--)//stars
        {
            str+="*"
        }
        str+="\n"
    }
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i;j++)
        {
            str+=" "
        }
        for(k=1;k<=2*i-1;k++)
        {
            str+="*"
        }
        str+="\n"
    }
    console.log(str)
}
hour_glass(6)
hour_glass(10)
