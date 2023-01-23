/* 
s=[2,2,1,3,2] => chocolate bar with integer on it
d=4
m=2
o/p=>2
*/
function birthday(s, d, m) {
    let count = 0
    for (let i = 0; i <= s.length - m; i++) {
        let sum = s.slice(i, i + m).reduce((a, c) => a + c)
        if (sum == d) count++
    }
    return count
}