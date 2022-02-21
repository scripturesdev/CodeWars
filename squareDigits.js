function squareDigits(num){
    let arr = num.toString().split('')
    let ans = arr.map(el => {
      return el*el
    })
    return parseInt(ans.join(''))
  }

  console.log(squareDigits(3212))