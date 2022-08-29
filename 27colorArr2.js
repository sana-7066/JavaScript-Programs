const color = ['blue','red','green','orange','violet','indigo','yellow'];

function ordinal(index)
{
  const ord = ['th','st','nd','rd'];
  return index+(ord[index]||ord[0])
}
for(i=0;i<color.length;i++)
{
    n=i+1;
console.log(`${ordinal(n)} choice is ${color[i]}`)
}