//If there is christmas eve return true otherwise false
//----------------In javascript day and months are mapped from 0 so december will be 11
const timeForMilkAndCookies = (date) =>	date.getMonth() === 11 && date.getDate() === 24;

console.log(timeForMilkAndCookies(new Date(2018,11,24)));
console.log(timeForMilkAndCookies(new Date(2012,09,26)));