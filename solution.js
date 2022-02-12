function solution(str) {
    let pairs = []
    let pair = ""
    for(let i=0; i < str.length;i+=2) {
        if (str.length % 2 == 1 && i == str.length-1) pair=`${str[i]}_`; 
        else pair= str[i]+str[i+1]
        pairs.push(pair)
        
    }
    return pairs    
}
console.log(solution("abcde"))