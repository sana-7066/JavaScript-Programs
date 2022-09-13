/*
Sort array of object by given field
*/

var obj = 
[{id:1,title:"first"},
{id:2,title:"third"},
{id:3,title:"second"}];
console.log(obj.sort(compare));

function compare(x,y)
{
    if(x.title<y.title)
     return -1;
    if(x.title>y.title)
     return 1;
    return 0;
}
// obj.sort((a,b) => a-b) sorting