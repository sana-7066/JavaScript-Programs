/* strings =['ab','ab','abc'],queries = ['ab','bc','abc']
There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array,[2,0,1] . */
function matchingStrings(strings, queries) {
    const result = [];
    // Write your code here
    let count =0;
    for( var i = 0;i<queries.length;i++)
    {
      for( var j=0;j<strings.length;j++)
      {
          if(queries[i] === strings[j])
          {
              count++;
          }
      }
      result.push(count);
      count = 0;
    }
    console.log(result);
}

matchingStrings(['ab','ab','abc'],['ab','abc','bc']);