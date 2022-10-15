function redundant(str)
{
    return function()
    {
        return str;
    }
}

console.log(redundant('sana shaikh'))
redundant('sana shaikh')