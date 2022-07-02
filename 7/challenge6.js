//Your task is to return either:

//true if all developers in the list code in the same language; or
//false otherwise.

function isSameLanguage(list) {
    const result = []  
    
    for (const person in list) {
      result.push(list[person].language)
    }
    return result.every(element => element === result[0]);
  }