function replaceAll(input, find, replace) {
    return input.replace(RegExp(find.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g'), replace);
  }

  /* the initial replace is basically escaping all special characters by pretexting each SC with a backslash (escaping). 
  then doing a replace with the escaped string.. genius.

  ex:console.log(replaceAll("\^$.|?*+()[]{}", "\^$.|?*+()[]{}", "-")) ====>
  find.replace( "\\\^\$\.\|\?\*\+\(\)\[\]\{\}", "-") ====>
  - 

  */