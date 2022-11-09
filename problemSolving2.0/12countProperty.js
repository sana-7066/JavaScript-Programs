// List the properties in Object

const std = {
    name : "Suraj",
    class : "MSC",
    mobile : 909090909,
    adress : "Sangvi",
    percentage : 88.8
}

for(key in std)
{
    console.log(key);
}
//count the properties
console.log(Object.keys(std).length)//IMP

// ---------------------Method 2------------------

const person = {
    name : "Abid",
    hobby : "playing",
    class : "6th",
    adress : "16 no. bus stop",
    friends : ["Nawaz","Tohid"]
}

console.log(person);
console.log(`Total properties in object ${Object.keys(person).length}`)
console.log(`These properties are as follows : ${Object.keys(person)}`)