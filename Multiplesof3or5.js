function solution(number){
    if(number <= 3) return 0
    let ans = []
    for(let n = 1; n<number; n++) if(n % 3 == 0 || n % 3 == 3 || n % 5 == 0 || n % 5 == 5) ans.push(n); continue;
    return ans.reduce((prev,next) => {return prev+next})
}

