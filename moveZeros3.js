var moveZeros = function (arr) {

    const zeros = arr.filter(el => el === 0);
    const result = arr.filter(el => el !== 0);
    
    return result.concat(zeros)

    /*
    for (let i = 0; i < zeros; i += 1) {
      result.push(0);
    }
    */
    
    return result;
  }