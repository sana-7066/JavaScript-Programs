/*take the str string parameter, which will contain single digit numbers, letters, and question marks,
and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, 
then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 
10 in the string, then your program should return false as well.*/

const questionMark = (str) =>
{
    for(i=0;i<str.length;i++)
    {
        for(j=i+1;j<str.length;j++)
        {
            if(Number(str[i])+Number(str[j])===10)
            {
                if(str.slice(i,j).match(/[?]/g).length < 3)
                {
                    return false;
                }
                return true;
            }
        }
    }
    return false;

}

console.log(questionMark("arrb6???4xxbl5???eee5"));
console.log(questionMark("arrb6??4xxbl5???eee6"));