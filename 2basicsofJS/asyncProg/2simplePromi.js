//Example of promise
function fun1()
{
    return new Promise((resolve,reject)=>{
        if(false)
        {
            resolve();
        }
        else
         reject('Error occured');
    })
}

fun1().then(()=>console.log("success")).catch(err=> console.log(err)).finally(setTimeout(()=>{console.log("done")},1000))