function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  console.log(pigIt('darn this !'))
  /*
  ex: darn this !
  -----------------------------------------
  replace function explanations:
  (\w) -- Capturing Group: \w matches any word character (equivalent to [a-zA-Z0-9_])
  (\w*) -- matches prev token between zero and unlimited times

  \s matches any whitespace character (equivalent to [\r\n\t\f\v ])
  $ asserts position at the end of a line
  g modifier: global. All matches (don't return after first match)
  -----------------------------------------

  (\w) : d a r n t h i s 
  (\w*) : arn, his
  (\s|$) : whitespace or EOL
  */