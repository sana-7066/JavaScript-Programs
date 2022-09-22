const num = Math.ceil(Math.random() * 10);
const unum = prompt("Enter any number from 0 to 10");
if(num == unum)
{
    document.body.innerHTML = `<h2>Congratulations numbers are same ${num} == ${unum}</h2>`
}
else{
    
    document.getElementById('notsame').innerHTML = `<h2>Sorry try again numbers are not same ${num}!= ${unum}</h2>`;
    // document.querySelector('#notsame').innerHTML 
}
console.log(num)