//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
    let result = +a + +b;
    if (a >= 0 && b >= 0) return String(result)
    return "0";
}