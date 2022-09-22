function createcar(brandname)
{
    const car = {
        brand : brandname,
        speed : 0,
        accelarate : function(inc)
        {
            this.speed += inc;
        },
        break : function(dec)
        {
            this.speed -= dec;
        },
        status : function(){
            return `${this.brand} is running at speed of ${this.speed}`
        }
    }
    return car;
}

const car1 = createcar('Ferrari');
console.log(car1.status());
car1.accelarate(70);
console.log(car1.status());
car1.break(40);
console.log(car1.status());

// we can create multiple objects without code repetations

const car2 = createcar('rangerover');
console.log(car2.status());
car2.accelarate(90);
console.log(car2.status());
car2.break(40);
console.log(car2.status());

// Sometime this approch will not suitable so we will see next approach.