function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}

/* beautiful regex..  
/i to ignore case
/(\w).*\1/
(\w) to group any letter
.* match unlimited letters
\1 ?
.test(str)