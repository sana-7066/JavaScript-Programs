// Without using call back

const obj1 =[{ id:1,title:"first"},{id:2,title : "second"}];
function getItem()
{
    setTimeout(() => {
        obj1.forEach(elem => {
            console.log(elem)
    })},1000)
}
function setItem(obj)
{
    setTimeout(() => {
        obj1.push(obj);
    },2000)
}
setItem({id:3,title : "third"})
getItem();