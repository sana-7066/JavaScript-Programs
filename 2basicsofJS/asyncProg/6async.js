const obj1 = [{id : 1,title : "first"},{id:2,title : "second"}];
function getItem()
{
    setTimeout(() => {
        obj1.forEach(elem => console.log(elem));
    },1000)
}
function setItem(obj)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            obj1.push(obj);
            if(true)
            {
                
                resolve();
            }
            else
            {
                reject('error')
            }
        },2000)
    })
}

async function init()
{
    try{
        await setItem({id:3,title: "third"});// function returns promise
        getItem();
    }
    catch(err)
    {
        console.log(err)
    }
}
init();
// getItem();