function solution(string) {
    const newWord = string.replace(/([A-Z])/g, ' $1').trim()
     return newWord
  }