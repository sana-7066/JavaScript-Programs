// Use of spread operator ( partial deep copying)

const user = {
    name : "sana",
    location :{
        city : "Pune",
        state : "Maharashtra"
    }
}

const copy = {...user};

console.log(copy)

copy.name = "Manisha";

console.log(`After adding name in copy object copy : `,copy);
console.log(`User :`,user)
//o/p 
/*
After adding name in copy object copy :  { name: 'Manisha', location: { city: 'Pune', state: 'Maharashtra' } }
User : { name: 'sana', location: { city: 'Pune', state: 'Maharashtra' } }
*/
console.log(" ");

copy.location.city = "Aurangabad";

console.log(`After adding city in copy object copy : `,copy);
console.log(`User :`,user)

//o/p 
/*
After adding city in copy object copy :  {
  name: 'Manisha',
  location: { city: 'Aurangabad', state: 'Maharashtra' }
}
User : {
  name: 'sana',
  location: { city: 'Aurangabad', state: 'Maharashtra' }
}*/
//-----BOTH CITY NAME WILL BE CHANGED BECAUSE SPREAD OPERATOR DOES PARTIAL DEEP COPY NOT FULL DEEP COPY IT ONLY SHARE THE REFERENCE OF NESTED OBJECTS
// ----SO THE NESTED OBJECTS VALUE ARE REPLACED TO AVOID THIS WE WILL USE FOLOOWING METHOD
const obj3 = {
  name : "Arun",
  location : {
    city : "Bangalore",
    state : "Karnataka"
  }
}
const cpy = JSON.parse(JSON.stringify(obj3))
cpy.name = "Arsal"
cpy.location.city = "Gulbarga"
console.log(obj3)
console.log(cpy)

//with the above method we can copy the object from another object and make changes in it without any hesitation but there is one drawback of this 
//method it does not copy JSON non supported data 
// for e.g

const obj4 ={
  stdname : "Sana",
  age :23,
  getDetails : function(){
    return this.stdname +"Age : "+ this.age
  }
}

const newObj = JSON.parse(JSON.stringify(obj4));
console.log(`Old object : `)
console.log(obj4)
console.log(`Copied obj `)
console.log(newObj)