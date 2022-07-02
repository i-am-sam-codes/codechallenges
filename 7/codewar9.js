//In this kata, you are asked to square every digit of a number and concatenate them.
function squareDigits(num){
    return Number(num.toString().split('').map(x => x ** 2).join(''))
}