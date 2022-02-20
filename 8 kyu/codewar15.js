//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet (name, owner) {
    let greeting = (name == owner) ? 'Hello boss' : 'Hello guest';
     return greeting;
}