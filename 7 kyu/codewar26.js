//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let long = s1.concat(s2)
    let newStr = long.split('')
    let newArr = []
    newStr.filter((e, i) => {
       if(newArr.indexOf(e) === -1){
                  newArr.push(e)
              }
    })
     return newArr.sort().join('')
    
  }