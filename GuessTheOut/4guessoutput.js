function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(typeof one);
    console.log(`is array ${Array.isArray(one)}`)
    console.log(two);
    console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;
  //o/p
  /* Answer: B: ["", " is ", " years old"] "Lydia" 21
If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!
*/
function matchingStrings(strings, queries) {
    
    const result = [];
    // Write your code here
    for( var i = 0;i<queries.length;i++)
    {
       console.log(strings)
        // const res = new RegExp(queries[i],'g');
        // const count = (strings.toString().match(res) || []).length;
        // result.push(count)
        
    }
    return result
}
console.log(matchingStrings(['aba','baba','aba','xzxb'],['aba','xzxb','ab']))