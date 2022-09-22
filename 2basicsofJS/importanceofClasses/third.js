class Car  {
    constructor(brand)
    {
        this.brand = brand,
        this.speed = 0
    }
    accelarate(inc)
    {
        this.speed += inc;
    }
    break(dec)
    {
        this.speed -= dec;
    }
    status()
    {
        return `${this.brand} runs with ${this.speed} km/hr`
    }
}

const car1 = new Car('Swift');
console.log(car1.status());
car1.accelarate(90);
console.log(car1.status());
car1.break(20);
console.log(car1.status());

console.log(" ");


const car2 = new Car('Ferrari');
console.log(car2.status());
car2.accelarate(90);
console.log(car2.status());
car2.break(20);
console.log(car2.status());