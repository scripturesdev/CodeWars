function isValidWalk(walk) {
    if (walk.length != 10) return false
    
    function count(el) {
      let count = 0
      for (const dir in walk) if (el == walk[dir]) count++
      return count
    }
    
    return count('n') == count('s') && count('w') == count('e')
  }



console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');