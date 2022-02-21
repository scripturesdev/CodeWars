function isIsogram(str){
    if (str.length== 0) return true
    let arr = str.toLowerCase().split('')
    console.log(str)
    let a= arr.map((el, idx) => {
      if (el == arr[idx+1] || str.toLowerCase().split(el).length > 2 ) return false
      return true
    })
    let ans = !a.includes(false)
    console.log(str,a, ans)
    return ans
  }

  //console.log( isIsogram("Dermatoglyphics"), true );
  //console.log( isIsogram("isogram"), true );
  //console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
  console.log( isIsogram("moOse"), false, "same chars may not be same case" );
  //console.log( isIsogram("isIsogram"), false );
  //console.log( isIsogram(""), true, "an empty string is a valid isogram" );P