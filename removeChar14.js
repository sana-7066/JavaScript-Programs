/*
Remove character at specific position and return the new string
*/

const str = 'Bhagyashree';
const arrStr = str.split("");
const newArr = arrStr.splice(5,1);
console.log(arrStr.join(""))

//--------------------------------------OR-----------------------
//--optimal solution--
function Str(str2,pos)
{
    const part1 = str2.substring(0,pos);
    const part2 = str2.substring(pos+1,str2.length);
    return part1+part2;
}

console.log(Str('Bhuvneshwar',4))
