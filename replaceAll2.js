function replaceAll(input, find, rep) {
    let arr = input.split(find);
    if (find.length === 0) {
      arr.unshift('');
      arr.push('');
    }
    return arr.join(rep)
  }

  console.log(replaceAll("\^$.|?*+()[]{}", "\^$.|?*+()[]{}", "-"))

  /*
  Another genius solution.. split the input into 2 arrays, where it s 
  */