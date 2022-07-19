/*
if start of string = 'py' then return as it is else add py and then return

string.substring(start,endpoint+1) to get substring from start to endpoint
*/
var str ;
function checkStr(str)
{
    str.substring(0,2) == "py" ? str :str="py"+str;
    return str;
}

console.log(checkStr('sana'))
console.log(checkStr('python'))