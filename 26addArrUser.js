/**VIMP
 * take array data from user and display it on screen 
 * Element 0 = ,Element = 1 like this
 */
const arr = [];
const add = document.getElementById('add');
const display = document.getElementById('display');
add.addEventListener('click',() =>{
   arr.push(document.getElementById('field').value);
   // console.log(arr);
   document.getElementById('field').value = "";//*
})
let str = "";
display.addEventListener('click',() => {
    for(i=0;i<arr.length;i++)
    {
        // console.log(`Element ${i}=${arr[i]}`);
        str+=`Element ${i}=${arr[i]}<br>`;
        // console.log(str);
    }
    // document.getElementById('data').innerHTML=str
    document.querySelector('#data').innerHTML = str;
})