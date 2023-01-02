/**
 * make right angle triangle with n rows where n is given like this n=4
 *  *
 *  **
 *  ***
 *  ****
 */

function pattern1(n){
    let right = "";
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            right+="* ";
        }
        right+="\n";
    }
    console.log(right)
}

pattern1(5)
pattern1(4)