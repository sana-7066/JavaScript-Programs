/*
Finding the difference between two arrays even if they are nested
*/
//VIMP

function differenceOf2Arrays (array1, array2) {
    const temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    // console.log(array2.toString().split(',').map(Number));
    // let array1 = [100,2,1,10]
    //toString() => converting array / nexted array into string ,elements separated by ',' e.g  => 100,2,1,10 join() also converts the array in string
    //split(',') => spliting the string element separated by ',' => [ '100', '2', '1', '10' ]
    //map(Number) => mapping string element in number e.g. '1' => [ 100, 2, 1, 10 ]
    
    for (var i in array1) {
    if(!array2.includes(array1[i])) temp.push(array1[i]);
    }
    for(i in array2) {
    if(!array1.includes(array2[i])) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);// when you use sort it assumes sorting string
    // if above arrow function will return negative value , then a will ordered before b and vice versa
    }
    
    console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
    console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
    