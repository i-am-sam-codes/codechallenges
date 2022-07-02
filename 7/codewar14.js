//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
    const num = n.toString().split('')
    const arrOfNum = num.map(str => {
    return Number(str);
})
    arrOfNum.sort(function(a, b){return b-a})
    return parseInt(arrOfNum.join(''))
  
}