//Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    let re = /[W_]/g;
    let lowX = x.toLowerCase().replace(re, '');
    let reverseX = lowX.split('').reverse().join('');
    return reverseX === lowX;
}