/*
contructor function to create new object 
*/

function create(brand){
this.brand = brand;
this.speed = 0;
this.accelarate = function(inc)
{
    this.speed+=inc;
}
this.status = function()
{
    return `${this.brand} speed ${this.speed}`
}
}

const car1 = new create('Ferrari')// new keyword will create new empty object
car1.accelarate(50);
console.log(car1.status())