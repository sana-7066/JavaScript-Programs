/**
 * for in loop helps to iterate with the help of keys
 */

const student = {
    id:1,
    name: "sana",
    class : "tybcs"
}

for(key in student)
{
    console.log(`${key} => ${student[key]}`);
}