const removeN = document.querySelector('#remNewline');
const removeS = document.querySelector('#remSpace');
removeN.addEventListener('click',() => {
    const para = document.getElementById('para').value ;
    if(para !== '')
    {
        document.getElementById('result').value = para.replace(/\n/g," ");
        document.getElementById('result').value=document.getElementById('result').value.replace(/\s\s/gm," ");
    }
    else
    {
        alert('please add data in below text box')
    }
})
removeS.addEventListener('click',() => {
    const para = document.getElementById('para').value ;
    if(para !== '')
    {
        document.getElementById('result').value = para.replace(/\s/mg,`\n`);
        // document.getElementById('result').value=document.getElementById('result').value.replace(/\s\s/gm," ");
    }
    else
    {
        alert('please add data in below text box')
    }
})