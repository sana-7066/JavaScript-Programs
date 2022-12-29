// newly introduced method Classes
class create {
    constructor(brand)
    {
        this.brand = brand;
        this.speed = 0;
    }
    accelarate(inc)
    {
        this.speed +=inc;
    }
    status()
    {
        return `${this.brand} speed ${this.speed}`
    }
}

const obj = new create('Range Rover')
obj.accelarate(90)
console.log(obj.status())