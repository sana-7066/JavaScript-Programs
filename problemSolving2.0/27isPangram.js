//A pangram is a string which contain all the letters of alphabets 
//IMP Question
function isPangram(str)
{
    if(str.length < 26)
    {
        return `${str}\t => is not pangram`
    }
    else
    {
        const arr = str.toLowerCase().replace(/\s/g,"").split("");
        const uniqueSet = new Set(arr);
        return uniqueSet.size === 26 ? `${str}\t => is pangram` : `${str}\t => is not pangram`;
    }
}

console.log(isPangram('asdfghjklpoiuytrewqzxcvbnZ'))
// to check which letter is not present in string

function checkPangram(str)
{
    const alphaStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphaStr.split("");
    if(str.length < 26)
    {
        const notInstr = [];
        for(i=0;i<alphaArr.length;i++)
        {
            if(!str.includes(alphaArr[i]))
            {
                notInstr.push(alphaArr[i]);
            }
        }
        
        return `${str}\t => is not pangram \t these letter are not present in it ${notInstr}`
    }
    else
    {
        const arr = str.toLowerCase().replace(/\s/g,"").split("");
        const uniqueSet = new Set(arr);
        const notInstr = [];
        for(i=0;i<alphaArr.length;i++)
        {
            
            if(!uniqueSet.has(alphaArr[i]))// We use INCLUDES method for array and string but for set using HAS method
            {
                notInstr.push(alphaArr[i])
            }
        }
        
        return uniqueSet.size === 26 ? `${str}\t => is pangram` : `${str}\t => is not pangram \t these letter are not present in it <b>${notInstr}</b>`;
    }
}
console.log(checkPangram('asdfghjklpoiuytrewqZXCvbnZZ'))