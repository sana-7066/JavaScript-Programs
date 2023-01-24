/**IMP
 * Find Unique hobbies from given object
 * print them = writing # tennis # cricket like this
 */

const obj = [
   {
    name : "sana",
    hobbies : ["writing","reading"]
   },
   {
    name : "Mayur",
    hobbies : ["cricket","tennis","writing"]
   },
   {
    name : "amol",
    hobbies : ["cricket","dancing"]
   }
]

const hobbies = [];

obj.forEach((elem)=>{
    hobbies.push(...elem.hobbies);
})

console.log(hobbies);
var uniqArr= [];
   uniqArr = hobbies.filter((currElem,index,array) =>{
        return array.indexOf(currElem) === index;
    })

console.log(uniqArr.join(' # '))
//-------------------------------method 2 little optimal than above one------------------
const obj2 = [
    {
     name : "sana",
     hobbies : ["writing","reading"]
    },
    {
     name : "Mayur",
     hobbies : ["cricket","tennis","writing"]
    },
    {
     name : "amol",
     hobbies : ["cricket","dancing"]
    }
 ];

 const arr = [];
 obj2.forEach((currElem,index) => {
    for( i in currElem.hobbies)
    {
        if(!arr.includes(currElem.hobbies[i]))
        {
            arr.push(currElem.hobbies[i])
        }
    }
 })
 console.log(arr.join(' # '));