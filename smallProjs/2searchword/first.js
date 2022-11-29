const search = document.getElementById('searchButton');

search.addEventListener('click',() =>{
    const para = document.getElementById('para').value;
    const str = document.getElementById('str').value;
    if(para !== ""&& str !== "")
    {
        const result = document.getElementById('resultDiv');
        const reg = new RegExp(str,'ig');//*
        const count = (para.match(reg) || []).length;//*
        if(count > 0)
        {
            result.innerHTML = `<p>${str} is present ${count} times in above paragraph </p><br> Want to check where the string is present ? <br>
            <button id='yes'> Yes</button> &nbsp;&nbsp;<button id='no'>No</button>`;
            const yes = document.getElementById('yes');
            const no = document.getElementById('no');
            no.addEventListener('click',() =>{
                document.getElementById('div2').innerHTML = `OK have a nice day`
            })
            yes.addEventListener('click',()=>{ 
                document.getElementById('div2').innerHTML = para.replace(reg,`<span>${str}</span>`)//*
            })
        }
        else
         result.innerHTML = `<p>sorry the given string is not present in above para</p>`
    }
    else
    {
        document.getElementById('resultDiv').innerHTML = 'Please insert data in both fields ';
    }
})