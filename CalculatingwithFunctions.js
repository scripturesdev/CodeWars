function expression(num, operation) {
    if(!operation) { return num }
    return operation(num)
}

function zero(operation)    { return expression(0,operation) }
function one(operation)     { return expression(1,operation) }
function two(operation)     { return expression(2,operation) }
function three(operation)   { return expression(3,operation) }
function four(operation)    { return expression(4,operation) }
function five(operation)    { return expression(5,operation) }
function six(operation)     { return expression(6,operation) }
function seven(operation)   { return expression(7,operation) }
function eight(operation)   { return expression(8,operation) }
function nine(operation)    { return expression(9,operation) }

function plus(second) { 
    return function(first){ return first + second }
}

function minus(second) {
    return function(first){ return (first - second) }
}
function times(second) {
    return function(first){ return first * second }
}
function dividedBy(second) {
    return function(first){ return Math.floor(first / second) }
}
