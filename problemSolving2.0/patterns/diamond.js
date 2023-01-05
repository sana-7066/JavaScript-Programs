/*
creating diamond with stars
*/
let n=6,str="";

//upper pyramid
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
//lower pyramid
for(i=1;i<=n-1;i++)
{
    for(j=1;j<=i;j++)
    {
        str+=" "
    }
    for(k=1;k<=(n-i)*2-1;k++)
    {
        str+='*'
    }
    str+="\n"
}
console.log(str)