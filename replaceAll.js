function replaceAll(input, find, replace) {
    if(input == "") return replace
    if(find == '') {
    if ( input.length == 1) {
        input = input.replace(/(\w)/gi,replace+"\$1"+replace )
        return input
    }
    input = input.replace(/(\w)/g,replace+"\$1")
    input += replace
    return input
    }
    input = input.replace(/(find)/g,replace)
    // use recursive call to solve this issue.
    while (input != input.replace(find, replace)) {
        input = input.replace(find, replace)
        console.log(input)
    }
    return input
}

console.log(replaceAll("\^$.|?*+()[]{}", "\^$.|?*+()[]{}", "-"))
