function complementNum(num)
{
    const binary = (num >>> 0).toString(2).padStart(32,"0");
    const complement = binary.split('').map(x => x==='0' ?'1' :'0').join('');
    const decimal = parseInt(complement,2);
    console.log((num >>> 0).toString(2))
    console.log(`Number : ${num}\nBinary Number : ${binary}\nComplement Number : ${complement}\nDecimal Complement : ${decimal}`)
}
// function flippingBits(n) {
//     // Converting the number to 32 digit binary number
//     const binary = n.toString(2).padStart(32,'0');
//     // getting complement of above binary number
//     const complement = binary.split('').map(x=> x === '0' ? '1' : '0').join('');
//     //converting the complemented number to decimal number
//     return parseInt(complement,2);

// }
complementNum(-9)