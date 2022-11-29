//--------------------------------------------------NOTES--------------------------------
console.log('plasticCupIsAvail'.replace(/([A-Z])/g, letter => ` ${letter.toLowerCase()}`));
//this function will return space separated string
//letter => ` ${letter.toLowerCase()}` this arguement taking capital letter and returning lowercase letter
//o/p
//plastic cup is avail
str = 'iPad'.replace(/\r?\n|\r/g, "")
console.log(str)

//--------------------------------------------------QUESTION--------------------------------
/*Each line of the input file will begin with an operation (S or C) 
followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
*/
function processData(input) {
    //Enter your code here
    const splited = input.split(';');
    const action = splited[0];
    const type = splited[1];
    let str = splited[2];
    str = str.replace(/\r?\n|\r/g, "");//for removing CR and LF Characters
    
    switch(action)
    {
        case 'S' :
            switch(type)
            {
                case 'M':
               const result= str.substring(0,str.length-2).replace(/[A-Z]/g,letter => ` ${letter.toLowerCase()}`)
               console.log(result);
                break;
                case 'C':
                const preRes = str.charAt(0).toLowerCase() + str.substring(1);
                const result2= preRes.replace(/[A-Z]/g,letter => ` ${letter.toLowerCase()}`)
               console.log(result2);
                break;
                case 'V':
                const result3= str.replace(/[A-Z]/g,letter => ` ${letter.toLowerCase()}`)
               console.log(result3);
                break;
            }
          break;
        case 'C' :
        switch(type)
            {
                case 'M':
               const result= str.replace(/\s[a-z]/g,letter => `${letter.toUpperCase().trim()}`) + "()";
               
               console.log(result);
                break;
                case 'V':
                        const result2= str.replace(/\s[a-z]/g,letter => `${letter.toUpperCase().trim()}`);
               
               console.log(result2);
                break;
                case 'C':
                const preRes = str.charAt(0).toUpperCase() + str.substring(1);
                        const result3= preRes.replace(/\s[a-z]/g,letter => `${letter.toUpperCase().trim()}`);
               
               console.log(result3);
                break;
            }
         break;
    }
} 

processData('S;M;plasticCup()');

processData('C;V;mobile phone');

processData('C;C;coffee machine');

processData('S;C;LargeSoftwareBook');

