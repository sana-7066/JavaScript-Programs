/*
return 1 if the brackets are correctly matched and each one is accounted for.
 Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, 
 but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. 
 Only "(" and ")" will be used as brackets. If str contains no brackets return 1. */

 function bracketMatch(str)
 {
    const brackets = [];
    for(i=0;i<str.length;i++)
    {
    if(str[i] === '(') brackets.push(str[i]);
    if(str[i] === ')' && brackets.length === 0) return 0;
    if(str[i] === ')' && brackets.length > 0) brackets.pop();
    
    if(!str.includes('(') || !str.includes(')'))
     return 1;
    
    }
    return brackets.length === 0 ? 1 : 0;
 }
 console.log(bracketMatch("(hello(world))"))//brackets =>
 console.log(bracketMatch("(hello(world)"))
 console.log(bracketMatch("{[(]))}"))
 console.log(bracketMatch("helloworld"))
 console.log(bracketMatch("sana-shaikh"))