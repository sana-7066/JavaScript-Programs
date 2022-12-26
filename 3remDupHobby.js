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