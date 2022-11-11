//constructor function

function createObj1(brand)
{
    this.brand = brand
    this.speed = 0;
    this.accelarate = function(inc)
    {
        this.speed +=inc
    }
    this.status = function()
    {
        console.log(`${this.brand} runs at ${this.speed} speed`)
    }
}

const car1 = new createObj1('Maruti suzuki');
car1.accelarate(50);
car1.status();