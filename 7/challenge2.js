//Your task is to return an array where each object will have a new property 'greeting' with the following string value:
//Hi < firstName here >, what do you like the most about < language here >?

function greetDevelopers(list) {
    let result = list.filter(person => person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`);
     return result; 
}