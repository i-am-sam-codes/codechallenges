//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    const liters = .5
    const result = time * liters
    
   return Math.floor(result)
  }