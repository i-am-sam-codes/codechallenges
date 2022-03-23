//Given a string, swap the case for each of the letters.
function swap(str){
    const words = str.split('')
    
    const result = words.map((e) => { 
      if(e == e.toUpperCase()) {
      return e.toLowerCase() 
    } if(e == e.toLowerCase()){
      return e.toUpperCase()
    } else {
      return e
    }})
    return result.join('')
}