//literal object
// This method is having many drwabacks you need to create new object every time there will be code repeatation
const obj = {
    brand : "Ferrari",
    speed : 0,
    accelerate : function(inc)
    {
        this.speed +=inc;
    },
    break : function(dec)
    {
        this.speed -=dec;
    },
    status : function()
    {
        console.log(`${this.brand} runs at ${this.speed} km/hr`)
    }

}

obj.accelerate(20);
obj.status();
obj.break(10);
obj.status();