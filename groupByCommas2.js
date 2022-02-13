/*
The toLocaleString() method returns a string with a language-sensitive representation of this number.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

Can be used for date's also 
*/
function groupByCommas(n) {
    return n.toLocaleString()
}

console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');