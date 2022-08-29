class Round
{
    constructor(rad)
    {
        this.rad = rad
    }
    area()
    {
        return 3.14*this.rad*this.rad;
    }
}

const r1 = new Round(5);
console.log(r1.area())