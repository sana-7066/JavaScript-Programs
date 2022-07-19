//CHECK VARIABLE WHETHER ITS ARRAY OR OBJECT
function isArr(arr)
{
    if(typeof arr === 'object' && arr !== null && !Array.isArray(arr))//* if(typeof arr === 'object' && arr!== null && !Array.isArray(arr))
    {
        console.log('This an object')
    }
    else if(Array.isArray(arr))
    {
        console.log('This is an array')
    }
    else
    {
        console.log('This is not array nor object')
    }
}

//1
isArr('sana')//string
//2
isArr({id:1,name:'sa'})//object
//3
isArr([0,0,8,8,9])//array
//4
isArr()