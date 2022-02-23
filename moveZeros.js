var moveZeros = function (arr) {
    let a = []
    // get indexes of all zeros
    arr.map((el,idx) => {
      if(el == 0) {arr.push(0);a.push(idx)}
    })
    let count = 0
    while(count < a.length) {
        arr.splice(a[count],1)
        count++
    }
    return arr
  }

  console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))

  /*
[9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]
[9,9,1,2,1,1,3,1,9,0,9,0,0,0,0,0,0,0,0,0]
  
const re = /0/g
    arr = arr.join('').replace(re,'').split('')
    arr = arr.map(e => parseInt(e))
    arr = arr.concat(a)
    
    return arr

*/