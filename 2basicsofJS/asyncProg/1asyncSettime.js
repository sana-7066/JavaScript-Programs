//*SETTIMEOUT

function fun1()
{
    console.log("start function1");
    fun2();
    console.log("End of function1")
}

function fun2()
{
    setTimeout(() => {
        console.log("In function two")
    },2000)
}
fun1();