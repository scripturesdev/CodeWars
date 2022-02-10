const eyes = [':',';']
const nose = ['-','~']
const mouth = [')','D']

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let i = 0;
    let thisSmiley = 0
    let countS = 0

    while (i < arr.length) {
      thisSmiley = arr[i].split('')
      
      if ( eyes.includes(thisSmiley[0])) {
          
          if (thisSmiley.length > 2) {
            if ( nose.includes(thisSmiley[1]) && mouth.includes(thisSmiley[2]))   { countS++; i++; continue; }
          }
          if (mouth.includes(thisSmiley[1])) { countS++; i++; continue;}
      }
      i++
    }
    return countS
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D',':~)',';~D',':)']), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);