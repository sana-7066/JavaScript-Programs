// Tuck the one array in another
//-------first array should be of 2 elements and you should tuck new array in between those two elements.

// function tuckIn(arr1, arr2) {
// 	if(arr1.length == 2)
// 		{
// 			arr1.splice(arr1[0],0,...arr2);
// 			return arr1;
// 		}
// 	else 
// 		return 'first array should be of 2 elements';
// }
//method 2
function tuckIn(arr1,arr2)
{
    if(arr1.length == 2)
    return [arr1[0],...arr2,arr1[1]];
}
console.log(tuckIn([1,2],[4,5,6,7,8]));
console.log(tuckIn([1,2,3],[4,5,6,7,8]));
console.log(tuckIn([15,150],[45,75,35]));