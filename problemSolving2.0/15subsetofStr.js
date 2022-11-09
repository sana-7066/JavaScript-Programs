//Return the subsets of given string
//do => d,o,do 1+2 =3
//Dog => d,o,g,do,og,dog 1+2+3=6
//sana => sana,san,ana,sa,an,na,s,a,n,a 1+2+3+4 = 10
function subset(str)
{
    const subsetArr = [];
    for(i=0;i<str.length;i++)
    {
        for(j=i+1;j<str.length+1;j++)
        {
            subsetArr.push(str.slice(i,j));
        }
    }
    return subsetArr;
}

console.log(subset("nawazshaikh"))