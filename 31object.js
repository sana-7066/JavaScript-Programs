/**
 * In JavaScript, an object consists of key-value pairs where keys are similar to indexes in an array and are #unique###.
 * If one tries to add a duplicate key with a different value, then the previous value for that key is overwritten by the new value
 */
const arr = [2,3,4,6,5,4,9];
let obj = {}
for(i=0;i<arr.length;i++)
{
    //obj[arr[i]] = arr[i];
    obj[i] = arr[i];//anything you can add in object as a key there is no restriction like index in array
}

console.log(obj)

const obj2 =
    [{
    id:1,
    name:"sana",
    class:"mcs",
    company: "cognizant"
    },
    {
        id:2,
        name:"najneen",
        class:"bcom",
        company:["krsna","Benhmark"]
    }]

console.log(obj2)