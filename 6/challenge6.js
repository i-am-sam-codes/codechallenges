//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
function spinWords(string){
    const str = string.split(' ').
        map( v => { 
           return v.length > 4 ?  v.split('').
           reverse().join('') : v; 
        } ).join(' ');  
      return str
  }