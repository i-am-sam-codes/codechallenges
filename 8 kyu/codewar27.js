//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let arr = x.split('')
    
    for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 5) {
      arr[index] = 0;
    }else if (arr[index] >= 5) {
      arr[index] = 1
    }
  }
    return arr.join('')
}