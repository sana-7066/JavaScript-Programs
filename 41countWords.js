// Counting words in the paragraph

function countWord(str)
{
    const strArr = str.split(" ");
    let count =0;
    for(i=0;i<strArr.length;i++)
    {
        if((strArr[i] != '.') )
        {
        count++;
        }
    }
    return count
    //-------------------or-----------
    // return str.split(" ").length;
}
console.log(countWord("Hi I am Sana the \'Nodejs Developer\'. Nice to meet you. How are you? ."))

// Finding longest word in para
console.log(longestWord("Hi I am Sana the \'Nodejs Developer\'. Nice to meet you. How are you?"))

function longestWord(str)
{
    const strArr = str.split(" ");
    let longCount = 0;
    let longest = "";
    for(i=0;i<strArr.length;i++)
    {
        if(strArr[i].length > longCount)
        {
            longCount = strArr[i].length;
            longest = strArr[i];
        }
    }
    return `${longest} is the longest word of ${longCount} characters`
}