/* MAke the first letter capital of each word in sentence */

function Capit(str)
{
 const arr = str.split(" ");
 const newarr = [];
 for(i=0;i<arr.length;i++)
 {
   newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    
 }
 return newarr.join(' ');
}

console.log(Capit("hi i am sana"))