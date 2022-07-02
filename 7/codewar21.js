//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    const string = str.split('')
    const valuesToRemove = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    const newStr = string.filter(item => !valuesToRemove.includes(item))
    return newStr.join('')
}