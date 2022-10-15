//object
//delete operator works good with object to delete key 

const obj1 ={
    id:1,
    name:"Sana",
    class:"MCS",
    age:23
}

delete obj1.age;

console.log(obj1);

const arr1 =[1,2,4,5,7];
delete arr1[2];

console.log(arr1)
//o/p
//{ id: 1, name: 'Sana', class: 'MCS' }
//[ 1, 2, <1 empty item>, 5, 7 ]
//spread operator