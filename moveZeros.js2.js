function moveZeros(arr) {
    let len = arr.length
    let idx = len - 1
    let flag = true
    while( idx >= 0 ) {
        if( arr[idx] == 0 && flag) {
            idx--
            continue
        }
        else if(flag) {
            idx--
            flag=false
            continue
        }
        else if(!flag && arr[idx] == 0) {
            arr.splice(idx,1)
            arr.push(0)
            idx--
            continue
        }
        idx--
    }
    return arr
  }

  console.log(moveZeros([a,0,0,b,,c,d,0,1,false,0,1,0,3,,0,1,9,0,0,[object,Object],0,0,9]))

  /*
[9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]
[9,0,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0]
  
const re = /0/g
    arr = arr.join('').replace(re,'').split('')
    arr = arr.map(e => parseInt(e))
    arr = arr.concat(a)
    
    return arr

*/