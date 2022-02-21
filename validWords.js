var validWord = function(dictionary, word) {
    // take word match substring in dictionary, split by substring do same for word from dictionary
    let ans = true
    let substr = []
    dictionary.forEach(el => { 
        let w1 = word.split(el)
        if(w1.length == 2) substr.push(w1.push())   
    });
    console.log(substr)
    substr.forEach( el => {
        if (!dictionary.includes(el)) return false
    })

    return true
};
  

 console.log(validWord(['code', 'wars'], 'codewars'))
 
 
 
 
 