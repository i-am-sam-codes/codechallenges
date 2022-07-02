//Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
    const result = []  
    
    for (const person in list) {
      result.push(list[person].language)
    }
    
    const count = {};
  
    for (let index = 0; index < result.length; index++) {
    const element = result[index];
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
  }
     return count
  }