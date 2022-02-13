function groupByCommas(n) {
    let output = n.toString().split('')
    if (output.length <= 3) return output.join('')
    
    let c = output.length -3
    for(c ; c>= 1 ; c-= 3) {
        output.splice(c, 0,',') // adds comma at each 3rd position
    }
    return output.join('')
}

console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');