//Find intersection in the given array 
//['1,3,4,5','4,5,6']
function FindIntersection(strArr) { 

    var a = strArr[0].split(',')// array is splited into two arrays
    var b = strArr[1].split(',')
    
    var result = a.filter(x => b.find(a => a === x))
    return result.length > 0 ? result.join(',') : 'false'
  
  }
  console.log(FindIntersection(['1,3,4,5','4,5,6']))