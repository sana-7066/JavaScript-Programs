//Using promises
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
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            obj1.push(obj)
            if(true)
            {
                 resolve();
            }
            else 
             reject("Something went wrong")
        },2000)
    })
}

setItem({id:3,title:"third"}).then(getItem).catch(err => console.log(err))
