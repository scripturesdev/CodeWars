function isValidCoordinates(coordinates){
    let re= /^(-?((\d|[0-8]\d)(\.\d+)?)|90),\s?(-?((\d\d?|[01][0-7]\d)(\.\d+)?)|180)$/
    return re.test(coordinates)
} 

/**
 * ^ = beginning of string
 * (-?((\d|[0-8]\d)(\.\d+)?)|90) = match numbers between -90 to 90
 * ,\s? = match the ", " between long and lat
 * (-?((\d\d?|[01][0-7]\d)(\.\d+)?)|180) = match number -180 to 180
 * $ = end of string
 */