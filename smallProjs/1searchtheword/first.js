 const submit = document.getElementById('submit');
 submit.addEventListener('click',()=>{
    const para = document.getElementById('para1').value;
    const str = document.getElementById('string1').value;
    if(para !== "" && str !== "")//*
    {
        const regx = new RegExp(str,'gim');//*
        const count = (para.match(regx) || []).length; // to avoid the error if match() functions result is null 
        if(count !==0)
        {
        document.querySelector('#resultdiv').innerHTML = 
        `<b>${str}</b> is present <b>${count}</b> times in given paragraph <br> 
        Do you want to check where <b>${str}</b> is present in paragraph ?<br>
        <button id='yes'> Yes</button> &nbsp&nbsp <button id='no'> No</button>`;

        const yes = document.getElementById('yes');
        const no = document.getElementById('no');
        yes.addEventListener('click',() => {
            const result = para.replace(regx,`<span class=highlight>${str}</span>`);//* to highlight all occurance of the string 
            document.getElementById('div2').innerHTML = result;
        })
        no.addEventListener('click',() =>{
            document.getElementById('div2').innerHTML = `Ok have a good Day !!!`; 
        })
    }
    else
    document.querySelector('#resultdiv').innerHTML = `Sorry the given string is not present in the paragraph`;
    document.getElementById('div2').innerHTML ='';
    }
    else
    alert('please add data in both fie;ds')
 })