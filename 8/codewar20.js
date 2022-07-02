//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    let num = n.toString();
    let result =  num.split('').reverse().map( n => Number(n) )
    return result
}