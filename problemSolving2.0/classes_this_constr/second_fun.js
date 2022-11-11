// Using normal function
//this way you can create multiple objects but there is one more optimal approach 
//constructor function
function createObj(brand)
{
    const obj ={
        brand : brand,
        speed : 0,
        accelarate : function(inc)
        {
            this.speed += inc;
        },
        break : function(dec)
        {
            this.speed -=dec;
        },
        status : function()
        {
            console.log(this.brand +"speed "+this.speed);
        }

    }
    return obj ;
}

const car1 = createObj('Ferrari');
car1.accelarate(50);
car1.status();
car1.break(10);
car1.status();

const car2 = createObj('Fortuner');
car2.accelarate(40);
car2.status();
car2.break(10);
car2.status();
