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