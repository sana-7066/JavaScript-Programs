//USING THIS 'Object.keys(obj).length' WE ARE CHECKING WHETHER THE OBJECT IS EMPTY OR NOT 
// WHWRE 'oBJECT.KEYS() FUNCTION'RETURS THE ARRAY OF KEYS
const obj = {id:'obj1'};

const isEmp = Object.keys(obj).length === 0 ;

console.log(isEmp);

//-----------------------------------

const obj2 = {
    a:'sana',
    b:'is',
    c:'shatir'
}
console.log(Object.keys(obj2))