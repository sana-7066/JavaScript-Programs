// creating object using normal functions
// drawback - too much lines of code 
function create(brand)
{
    const obj = {
        brand,
        speed : 0,
        accelarate : function(inc)
        {
            this.speed += inc;
        },
        break : function(dec){
            this.speed -=dec;
        },
        status :function()
        {
            return `${this.brand} speed ${this.speed}`
        }
    }
    return obj;
}

const car1 = create('ferrari');
const car2 = create('range-roverr');
const c = console.log.bind(this);
c(car1.status())
car2.accelarate(30)
c(car2.status())
car1.accelarate(90)
c(car1.status())
car1.break(35);
c(car1.status())

