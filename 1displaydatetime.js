/*
Display Date and time in this formate
   Today:Monday
   Time:10:37:05 am
 */

const date = new Date();
const day = date.getDay();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(`Today : ${days[day]}`);

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let prep = hours >= 12 ? "pm" :"am";

hours = hours >= 12 ? hours-12 : hours;

if(hours == 0 && prep == "pm")
{
    hours = 12;
    if(minutes == 0 && seconds == 0)
    {
        prep = "noon"
    }
}
else if(hours == 0 && prep == "am")
{
    hours = 12;
    if(minutes == 0 && seconds == 0)
    {
        prep = " midnight"
    }
}

console.log(`Time: ${hours} : ${minutes} : ${seconds} : ${prep}`)