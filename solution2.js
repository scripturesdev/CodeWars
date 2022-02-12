function solution(str) {
    let pairs = []
    let pair = ""
    for(let i=0; i < str.length;i+=2) {
        second = str[i+1] || '_' // if object exists return it otherwise return _
        pairs.push(str[i]+second) 
    }
    return pairs    
}
console.log(solution("abcdef"))