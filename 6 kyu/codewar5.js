//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(a){
    let arr = a.toLowerCase().split('')
    const obj = {}
    let count = 0
    arr.forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
    })
    
    for (let i in obj) {
      if(obj[i] > 1){
        count++
      }
    }
    return count
}