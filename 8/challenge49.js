//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
    let str = name.toLowerCase()
    for(let i of str) {
      if(i[0] == "r") {
        return `${name} plays banjo`
      }
      return `${name} does not play banjo`
    }
}