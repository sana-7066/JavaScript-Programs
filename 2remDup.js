/*Remove Duplicate Elements*/

function Remdup(arr)
{
  return arr.filter((currElem,index,arr1)=>{
    return arr1.indexOf(currElem) === index;
  })
}

console.log(Remdup([1,2,3,3,2,4,5,6,,6,7,6,8]));

//Tip : filter and forEach function have same arguments 
// only difference is that filter method return array/ array elements whether forEach method doesnot return anything 
