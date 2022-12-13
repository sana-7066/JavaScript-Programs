function diagonalDifference(arr) {
    // Write your code here
   const rows = arr.length;
   const cols = arr.length;
   let dia1=0;
   let dia2=0;
   for(i=0;i<arr.length;i++)
   {
       for(j=0;j<arr[i].length;j++)
       {
        //    console.log('element'+arr[i][j])
            if(i==j)
           {
           dia1+= arr[i][j];
        //    console.log(dia1);
           }   
           if(i+j == (arr.length-1))
           {
            // console.log('dia2 '+dia2)
               dia2 +=arr[i][j];
            //    console.log('dia2'+dia2)
           }
       }
   }
   console.log('Diff'+Math.abs(dia2-dia1))
}

diagonalDifference([[1,2,3],[4,5,6],[7,8,9]])