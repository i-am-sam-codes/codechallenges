//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
const min = function(list){
    const result = Math.min(...list)
    return result
}

const max = function(list){
    const maxResult = Math.max(...list)
    return maxResult
}