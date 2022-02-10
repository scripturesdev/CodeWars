function sumArray(arr) {
    let tot = 0
    for(let item of arr) {
      //console.log(item)
      tot += item
    }
    //console.log(tot)
    return tot
  } 
  
  function findEvenIndex(arr) {
    if (arr.length < 2) { return -1}
    
    for (let i=1; i < arr.length-1; i++) {
        let original = arr
        let right = original.splice(i+1)
        let left = original
        if (sumArray(left) == sumArray(right)) return i
        i++
    }
    return -1
  }
  
  // splice leaves right hand side
  // slice leaves left hand side


console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");