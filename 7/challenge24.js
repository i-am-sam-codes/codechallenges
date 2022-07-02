//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    const dnaArray = dna.split('')
    const newArray = dnaArray.map((e) => e == "A" ? "T" : e == "T" ? "A" : e == "C" ? "G" : e == "G" ? "C" : " ")
    return newArray.join('')
}