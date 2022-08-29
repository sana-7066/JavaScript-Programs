class Rectangle
{
    constructor(height,width)
    {
        this.height=height;
        this.width=width;
    }
    calcarea() {
        return this.height*this.width;
    }
}

const a1 = new Rectangle(5,4);
console.log(a1.calcarea());