function findEvenIndex(arr) {
    
    if (arr.length == 1) return 0;
    const constPairs = [[0,arr.filter((val, idx) => idx != 0).reduce((prev,curr)=> prev+curr)]]
    for(let i = 1; i < arr.length -1; i++){
        let left  = arr.filter((val, idx) => idx < i).reduce((prev,curr) => prev+curr)
        let right = arr.filter((val, idx) => idx > i).reduce((prev,curr) => prev+curr)
        constPairs.push([left, right])
    }
    const last = [arr.filter((val, idx) => idx != arr.length-1).reduce((prev,curr) => prev+curr),0]
    constPairs.push(last)
    const ans = constPairs.filter((val, idx) => val[0] == val[1])
    return constPairs.indexOf(ans[0])
} 

console.log(findEvenIndex([2,3,5]))     
console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");