function getQuotes(string) {
    var reg = /"[^"]+"/g;
    return string.match(reg);
  }
  
  console.log(getQuotes('"example quote #1" some text "example quote #2"'))