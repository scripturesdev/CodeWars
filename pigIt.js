function pigIt(str){
    let arr = str.split(' ')
    let ans = ""
    
    arr.filter((val, idx) => {
        return idx != 0;
    })
    arr.forEach( (word,index) => {
      // !! means to convert the match into a boolean. will give true if matched.
        if(!!word.match(/^[.,:!?]/)) { 
            ans+= word
            return ans 
        }
        else {
            word = word.split('') 
            let ord = word.filter((val, idx) => idx != 0)
            ans += ord.join('') + `${word[0]}ay `
        } 
    });

    return ans.trim()
    
}
