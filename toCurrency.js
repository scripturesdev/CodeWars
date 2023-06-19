// https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/javascript

function toCurrency(price){
    const pr = price.toString()
    if (pr.length <= 3) {return pr}
     let curr = pr.slice(0, pr.length % 3) // add the first part of the string that is shorter than 3
    for(let i = pr.length % 3; i < pr.length; i += 3) {
        // insert comma into index i
        curr += ',' + pr.slice(i, i + 3)
    }
    if(curr[0] == ',') {curr = curr.slice(1,curr.length)}
    return curr
}
console.log(toCurrency(1234)) // output: "1,234"
console.log(toCurrency(1234567)) // output: "1,234,567"