//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
function isIsogram(str){
    let newStr = str.toLowerCase().split('')
    let result = true;
    const s = new Set(newStr);
    if(newStr.length !== s.size){
           result = false
        }                   
    return result
}