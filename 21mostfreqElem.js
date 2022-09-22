// Find the element which has highest number of frequency
//note: values stored in variables matters
//VIMP
const Arr = [1,5,151,1,1,5,1,6,8,16,8,6,1,6];
let count=0;
let freq = 1;
let item = 0 ;
for(i=0;i<Arr.length;i++)
{
    for(j=0;j<Arr.length;j++)
    {
        if(Arr[i] == Arr[j])
        {
            count++;
            if(count>freq)
            {
                freq = count;
                item = Arr[i];
            }
        }
    }
    count = 0;
}
console.log(item +" " +freq);