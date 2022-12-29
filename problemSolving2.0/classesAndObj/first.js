//Concepts of object oriented programming
//litral objects
//drawback : needs to repeat code whenever needs to create new object

const car1 = {
    brand : "Ferrari",
    speed : 0,
    accelarate : function(inc){
        this.speed+=inc
    },
    break : function(dec)
    {
        this.speed -= dec
    },
    status : function()
    {
        return `${this.brand} is running at ${this.speed} km/hr speed`
    }
}
const c = console.log.bind(this);
car1.accelarate(30);
c(car1.status())
car1.break(10);
c(car1.status())