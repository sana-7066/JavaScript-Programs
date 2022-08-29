/**
 * If a function is defined inside the function , then that inner function has
 * access to the variable of outer function this is only possible in javascript 
 * This method is called as closure .
 */
//-------------------------for Global execution context---------------
// var a = 10;
// function fun1()
// {
//     console.log(a);
// }

// fun1();

function fun1()
{
    var r = 4;
    function fun2()
    {
       return r;
    }
    console.log(fun2());
}
fun1();

