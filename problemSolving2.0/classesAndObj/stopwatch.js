class Stopwatch{
    constructor(){
        this.start1,this.startTime,this.EndTime,this.Duration = 0;
    }
    start()
    {
        if(this.start1)
        {
            throw new Error('Stopwatch already start') 
        }
        this.start1 = true;
        this.startTime = new Date();
    }
    end()
    {
        if(!this.start1)
        {
            throw new Error('Stopwatch not yet started')  
        }
        this.start1 = false;
        this.EndTime = new Date();
    }
    showDuration()
    {

        const sec = (this.EndTime.getTime() - this.startTime.getTime())/1000;
        return this.Duration+=sec;
    }
}

const st1 = new Stopwatch();
const c = console.log.bind(this)
st1.start()
setTimeout(() => {
    st1.end();
    c(st1.showDuration());
}, 2000); 
