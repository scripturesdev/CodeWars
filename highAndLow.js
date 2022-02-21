function highAndLow(numbers){
    let a = numbers.split(" ").sort((a,b) => {return a-b})
    console.log(`${a}`)
    ans = a[a.length-1] +" "+ a[0]
    return ans
  }

  console.log(highAndLow("-4 -5 -3 1 0 54 -2 4"))