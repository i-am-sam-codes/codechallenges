//Simple, given a string of words, return the length of the shortest word(s).
function findShort(str){
    const words = str.split(' ')
    const shortest = words.reduce((a, z) => a.length <= z.length ? a : z)
    return shortest.length
  }