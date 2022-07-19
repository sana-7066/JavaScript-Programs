//Clone the array
//arr.slice(startpoint,endpoint+1) gives (specific part of array) like substring() of string
function clone(arr)
{
    const cloneArr = arr.slice(0)// it will take starting point 0 ending point last elem of array
    console.log(`original array : ${arr}`)
    console.log(cloneArr)
}

clone([1,2,3,4,5,6])