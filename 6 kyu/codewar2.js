//Given n, take the sum of the digits of n. If that value has more than one digit, 
//continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//Digital Root
function digital_root(n) {
    let sum = n
    let arr = []
    let reducer = (a,b) => parseInt(a) + parseInt(b)
  
    while (sum > 9) {
      arr = sum.toString().split("")
      sum = arr.reduce(reducer)
    }
    
    return sum
}