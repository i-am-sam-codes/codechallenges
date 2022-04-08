//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){ 
    if(numbers.length > 0) {
    let result = numbers.map(x => x*x)
    return result.reduce((a,b) => a + b)
  }else {
    return 0 
  }
  
  }