//Write a function findNeedle() that takes an array full of junk but containing one "needle"
function findNeedle(haystack) {
    const needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
}