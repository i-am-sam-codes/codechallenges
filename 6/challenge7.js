//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    const str = numbers.toString().split(',')
    const newFirstElement = "("
    const newArray = [newFirstElement].concat(str)
    newArray.splice(4, 0, ")", " ")
    const arr = newArray
    arr.splice(9, 0, "-").join('')
  
    
    return arr.join('')
    
}