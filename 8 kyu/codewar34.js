//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name){
    const word = name.split(' ')
    const result = word.map((e) => e[0]).join('')
    const sum = result.split('')
    const dot = sum.splice(1, 0, ".")
    return sum.join('').toUpperCase()
}