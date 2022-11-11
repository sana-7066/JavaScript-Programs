//
class createObj4 {
    constructor(brand)
    {
        this.brand = brand;
        this.speed = 0;
    }
    accelarate(inc)
    {
        this.speed +=inc
    }
    break(dec)
    {
        this.speed -=dec
    }
    status()
    {
        console.log(this.brand +" Speed "+ this.speed)
    }
}

const car1 = new createObj4('Rangerover');
car1.accelarate(80);
car1.status();
car1.break(40);
car1.status();
car1.accelarate(50);
car1.status();