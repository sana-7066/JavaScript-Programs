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
//-----BOTH CITY NAME WILL BE CHANGED BECAUSE SPREAD OPERATOR DOES PARTIAL DEEP COPY NOT FULL DEEP COPY 
// ----SO THE NESTED OBJECTS VALUE ARE REPLACED