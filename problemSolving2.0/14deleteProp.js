//Delete the property and print the object 
const obj = {
    name : "sana",
    class : "MCS",
    rollno :4,
    address : "sangavi"
}

console.log(obj)
console.log(`after deleting roll no property`)

delete obj.rollno;//USE TO DELETE THE PROPERTIES OF OBJECT
console.log(obj)


//---------------DELETE ON ARRAY----------------
const arr = [1,2,3,4,5];
delete(arr[3]);
console.log(arr)