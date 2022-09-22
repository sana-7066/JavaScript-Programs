/**
 * In this serias we will learn importance of Classes
 * first.js : literal objects
 */
const car = {
    brand:"Toyota",
    speed:0,

    accelerate : function(inc){
        this.speed += inc;
    }
    ,
    break : function(dec)
    {
        this.speed-=dec;
    },
    status : function()
    {
        return `${this.brand} is running at ${this.speed} km/hr`; 
    }
}
car.accelerate(40);
console.log(car.status());
car.break(10)
console.log(car.status());
//In this example if we want add new car we have to create one more literal object
// which will have code repetations in it .
// to avoid this problem we are using function in second.js lets see. 