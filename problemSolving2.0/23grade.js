function gradingStudents(grades) {
    // Write your code here
    /*
    Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
Examples

 round to  (85 - 84 is less than 3)
 do not round (result is less than 40)
 do not round (60 - 57 is 3 or higher) 
 return array*/
 for( var i in grades)
{
    let mult5;
   if(grades[i] >= 38)
   {
       let j = grades[i];
       do{
           mult5 =j;
           j++;
       }while(mult5 % 5 !== 0)
       if(mult5-grades[i]<3)
       {
           grades[i] = mult5;
       }
   }
   
}
 return grades;

}
console.log(gradingStudents([37,38,49,50,60,87]))

//---------------------Method 2 ----------------------
function grade2(arr)
{
    const arr2 = arr.map(elem =>{
        if(elem >=38 && Math.ceil(elem/5)*5 - elem < 3)
        {
        return (elem = Math.ceil(elem/5)*5)
        }
        else
        return elem
    })
    return arr2;
}
console.log(grade2([ 37, 38, 50, 45, 59, 87 ]))
//o/p [ 37, 40, 50, 50, 60, 87 ] first fun
//o/p [ 37, 40, 50, 45, 60, 87 ] second fun
//Math.floor(),round(),ceil(),Math.random(),sqrt(),pow()