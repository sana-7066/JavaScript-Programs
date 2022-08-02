/**VIMP
 * if two consecuutive numbers are even then add - in between otherwise leave it as it is
 * e.g. 02356784 => 0-235678-4 like this
 */

function acceptNum(num)
{
    var str = num.toString();
    var resArr = [str[0]];//array containing first element of str initially
    for(i=1;i<str.length;i++)
    {
        if(str[i-1] % 2 === 0 && str[i] % 2 === 0)//*
        {
            resArr.push('-',str[i])//pushing - and str[i] 
        }
        else
        {
            resArr.push(str[i])
        }
    }
   // return resArr.toString();// toString converts array in string with comma separated values
   return resArr.join("");
}

console.log(acceptNum(09084567786))








