function isIsogram(str){
    str = str.toLowerCase();
    if(str.length == 0) { return true }
    for (let i = 0; i < str.length; i++) {
      // repeating letter
      if (str.split(str[i]).length != 2) { return false }
    }
    return true
  }



  const str = 'JavScript'
  console.log(isIsogram(str))