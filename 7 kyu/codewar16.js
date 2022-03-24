//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    const arr = str.toLowerCase().split('')
    const s = new Set(arr)
    if(arr.length !== s.size){
           return false
        }else{
          return true
        }
}