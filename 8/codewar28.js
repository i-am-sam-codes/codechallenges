//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    const newArr = arr.filter(num => num > -1)
    
      if (newArr.length > 0) {
        return newArr.reduce((a,b) => a+b)
      }else if (newArr.length < 0) {
        return 0
      }else if(newArr.length == 0){
        return 0
      }
    
}