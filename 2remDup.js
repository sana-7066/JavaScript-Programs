/*IMP
Remove Duplicate Elements*/

function Remdup(arr)
{
  return arr.filter((currElem,index,arr1)=>{
    return arr1.indexOf(currElem) === index;
  })
}

console.log(Remdup([1,2,3,3,2,4,5,6,,6,7,6,8]));

//-----------------------------------Method two-------------------------------

function RemDup2(arr)
{
  arr2 = [];
  arr.forEach(function (currElem,index,arr1) {
    if(arr1.indexOf(currElem) === index)
    {
      arr2.push(currElem);
    }
  })
  return arr2;
}

console.log(RemDup2([1,2,3,3,2,4,5,6,,6,7,6,8]))

//Tip : filter and forEach function have same arguments 
// only difference is that filter method return new filtered array/ array elements whether forEach method doesnot return anything 
//indexOf Function returns first occurance of element