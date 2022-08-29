/**vimp
 * Find the leap years between the given range
 */
function leap_years(start,end)
{
    const years=[];
    for(i=start;i<=end;i++)
    {
        years.push(i);
    }
    const newarr = years.filter((year) => {
        if((year%100 === 0 && year%400 === 0)|| (year % 4 === 0))
        {
            return year;
        }
    })
return newarr;
}
console.log(leap_years(2000,2016));