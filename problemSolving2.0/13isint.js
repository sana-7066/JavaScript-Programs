// Is integer or not without using inbuilt function
//Integer means positive and negative whole numbers

const isInt =(num) => typeof num === 'number' && num % 1 === 0;
//if you don't want to use console log again and again
const c = console.log.bind(this);
c(isInt(1.2));
c(isInt(9));
c(isInt(0));
c(isInt(true))
console.log(isInt('Sana'))
